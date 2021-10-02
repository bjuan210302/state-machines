export function calcRelatedEquivalentMachine(parsedTable, machineType) {
    var allStates = Object.keys(parsedTable);
    var reachableStates = calcReachableStates(parsedTable, machineType)
    var nonReachableStates = allStates.filter(n => !reachableStates.includes(n))

    nonReachableStates.forEach(statekey => {
        delete parsedTable[statekey]
    })

    return parsedTable
}

export function calcMinimumEquivalentMachine(parsedTable, machineType) {

    var related = calcRelatedEquivalentMachine(parsedTable, machineType)

    var statesSuccessors = extracStateSuccessors(related, machineType)
    var statesOutputs = extractStateOutputs(related, machineType)
    var p0 = (machineType) ? calcP0Moore(statesOutputs) : calcP0Mealy(statesOutputs)

    var pf = findpf(statesSuccessors, p0)
    var newMachine = assemble(pf, statesSuccessors, statesOutputs, machineType)

    return [pf, newMachine]
    
}

function calcReachableStates(parsedTable, machineType) {
    var statesSuccessors = extracStateSuccessors(parsedTable, machineType)

    var tree = new Tree(statesSuccessors)

    return tree.added
}

function calcP0Moore(statesOutputs) {
    var p0 = Object.keys(statesOutputs).reduce(
        function (groups, key) {
            var value = statesOutputs[key]
            groups[value] = (groups[value] || []).concat(key)
            return groups
        },
        {}
    )

    return Object.values(p0)
}

function calcP0Mealy(statesOutputs) {
    var classes = {}
    var globalKey = 0

    var p0 = Object.keys(statesOutputs).reduce(
        function (groups, key) {
            var output = statesOutputs[key]

            var flag = false;
            Object.values(classes).forEach(function (existingOutput) {

                var arraysEquals = areArraysIdentical(existingOutput, output)
                if (arraysEquals) {
                    var classKey = Object.keys(classes).find(key => areArraysIdentical(existingOutput, classes[key]))
                    groups[classKey] = (groups[classKey] || []).concat(key)
                    flag = true
                }

            })

            if (!flag) {
                classes[globalKey] = [].concat(output)
                groups[globalKey] = (groups[globalKey] || []).concat(key)
                globalKey++

            }


            return groups
        },
        {}
    )

    return Object.values(p0)
}

function findpf(stateSucessors, pi) {
    var pf = {}
    var newBlocksId = 0;

    Object.values(pi).forEach(function (block) {

        var blocktoProccess = block.slice()

        do {

            var lastKey = ''

            for (var i = 0; i < blocktoProccess.length;) {
                var state = blocktoProccess[i]

                if (lastKey == '') {
                    pf[newBlocksId] = [state]
                    blocktoProccess.shift()
                    lastKey = state
                    newBlocksId++
                } else {
                    if (shouldBeInSameBlock(stateSucessors[state], stateSucessors[lastKey], pi) == 1) {
                        pf[newBlocksId - 1].push(state)
                        blocktoProccess.splice(i, 1)
                        lastKey = state
                    } else {
                        i++
                    }
                }

            }

        } while (blocktoProccess.length > 0)

    })

    return (areMatrixesIdentical(pi, pf)) ? pf : findpf(stateSucessors, pf)
}

function shouldBeInSameBlock(successors1, successors2, partition) {

    var flag = 1;

    for (var i = 0; i < successors1.length && flag == 1; i++) {

        var s1i = successors1[i]
        var s2i = successors2[i]

        var sameState = (s1i == s2i)

        for (var j = 0; j < Object.values(partition).length && !sameState; j++) {
            var block = Object.values(partition)[j]

            sameState = block.includes(s1i) && block.includes(s2i)
        }

        flag = flag * sameState

    }

    return flag;
}

function assemble(pf, statesSuccessors, statesOutputs, machineType){

    if (machineType) return mooreAssembler(pf, statesSuccessors, statesOutputs)
    else return mealyAssembler(pf, statesSuccessors, statesOutputs)

}

function mooreAssembler(pf, statesSuccessors, statesOutputs){
    var machine = {}

    Object.values(pf).forEach(function(value, i){
        var representator = value[0]
        machine['q'+i] = {}
        machine['q'+i].stateoutput = statesOutputs[representator]
        
        var aux = statesSuccessors[representator]
        aux.forEach(function(suc, j){

            //This line finds the key of the successor block of this state
            //Doing this to put the key as a the successor instead of the array itself
            var succStateKey = Object.keys(pf).find(
                key => areArraysIdentical(findBlockOf(suc, pf), pf[key])
            
            )
            machine['q'+i]['sucesor-' + j] = 'q'+succStateKey
        })
    })

    return machine
}

function mealyAssembler(pf, statesSuccessors, statesOutputs){
    var machine = {}
    

    Object.values(pf).forEach(function(value, i){
        var representator = value[0]
        machine['q'+i] = {}
        var aux = statesSuccessors[representator]
        aux.forEach(function(suc, j){

            //This line finds the key of the successor block of this state
            //Doing this to put the key as a the successor instead of the array itself
            var succStateKey = Object.keys(pf).find(
                key => areArraysIdentical(findBlockOf(suc, pf), pf[key])
            
            )
            machine['q'+i]['sucesor-' + j] = [
                'q'+succStateKey,
                statesOutputs[representator][j]
            ]
        })

    })

    return machine
}

function findBlockOf(state, pf){
    var ret = null

    Object.values(pf).forEach(function(block){
        if(block.includes(state)){
            ret = block
        }
    })

    return ret
}

/**
 * Parsed table is an object in with the shape given by the MooreMachineTable and MealyMachineTable formatters
 * 
 * Outputs an object with the shape key: []
 * A key is a state and its value is an array containing the states it(the key-state) leads to
 */
function extracStateSuccessors(parsedTable, machineType) {
    var statesSuccessors = {}

    if (machineType) {
        Object.keys(parsedTable).forEach(statekey => {
            //The slice is to exclude the stateoutput value
            statesSuccessors[statekey] = Object.values(parsedTable[statekey]).slice(1)
        })
    } else {
        Object.keys(parsedTable).forEach(statekey => {
            var values = []
            Object.keys(parsedTable[statekey]).forEach(sucesor => {
                values.push(parsedTable[statekey][sucesor][0])
            })
            statesSuccessors[statekey] = values
        });
    }

    return statesSuccessors
}

/**
 * Parsed table is an object in with the shape given by the MooreMachineTable and MealyMachineTable formatters
 * 
 * Outputs an object with the shape key: []
 * A key is a state and its value is an array containing the symbols it(the key-state) outputs.
 */
function extractStateOutputs(parsedTable, machineType) {
    var statesOutputs = {}

    if (machineType) {
        Object.keys(parsedTable).forEach(statekey => {
            statesOutputs[statekey] = parsedTable[statekey].stateoutput
        })
    } else {
        Object.keys(parsedTable).forEach(statekey => {
            var values = []
            Object.keys(parsedTable[statekey]).forEach(sucesor => {
                values.push(parsedTable[statekey][sucesor][1])
            })
            statesOutputs[statekey] = values
        });
    }

    return statesOutputs

}

function areArraysIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}
function areMatrixesIdentical(mat1, mat2) {
    if (mat1.length !== mat2.length) return false;
	for (var i = 0; i < mat1.length; i++) {
		if (!areArraysIdentical(mat1[i], mat2[i])) return false;
	}
	return true;
}

//<--------------------------- TREE --------------------------->

class StateNode {
    constructor(id) {
        this.id = id
        this.children = []
    }

    addChild(child) {
        this.children.push(child)
    }
}

/**
 * We don't really need a Tree with the states, but it is a simple, fast way of finding wich states
 * are reachable and wich are not
 */
class Tree {
    /**
     * States is an object with the shape key: []
     * A key is a state and its value is an array containing the states it(the key-state) leads to
     */
    constructor(states) {
        this.states = states
        this.keys = Object.keys(states)
        this.root = new StateNode(this.keys[0])

        this.added = []
        this.added.push(this.keys[0])

        //Building the tree
        this.addChildrenOf(this.root)
    }

    /**
     * Parent is a node with an id that is contained in the this.keys (Object.keys(states))  array
     */
    addChildrenOf(parent) {
        var newChildren = this.states[parent.id]

        //This if checks if ALL of the newChildren to be added are already added
        if (newChildren.every(v => this.added.includes(v))) {
            return
        }

        var newAdded = [] //Array of StateNodes, to store the nodes added in this invocation
        newChildren.forEach(childKey => {

            //if is not already added
            if (!this.added.includes(childKey)) {
                var aux = new StateNode(childKey)
                parent.addChild(aux)
                this.added.push(childKey)
                newAdded.push(aux)
            }

        });

        newAdded.forEach(element => {
            this.addChildrenOf(element)
        });
    }
}




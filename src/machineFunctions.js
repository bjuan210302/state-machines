export function calcReachableStates(parsedTable, machineType){
    var states = cleanParsedTable(parsedTable, machineType)

    var tree = new Tree(states)

    return tree.added
}

function cleanParsedTable(parsedTable, machineType){
    var states = {}

    if (machineType) {
        Object.keys(parsedTable).forEach(statekey => {
            delete parsedTable[statekey].stateoutput 
            states[statekey] = Object.values(parsedTable[statekey])
        })
    } else {
        Object.keys(parsedTable).forEach(statekey => {
            var values = []
            Object.keys(parsedTable[statekey]).forEach(sucesor =>{
                values.push(parsedTable[statekey][sucesor][0])
            })
            states[statekey] = values
        });
    }

    return states
}

class StateNode{
    constructor(id){
        this.id = id
        this.children = []
    }

    addChild(child){
        this.children.push(child)
    }
}

class Tree{
    /**
     * States is an object with the shape key: []
     * A key is a state and its value is an array containing the states it(the key-state) leads to
     */
    constructor(states){
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
    addChildrenOf(parent){
        var newChildren = this.states[parent.id]

        //This if checks if ALL of the newChildren to be added are already added
        if(newChildren.every(v => this.added.includes(v))){
            return
        }

        var newAdded = [] //Array of StateNodes, to store the nodes added in this invocation
        newChildren.forEach(childKey => {

            //if is not already added
            if(!this.added.includes(childKey)){
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




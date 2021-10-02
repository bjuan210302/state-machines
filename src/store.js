import { createStore } from "vuex" 
import { calcRelatedEquivalentMachine } from './machineFunctions.js'
import { calcMinimumEquivalentMachine } from './machineFunctions.js'

const store = createStore({
   state:{
       statesQ: [],
       inputsS: [],
       outputsR: [],

       relatedequivalentMachine: {},
       minimumEquivalentMachine: {},
       finalPartition: [],
       renderOutput: false,

       machineType: false, //false for Mealy, true for Moore
       parsedTable: {}
      
   },

   getters:{
        machineType(state){
            return state.machineType
        },

        parsedTable(state){
            return state.parsedTable
        },

        relatedequivalentMachine(state){
            return state.relatedequivalentMachine
        },

        minimumEquivalentMachine(state){
            return state.minimumEquivalentMachine
        },

        renderOutput(state){
            return state.renderOutput
        },

        finalPartition(state){
            return state.finalPartition
        }
   },

   mutations:{
    setStatesQ(state, value){
        state.statesQ = value.replace(/\s/g, '').split(',').filter(String)
    },

    setInputsS(state, value){
        state.inputsS = value.replace(/\s/g, '').split(',').filter(String)
    },

    setOutputsR(state, value){
        state.outputsR = value.replace(/\s/g, '').split(',').filter(String)
    },

    calcRelatedEquivalentMachine(state){
        state.relatedequivalentMachine = calcRelatedEquivalentMachine(state.parsedTable, state.machineType);
    },

    calcMinimumEquivalentMachine(state){
        var eqMachine = calcMinimumEquivalentMachine(state.parsedTable, state.machineType)
        state.finalPartition = eqMachine[0]
        state.minimumEquivalentMachine = eqMachine[1]
    },

    setMachineType(state, value){
        state.machineType = value
        state.renderOutput = false
    },

    setParsedTable(state, value){
        state.parsedTable = value
    },

    setRenderOutput(state, value){
        state.renderOutput = value
    }
   }
})

export default store
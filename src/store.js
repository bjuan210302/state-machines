import { createStore } from "vuex" 
import { calcRelatedEquivalentMachine } from './machineFunctions.js'
import { calcMinimumEquivalentMachine } from './machineFunctions.js'
//import { mealy } from './temp/parsedTables.js'

const store = createStore({
   state:{
       statesQ: [],
       inputsS: [],
       outputsR: [],

       relatedequivalentMachine: {},
       minimumEquivalentMachine: [],

       machineType: false, //false for Mealy, true for Moore
       parsedTable: {}
      
   },

   computed:{
        getMachineType(){
            return this.state.machineType
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

    setRelatedEquivalentMachine(state){
        state.relatedequivalentMachine = calcRelatedEquivalentMachine(state.parsedTable, state.machineType);
    },

    setMinimumEquivalentMachine(state){
        state.minimumEquivalentMachine = calcMinimumEquivalentMachine(state.parsedTable, state.machineType);
    },

    setMachineType(state, value){
        state.machineType = value
    },

    setParsedTable(state, value){
        state.parsedTable = value
    }
   }
})

export default store
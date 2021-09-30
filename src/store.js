import { createStore } from "vuex" 
import { calcReachableStates } from './machineFunctions.js'

const store = createStore({
   state:{
       statesQ: [],
       inputsS: [],
       outputsR: [],
       reachableStates: [],
       machineType: false, //false for Mealy, false for Moore
       parsedTable:  {}
      
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

    getReachableStates(state){
        state.accessibleStates = calcReachableStates(this.state.parsedTable, this.state.machineType);
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
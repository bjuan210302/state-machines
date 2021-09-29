import { createStore } from "vuex" 

const store = createStore({
   state:{
       statesQ: '',
       inputsS: '',
       outputsR: '',
       machineType: false //false for Mealy, false for Moore
   },

   computed:{
        getMachineType(){
            console.log('returned ' + this.state.machineType)
           return this.state.machineType
        }
   },

   mutations:{
    setStatesQ(state, value){
        state.statesQ = value
    },

    setInputsS(state, value){
        state.inputsS = value
    },

    setOutputsR(state, value){
        state.outputsR = value
    },

    setMachineType(state, value){
        state.machineType = value
    },
   }
})

export default store
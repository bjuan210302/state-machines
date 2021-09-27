import { createStore } from "vuex" 

const store = createStore({
   state:{
       statesQ: '',
       inputsS: '',
       outputsR: ''
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
    }
   }
})

export default store
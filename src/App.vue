<template>
  <div class="container bg-dark vh-100 min-vw-100 shadow-lg">
    <MainNavBar></MainNavBar>

    <div class="d-flex flex-row h-75 justify-content-start">

      <!--Inputs-->
      <div class="col-6 bg-light">

        <DictionaryInput></DictionaryInput>
        
        <div v-if="machineType">
          <MooreMachineTable ref="machineTable"
          :statesQchild="statesQ" :inputsSchild="inputsS"></MooreMachineTable>
        </div>
        <div v-else>
          <MealyMachineTable ref="machineTable"
          :statesQchild="statesQ" :inputsSchild="inputsS"></MealyMachineTable>
        </div>

        <button @click="$refs.machineTable.parseTable()">Print parsed</button>
        <button @click="getReachableStates">Calculate reachable states</button>

      </div>

      <!--Outputs-->
      <div class="col-6 bg-secondary">
        <pre> {{parsedTable}} </pre>
      </div>

    </div>  

  </div>

</template>

<script>
import MainNavBar from './components/MainNavBar.vue'
import DictionaryInput from './components/DictionaryInput.vue'
import MooreMachineTable from './components/MooreMachineTable.vue'
import MealyMachineTable from './components/MealyMachineTable.vue'

export default {
  name: 'App',

  components: {
    MainNavBar,
    DictionaryInput,
    MooreMachineTable,
    MealyMachineTable
  },

  methods:{
    getReachableStates(){
      this.$store.commit('getReachableStates')
    }
  },
  computed:{

    statesQ: {
      get () {
        return this.$store.state.statesQ
      }
    },

    inputsS: {
      get () {
        return this.$store.state.inputsS
      }
    },

    outputsR: {
      get () {
        return this.$store.state.outputsR
      }
    },

    machineType:{
      get () {
        return this.$store.state.machineType
      },
      set (value) {
        this.$store.commit('setMachineType', value)
      }
    },
    
    parsedTable:{
      get () {
        return JSON.stringify(this.$store.state.parsedTable, undefined, 2)
      }
    }
        
  }

}
</script>

<style>
</style>

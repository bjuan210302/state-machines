<template>
  <div class="container bg-dark vh-100 min-vw-100 shadow-lg">
    <MainNavBar></MainNavBar>

    <div class="d-flex flex-row h-75 justify-content-start">

      <div class="col-6 bg-light">

        <DictionaryInput></DictionaryInput>
        
        <div v-if="machineType">
          <MooreMachineTable ref="machineTable"></MooreMachineTable>
        </div>
        <div v-else>
          <MealyMachineTable ref="machineTable"></MealyMachineTable>
        </div>

        <button @click="$refs.machineTable.parseTable()">Print parsed</button>
      </div>

      <div class="col-6 bg-secondary">
        
      </div>

    </div>  
    <!--Inputs-->
    

    <!--Outputs-->
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

  computed:{

    machineType: {
      get () {
        return this.$store.state.machineType
      },
      set (value) {
        this.$store.commit('setMachineType', value)
      }
    },
    
        
  }

}
</script>

<style>
</style>

<template>
  <div class="container bg-dark vh-100 min-vw-100 shadow-lg">
    <MainNavBar></MainNavBar>

    <div class="d-flex flex-row h-75 justify-content-start">

      <div class="col-6 bg-light">

        <DictionaryInput></DictionaryInput>

        <div class="container p-2">

          <table class="table table-dark">
            <thead>
              <tr >
                <th class="table-dark">State</th>
                <th class="table-dark" v-for="sinput in inputsS" :key="sinput"> {{ sinput }}</th>
                <th class="table-dark">Output</th>
              </tr>
            </thead>

            <tbody>
              <tr class="table-dark" v-for="qstate in statesQ" :key="qstate">
                <th class="table-dark">{{ qstate }}</th>
                
                <th v-for="sinput in inputsS" :key="sinput" class="table-dark">
                  <input type="text" class="form-control">
                </th>

                <th class="table-dark">
                  <input type="text" class="form-control table-dark">
                </th>
                
              </tr>
            </tbody>
          </table>

        </div>

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

export default {
  name: 'App',

  components: {
    MainNavBar,
    DictionaryInput
  },

  computed:{

    statesQ: {
      get () {
        return this.$store.state.statesQ.replace(/\s/g, '').split(',').filter(String)
      },
      set (value) {
        this.$store.commit('setStatesQ', value)
      }
    },

    inputsS: {
      get () {
        return this.$store.state.inputsS.replace(/\s/g, '').split(',').filter(String)
      },
      set (value) {
        this.$store.commit('setInputsS', value)
      }
    },

    outputsR: {
      get () {
        return this.$store.state.outputsR.replace(/\s/g, '').split(',').filter(String)
      },
      set (value) {
        this.$store.commit('setOutputsR', value)
      }
    }
        
  }

}
</script>

<style>
</style>

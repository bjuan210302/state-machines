<template>
  <div class="row p-2">
    <table class="table table-dark">
      <thead>
        <tr>
          <th class="table-dark">State</th>
          <th class="table-dark" v-for="sinput in inputsSout" :key="sinput">
            {{ sinput }}
          </th>
          <th class="table-dark">Output</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="table-dark"
          v-for="(qstate, index) in states"
          :key="qstate"
        >
          <th class="table-dark">q {{ index }} </th>

          <th
            v-for="(sinput, index2) in inputsSout"
            :key="sinput"
            class="table-dark"
          >
            <div>{{ qstate['sucesor-' + index2] }}</div>
            
          </th>

          <th class="table-dark">
            <div>{{ qstate.stateoutput }}</div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['parsedMachine', 'inputsSchild'],
  
  data() {
    return{
        states: [],
        inputsSout: []
    }
  },

  created(){
      this.inputsSout = this.inputsSchild.slice()
      this.states = Object.values(this.parsedMachine)
  },

};
</script>

<style>
</style>
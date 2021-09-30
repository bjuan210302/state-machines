<template>
    <div class="container p-2">
        
          <table class="table table-dark" id="mooretable">
            <thead>
              <tr >
                <th class="table-dark">State</th>
                <th class="table-dark" v-for="sinput in inputsSchild" :key="sinput"> {{ sinput }}</th>
                <th class="table-dark">Output</th>
              </tr>
            </thead>

            <tbody>
              <tr class="table-dark" v-for="(qstate, index) in statesQchild" :key="qstate">
                <th class="table-dark" :id="'statename-' + index">{{ qstate }}</th>
                
                <th v-for="(sinput, index2) in inputsSchild" :key="sinput" class="table-dark">
                  <input type="text" class="form-control" :id="'nextstate-' + index + ',' + index2">
                </th>

                <th class="table-dark">
                  <input type="text" class="form-control table-dark" :id="'stateoutput-' + index">
                </th>
                
              </tr>
            </tbody>
          </table>

    </div>
</template>

<script>
export default {

    props:['statesQchild','inputsSchild','outputsRchild'],

    methods:{

        parseTable(){

            var rows = document.getElementById('mooretable').tBodies[0].rows

            var parsedTable = {}

            for (var i = 0; i < rows.length; i++) {

                var staterow = {};
                var stateid = document.getElementById('statename-' + i).innerHTML

                staterow['stateoutput'] = document.getElementById('stateoutput-' + i).value

                //Ends at row.cells.length-1 because we already have the value of the last cell (stateoutput)
                for (var j = 0; j < rows[i].cells.length - 2; j++) {
                    staterow['sucesor-' + j] = document.getElementById('nextstate-' + i + ',' + j).value
                }

                parsedTable[stateid] = staterow

            }

            this.$store.commit('setParsedTable', parsedTable)
        }

    }
    
}
</script>

<style scoped>

</style>
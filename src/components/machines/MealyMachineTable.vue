<template>
    <div class="row p-2">
        
          <table class="table table-dark table-bordered" id="mealytable">
            <thead>
              <tr >
                <th class="table-dark">State</th>
                <th class="table-dark" v-for="sinput in inputsSchild" :key="sinput"> {{ sinput }}</th>
              </tr>
            </thead>

            <tbody>
              <tr class="table-bordered" v-for="(qstate, index) in statesQchild" :key="qstate">
                <th class="table-bordered" :id="'statename-' + index">{{ qstate }}</th>
                
                <th v-for="(sinput, index2) in inputsSchild" :key="sinput" class="table-bordered">
                    <input type="text" class="form-control" :id="'nextstate-' + index + ',' + index2">
                    <input type="text" class="form-control" :id="'output-' + index + ',' + index2">
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
            var rows = document.getElementById('mealytable').tBodies[0].rows

            var parsedTable = {}

            for (var i = 0; i < rows.length; i++) {

                var staterow = {};

                var stateid = document.getElementById('statename-' + i).innerHTML

                //Ends at row.cells.length-1 because the first cell (statename) is on the table but wasn't assigned an id
                for (var j = 0; j < rows[i].cells.length - 1; j++) {
                    staterow['sucesor-' + j] = [
                            document.getElementById('nextstate-' + i + ',' + j).value,
                            document.getElementById('output-' + i + ',' + j).value,
                        ]
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
<template>
    <div class="container p-2">
        
          <table class="table table-dark" id="mealytable">
            <thead>
              <tr >
                <th class="table-dark">State</th>
                <th class="table-dark" v-for="sinput in inputsS" :key="sinput"> {{ sinput }}</th>
              </tr>
            </thead>

            <tbody>
              <tr class="table-dark" v-for="(qstate, index) in statesQ" :key="qstate">
                <th class="table-dark" :id="'statename-' + index">{{ qstate }}</th>
                
                <th v-for="(sinput, index2) in inputsS" :key="sinput" class="table-dark">
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

    methods:{

        parseTable(){
            var rows = document.getElementById('mealytable').tBodies[0].rows

            var parsedArray = []

            for (var i = 0; i < rows.length; i++) {

                var staterow = {};

                staterow['statename'] = document.getElementById('statename-' + i).innerHTML

                //Ends at row.cells.length-1 because we already have the value of the last cell (stateoutput)
                for (var j = 0; j < rows[i].cells.length - 1; j++) {
                    staterow['sucesor-' + j] = [
                            document.getElementById('nextstate-' + i + ',' + j).value,
                            document.getElementById('output-' + i + ',' + j).value,
                        ]
                }
                console.log(staterow)
                parsedArray.push(staterow)
            }
        }

    },

    computed: {
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

<style scoped>

</style>
<template>
    <div class="card p-2">

        <div class="row pb-2">
            <label class="col-sm-2 col-form-label">States [Q]</label>
            <div class="col-sm-10">
                <input v-model='statesQ' type="text" class="form-control" >
            </div>
        </div>

        <div class="row pb-2">
            <label class="col-sm-2 col-form-label">Inputs [S]</label>
            <div class="col-sm-10">
                <input v-model='inputsS' type="text" class="form-control">
            </div>
        </div>
        
        <div class="row pb-2">
            <label class="col-sm-2 col-form-label">Outputs [R]</label>
            <div class="col-sm-10">
                <input v-model='outputsR' type="text" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>

export default {

    computed:{

        statesQ: {
            get () {
                return this.$store.state.statesQ
            },
            set (value) {
                this.$store.commit('setStatesQ', value)
            }
        },

        inputsS: {
            get () {
                return this.$store.state.inputsS
            },
            set (value) {
                this.$store.commit('setInputsS', value)
            }
        },

        outputsR: {
            get () {
                return this.$store.state.outputsR
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








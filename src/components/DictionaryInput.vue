<template>
  <div class="row">
    <div class="card p-2">

      <div class="row pb-2">
        <label class="col-sm-2 col-form-label">States [Q]</label>
        <div class="col-sm-10">
          <input v-model="statesQ" type="text" class="form-control" />
        </div>
      </div>

      <div class="row pb-2">
        <label class="col-sm-2 col-form-label">Inputs [S]</label>
        <div class="col-sm-10">
          <input v-model="inputsS" type="text" class="form-control" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    
    statesQ: {
      set(value) {
        this.$store.commit("setStatesQ", value);
      },
    },

    inputsS: {
      set(value) {
        this.$store.commit("setInputsS", value);
      },
    },

  },
};
</script>

<style scoped>
</style>








<template>
  <div class="row bg-dark align-items-start py-3 px-0">
    <div class="col-md-6 px-0" align="center">
      <div class="row btn-group col-12 px-3 align-items-start" role="group">
        <div class="col-sm-6 px-0">
          <input
            type="checkbox"
            class="btn-check"
            id="btnmealy"
            autocomplete="off"
            v-model="machineType"
            false-value="1"
            true-value="0"
          />
          <label class="btn btn-outline-light col-sm-12 col-12" for="btnmealy"
            >Mealy Machine</label
          >
        </div>

        <div class="col-sm-6 px-0">
          <input
            type="checkbox"
            class="btn-check"
            id="btnmoore"
            autocomplete="off"
            v-model="machineType"
            false-value="0"
            true-value="1"
          />
          <label class="btn btn-outline-light col-sm-12 col-12" for="btnmoore"
            >Moore Machine</label
          >
        </div>
      </div>
    </div>
    <div class="d-none d-sm-none d-md-block col-6 px-0" align="center">
      <h4 class="col-6 text-light my-0" align="center">Results</h4>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      auxVal: 0, //0 for mealy 1 for moore
      machineTypeBool: false, //false for mealy true for moore
    };
  },

  computed: {
    machineType: {
      get() {
        return this.auxVal;
      },
      set(value) {
        this.machineTypeBool = value == 1;
        this.auxVal = value;
        this.$store.commit("setMachineType", this.machineTypeBool);
      },
    },
  },
};
</script>

<style scoped>
</style>
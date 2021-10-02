<template>
  <div class="row bg-dark align-items-start py-3 px-0">
      <div class="col-6 px-0">
        <div class="btn-group col-12 px-3" role="group">
          <input
            type="checkbox"
            class="btn-check"
            id="btnmealy"
            autocomplete="off"
            v-model="machineType"
            false-value="1"
            true-value="0"
          />
          <label class="btn btn-outline-light" for="btnmealy"
            >Mealy Machine</label
          >

          <input
            type="checkbox"
            class="btn-check"
            id="btnmoore"
            autocomplete="off"
            v-model="machineType"
            false-value="0"
            true-value="1"
          />
          <label class="btn btn-outline-light" for="btnmoore"
            >Moore Machine</label
          >
        </div>
      </div>

      <h4 class="col-6 text-light h-100 my-0" align="center"> Results</h4>

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
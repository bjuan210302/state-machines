<template>
  <div class="row justify-content-center shadow-lg vh-100">
    <MachineButtons></MachineButtons>

    <!--Inputs-->
    <div class="col-6 bg-light h-100">
      <DictionaryInput></DictionaryInput>

      <div v-if="machineType">
        <MooreMachineTable
          ref="machineTable"
          :statesQchild="statesQ"
          :inputsSchild="inputsS"
        ></MooreMachineTable>
      </div>
      <div v-else>
        <MealyMachineTable
          ref="machineTable"
          :statesQchild="statesQ"
          :inputsSchild="inputsS"
        ></MealyMachineTable>
      </div>

      <div class="d-flex flex-row justify-content-end">
        <button class="btn btn-dark m-2" @click="calcOutputs">Calculate</button>
      </div>
    </div>

    <!--Outputs-->
    <div class="col-6 bg-secondary">
      <div class="row">
        <div v-if="renderOutput">
          <div class="alert alert-secondary my-2" role="alert">
            Machine with accessible states only:
          </div>
          <component :is="outputType" v-bind="outPropsRelated"></component>

          <hr />

          <div class="alert alert-secondary" role="alert">
            Minimum Equivalent Machine:
          </div>
          <div class="alert alert-dark col-6" role="alert">
            {{ parseFinalPartition }}
          </div>
          <component :is="outputType" v-bind="outPropsMinimum"></component>

          <div class="d-flex flex-row justify-content-end">
            <button class="btn btn-dark m-2" @click="resetOutput">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import MachineButtons from "./components/MachineButtons.vue";
import DictionaryInput from "./components/DictionaryInput.vue";
import MooreMachineTable from "./components/machines/MooreMachineTable.vue";
import MealyMachineTable from "./components/machines/MealyMachineTable.vue";
import MooreTableOutput from "./components/machines/MooreTableOutput.vue";
import MealyTableOutput from "./components/machines/MealyTableOutput.vue";

export default {
  name: "App",

  components: {
    MachineButtons,
    DictionaryInput,
    MooreMachineTable,
    MealyMachineTable,
    MooreTableOutput,
    MealyTableOutput,
  },

  methods: {
    calcParsedTable() {
      this.$refs.machineTable.parseTable();
    },

    calcOutputs() {
      this.calcParsedTable();
      this.$store.commit("calcRelatedEquivalentMachine");
      this.$store.commit("calcMinimumEquivalentMachine");

      this.$store.commit("setRenderOutput", true);
    },

    resetOutput() {
      this.$store.commit("setRenderOutput", false);
    },
  },
  computed: {
    statesQ: {
      get() {
        return this.$store.state.statesQ;
      },
    },

    inputsS: {
      get() {
        return this.$store.state.inputsS;
      },
    },

    outputsR: {
      get() {
        return this.$store.state.outputsR;
      },
    },

    machineType: {
      get() {
        return this.$store.getters.machineType;
      },
      set(value) {
        this.$store.commit("setMachineType", value);
      },
    },

    parsedTable: {
      get() {
        return this.$store.getters.parsedTable;
      },
    },

    renderOutput: {
      get() {
        return this.$store.getters.renderOutput;
      },
    },

    outputType() {
      return this.machineType ? MooreTableOutput : MealyTableOutput;
    },

    outPropsRelated() {
      return {
        parsedMachine: this.relatedEquivalentMachine,
        inputsSchild: this.inputsS,
      };
    },

    outPropsMinimum() {
      return {
        parsedMachine: this.minimumEquivalentMachine,
        inputsSchild: this.inputsS,
      };
    },

    relatedEquivalentMachine: {
      get() {
        return this.$store.getters.relatedequivalentMachine;
      },
    },

    minimumEquivalentMachine: {
      get() {
        return this.$store.getters.minimumEquivalentMachine;
      },
    },

    parseFinalPartition() {
      var ret = "Final partition: ";
      const pf = Object.values(this.$store.getters.finalPartition);

      pf.forEach(function (state, i) {
        ret += "q" + i + ": (" + state + "), ";
      });
      return ret;
    },
  },
};
</script>

<style>
</style>

<template>
  <TickerTape :options="tickerTapeOptions"/>
  <section>
    <Chart :options="chartOptions" />
  </section>
  <section>
    <TechnicalAnalysis :options="technicalanalysisOptions" />
  </section>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart, TickerTape, TechnicalAnalysis } from 'vue-tradingview-widgets';
import { chartOptions, technicalanalysisOptions, tickerTapeOptions } from '@/tw-config';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    TechnicalAnalysis,
    TickerTape,
    // HelloWorld
  },
  setup() {
    return {
      chartOptions,
      technicalanalysisOptions,
      tickerTapeOptions,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  section {
    &:not(:last-child) {
      margin-bottom: 160px;
    }

    h2 {
      margin-bottom: 40px;
    }
  }
}
</style>

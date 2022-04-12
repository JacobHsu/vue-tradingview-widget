<template>
  <section>
     <Chart
      :options="{
        symbol: 'NYSE:DIS',
        theme: 'dark',
        studies: [
          'BB@tv-basicstudies',
          'CCI@tv-basicstudies', // Commodity Channel Index overbought/oversold
          'MACD@tv-basicstudies',
          'MAExp@tv-basicstudies' // Moving Average Exponential
        ],
        details: true,
      }"
     />
  </section>
  <section>
    <TechnicalAnalysis :options="{interval: '1D', symbol:'NYSE:DIS', isTransparent: true, showIntervalTabs: false}" />
  </section>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart, TechnicalAnalysis } from 'vue-tradingview-widgets';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    TechnicalAnalysis,
    // HelloWorld
  }
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

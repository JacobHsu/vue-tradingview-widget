<template>
  <section>
    <h2>Chart Widget</h2>
    <Chart />
  </section>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart } from 'vue-tradingview-widgets';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    HelloWorld
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

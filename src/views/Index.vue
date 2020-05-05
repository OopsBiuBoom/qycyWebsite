<template>
  <div>
    <head-nav/>
    <main-view/>
    <bottom-view/>
  </div>
</template>

<script>

import nav from "../../src/components/nav/nav.vue"
import bottomView from "../../src/components/footer/footer";
import main from "../../src/components/main/main.vue";

export default {
  components: {
    "head-nav": {
      render: h => h(nav)
    },
    "main-view": {
      render: h => h(main)
    },
    "bottom-view": {
      render: h => h(bottomView)
    }
  }
};
</script>

<style scoped>
  .test {
    background-color: aqua;
    width: 150px;
    height: 150px;
  }
</style>
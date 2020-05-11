<template>
  <div>
    <headNav/>
    <indexMain/>
    <bottomView/>
  </div>
</template>

<script>

import headNav from "../../src/components/nav/nav.vue"
import bottomView from "../../src/components/footer/footer";
import indexMain from "../../src/components/main/main.vue";

export default {
  components: {
    headNav,
    indexMain,
    bottomView
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
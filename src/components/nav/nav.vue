<template>
  <div class="nav-container">
    <div class="nav-content">
      <!-- logo -->
      <img class="logo" src="../../assets/qycy.png" />

      <!-- 目录 -->
      <nav-enum class="nav-enum"></nav-enum>
    </div>
  </div>
</template>

<script>
import navEnum from "../../components/nav/nav-enum.vue";

export default {
  components: {
    "nav-enum": { render: h => h(navEnum) }
  }
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 60px;
  background: #000000;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
}

.nav-content {
  width: 1200px;
  height: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
}

.logo {
  width: 115px;
  height: 40px;
  margin-top: 10px;
}

.nav-enum {
  /* 居中 */
  margin: 0 auto;
}
</style>
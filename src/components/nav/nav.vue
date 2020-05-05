<template>
  <div class="nav-container">
    <div class="nav-content">
      <!-- logo -->
      <div class="logo-box">
        <img src="../../assets/qycy.png" />
      </div>

      <!-- 目录 -->
      <div class="nav-enum">
        <nav-enum></nav-enum>
      </div>
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
}

.nav-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.logo-box {
  height: 100%;
  float: left;
}

.logo-box img {
  width: 115px;
  height: 40px;
  margin-top: 10px;
}

.nav-enum {
  float: right;
}
</style>
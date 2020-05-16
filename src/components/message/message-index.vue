<template>
  <!-- 资讯内容 -->
  <div>
    <!-- 我们的优势 -->
    <ourSuperiority />
    <!-- 分割线 -->
    <div class="line"></div>
  </div>
</template>

<script>
import ourSuperiority from "@/components/main/index/main-ourSuperiority.vue";
export default {
  components: {
    // 我们的优势
    ourSuperiority
  }
};
</script>

<style scoped>
.line {
  height: 1px;
  background-color: #E3E3E3;
}
</style>
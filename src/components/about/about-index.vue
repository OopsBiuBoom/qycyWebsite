<template>
  <!-- 关于首页 -->
  <div>
    <!-- 核心理念 -->
    <aboutCoreText />
    <!-- 标语 -->
    <aboutSlogan />
    <!-- 联系方式 -->
    <aboutIntroduce />
    <!-- 分割线 -->
    <div class="about-slogan-line"></div>
  </div>
</template>

<script>
import aboutCoreText from "@/components/about/about-index-coreText.vue";
import aboutSlogan from "@/components/about/about-index-slogan.vue";
import aboutIntroduce from "@/components/about/about-index-introduce.vue";

export default {
  components: {
    // 核心理念
    aboutCoreText,
    // 标语
    aboutSlogan,
    // 联系方式
    aboutIntroduce
  }
};
</script>

<style scoped>
.about-slogan-line {
  margin-top: 54px;
  background-color: #e3e3e3;
  height: 1px;
}
</style>
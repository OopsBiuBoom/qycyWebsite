<template>
  <!-- 首页子页面 -->
  <div>
    <!-- 统计信息 -->
    <statistics />
    <!-- 解决方案 -->
    <solution />
    <!-- 优秀案例 -->
    <excellentCase />
    <!-- 严谨开发每一个项目 -->
    <devProduct />
    <!-- 我们的优势 -->
    <ourSuperiority />
    <!-- 一起前行 -->
    <bottomPhotos />
    <!-- 资讯中心 -->
    <bottomMessage :title="messageTitle" :msgID="msgID"></bottomMessage>
    <!-- 首页底部介绍栏 -->
    <bottomIntroduce />
  </div>
</template>

<script>
import bottomIntroduce from "@/components/main/index/bottom-introduce.vue";
import bottomMessage from "@/components/main/index/main-message.vue";
import bottomPhotos from "@/components/main/index/main-photos.vue";
import ourSuperiority from "@/components/main/index/main-ourSuperiority.vue";
import devProduct from "@/components/main/index/main-dev-product.vue";
import excellentCase from "@/components/main/index/main-excellent-case.vue";
import solution from "@/components/main/index/main-solution.vue";
import statistics from "@/components/main/index/main-statistics.vue";

export default {
  data() {
    return {
      messageTitle: '资讯中心',
      msgID: "0"
    }
  },
  components: {
    // 统计信息
    statistics,
    // 解决方案
    solution,
    // 优秀案例
    excellentCase,
    // 严谨开发每一个项目
    devProduct,
    // 我们的优势
    ourSuperiority,
    // 底部介绍
    bottomIntroduce,
    // 主页底部资讯
    bottomMessage,
    // 主页相片集合
    bottomPhotos
  }
};
</script>
<template>
  <!-- 产品案例首页 -->
  <div>
    <!-- 产品案例内容页 -->
    <caseContent />
    <!-- 首页底部介绍栏 -->
    <bottomIntroduce />
  </div>
</template>

<script>
import caseContent from "@/components/case/case-index-content.vue";
import bottomIntroduce from "@/components/main/index/bottom-introduce.vue";

export default {
  components: {
    // 产品案例内容页
    caseContent,
    bottomIntroduce
  }
};
</script>
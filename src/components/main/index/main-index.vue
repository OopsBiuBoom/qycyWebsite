<template>
  <div>
    <!-- 资讯中心 -->
    <bottomMessage/>
    <!-- 首页底部介绍栏 -->
    <bottomIntroduce/>
  </div>
</template>

<script>

import bottomIntroduce from "@/components/main/index/bottom-introduce.vue";
import bottomMessage from "@/components/main/index/main-message.vue";

export default {
  components: {
    // 底部介绍
    bottomIntroduce,
    // 主页底部资讯
    bottomMessage
  }
};
</script>
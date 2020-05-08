<template>
  <div>
    <!-- 首页底部介绍栏 -->
    <bottom-introduce/>
  </div>
</template>

<script>

import bottomIntroduce from "@/components/main/index/bottom-introduce.vue";

export default {
  components: {
    "bottom-introduce": {
      render: h => h(bottomIntroduce)
    }
  }
};
</script>
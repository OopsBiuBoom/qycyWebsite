<template>
  <!-- 服务子页面 -->
  <div>
    <!-- 统计信息 -->
    <statistics />
    <!-- 商业价值 -->
    <businessValue />
    <!-- 全面品质服务 -->
    <qualityServe />
    <!-- 优秀案例 -->
    <goodCase />
    <!-- 资讯中心 -->
    <bottomMessage :title="messageTitle" :msgID="msgID"></bottomMessage>
    <!-- 首页底部介绍栏 -->
    <bottomIntroduce />
  </div>
</template>

<script>
import statistics from "@/components/main/index/main-statistics.vue";
import bottomMessage from "@/components/main/index/main-message.vue";
import goodCase from "@/components/server/server-case.vue";
import qualityServe from "@/components/server/server-qualityserve.vue";
import businessValue from "@/components/server/server-business-value.vue";
import bottomIntroduce from "@/components/main/index/bottom-introduce.vue";

export default {
  data() {
    return {
      messageTitle: "相关资讯",
      msgID: "1"
    };
  },
  components: {
    // 统计信息
    statistics,
    // 商业价值
    businessValue,
    // 全方面品质服务
    qualityServe,
    // 优秀案例
    goodCase,
    // 相关资讯
    bottomMessage,
    // 底部介绍
    bottomIntroduce
  }
};
</script>
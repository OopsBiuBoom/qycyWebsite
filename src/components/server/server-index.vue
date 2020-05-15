<template>
  <!-- 服务子页面 -->
  <div>
    <!-- 统计信息 -->
    <statistics />
    <!-- 资讯中心 -->
    <bottomMessage :title="messageTitle" :msgID="msgID"></bottomMessage>
  </div>
</template>

<script>
import statistics from "@/components/main/index/main-statistics.vue";
import bottomMessage from "@/components/main/index/main-message.vue";

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
    // 相关资讯
    bottomMessage
  }
};
</script>
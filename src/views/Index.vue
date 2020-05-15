<template>
  <div>
    <!-- 导航条 -->
    <headNav />
    <!-- 广告 -->
    <ad />
    <!-- 切换页 -->
    <router-view></router-view>
    <!-- 底部 -->
    <bottomView />
  </div>
</template>

<script>
import headNav from "../../src/components/nav/nav.vue";
import bottomView from "../../src/components/footer/footer";
import ad from "@/components/main/index/main-ad.vue";

export default {
  components: {
    // 头部
    headNav,
    // 广告
    ad,
    // 底部
    bottomView
  }
};
</script>
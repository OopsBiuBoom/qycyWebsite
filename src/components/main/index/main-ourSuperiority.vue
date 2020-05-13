<template>
  <div class="main-ourSuperiority-container">
    <!-- 我们的优势 -->
    <h1>我们的优势</h1>
    <div class="main-ourSuperiority-line"></div>
    <div class="main-ourSuperiority-box">
      <ourSuperiorityItem
        class="main-ourSuperiority-item"
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      ></ourSuperiorityItem>
    </div>
  </div>
</template>

<script>
import ourSuperiorityItem from "@/components/main/index/main-ourSuperiority-item.vue";

export default {
  data() {
    return {
      items: [
        {
          img: "../ourSuperiority_zytd.png",
          title: "专业团队",
          content: "经验丰富的开发团队和产品团队",
          content2: "重视产品体验和产品开发质量"
        },
        {
          img: "../ourSuperiority_gxkf.png",
          title: "高效开发",
          content: "以用户需求为基准，高效开发",
          content2: "满足客户的项目进度"
        },
        {
          img: "../ourSuperiority_yzfw.png",
          title: "优质服务",
          content: "全国7x24小时提供服务",
          content2: "提供专业的技术和售后服务支持"
        },
        {
          img: "../ourSuperiority_szry.png",
          title: "始终如一",
          content: "9年专注互联网开发领域",
          content2: "服务稳定高效"
        }
      ]
    };
  },
  components: {
    ourSuperiorityItem
  }
};
</script>

<style scoped>
.main-ourSuperiority-container {
  width: 1200px;
  margin: auto;
}

.main-ourSuperiority-container h1 {
  font-size: 35px;
  margin: 81px 0 31px 0;
  text-align: center;
}

.main-ourSuperiority-line {
  width: 491px;
  border-bottom: 1px #e3e3e3 solid;
  margin: auto;
}

.main-ourSuperiority-box {
  width: 100%;
  margin: auto;
  padding: 32px 0 63px 0;
}

.main-ourSuperiority-box::after {
  content: "";
  display: block;
  clear: both;
}

.main-ourSuperiority-item {
  width: 25%;
  float: left;
}
</style>
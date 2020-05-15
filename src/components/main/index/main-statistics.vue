<template>
  <div class="main-statistics-container">
    <!-- 统计信息 -->
    <h1 class="main-statistics-title">专业的人·做事专业·为您提供专业服务</h1>
    <div class="main-statistics-line"></div>
    <div class="main-statistics-box">
      <div class="main-statistics-box-item" v-for="(item, index) in items" :key="index">
        <h1>{{ item.content }}</h1>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          // 经验
          content: "9",
          title: "行业开发经验"
        },
        {
          // 客户
          content: "2500+",
          title: "客户选择"
        },
        {
          // 满意度
          content: "99",
          title: "满意度"
        },
        {
          // 开发团队
          content: "30+",
          title: "技术开发团队"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-statistics-container {
  width: 1200px;
  margin: auto;
}

.main-statistics-title {
  color: black;
  text-align: center;
  font-size: 30px;
  margin: 0;
  padding: 39px 0 22px 0;
}

.main-statistics-line {
  background-color: #e3e3e3;
  width: 520px;
  height: 1px;
  margin: auto;
}

.main-statistics-box {
  margin: auto;
}

.main-statistics-box::after {
  content: "";
  display: block;
  clear: both;
}

.main-statistics-box-item {
  float: left;
  width: 25%;
}

.main-statistics-box-item h1 {
  text-align: center;
  margin: 0;
  color: #f93e58;
  font-size: 35px;
  padding-top: 35px;
}

.main-statistics-box-item p {
  text-align: center;
  margin: 0;
  font-size: 15px;
  padding-bottom: 42px;
}
</style>
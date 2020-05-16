<template>
  <!-- 核心理念 -->
  <div class="about-index-container common-container">
    <!-- 标题 -->
    <h1 class="about-index-title common-title">核心理念</h1>
    <!-- 分割线 -->
    <div class="about-index-line"></div>
    <!-- 核心理念box -->
    <div class="about-index-core-box">
      <div class="about-index-core-item" v-for="(item, index) in items" :key="index">
        <div class="about-index-core-item-logo"></div>
        <h3 class="about-index-core-item-title">{{ item.title }}</h3>
        <p class="about-index-core-item-detail" v-html="item.content"></p>
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
          img: "",
          title: "客户为上",
          content: "坚持以客户成功<br/>为企业价值观"
        },
        {
          img: "",
          title: "高效保质",
          content: "高效认真对待每一个客户需求<br/>保质保量完成每一个产品上线"
        },
        {
          img: "",
          title: "诚信经营",
          content: "忠实履行对公司<br/>对客户的责任和承诺"
        },
        {
          img: "",
          title: "产品体验",
          content: "以产品体验为核心<br/>坚持以产品思维定义工作"
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-index-container {
  margin: 0 auto;
}

.about-index-title {
  text-align: center;
  margin: 49px 0 22px 0;
}

.about-index-line {
  background-color: #e3e3e3;
  height: 1px;
  width: 491px;
  margin: 0 auto;
}

.about-index-core-item {
  width: 25%;
  float: left;
  margin: 44px 0 72px 0;
}

.about-index-core-item-logo {
  width: 100px;
  height: 100px;
  background-color: #b0bbcd;
  margin: 0 auto;
}

.about-index-core-item-title {
  font-size: 13px;
  color: #007df1;
  text-align: center;
}

.about-index-core-item-detail {
  text-align: center;
  line-height: 19px;
  font-size: 10px;
}

.about-index-core-box::after {
  content: "";
  display: block;
  clear: both;
}
</style>
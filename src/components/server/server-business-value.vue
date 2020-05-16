<template>
  <!-- 商业价值 -->
  <div class="server-business-value-container">
    <div class="server-business-value-box common-container">
      <!-- 标题 -->
      <h1 class="server-business-value-title common-title">为企业提供一站式开发服务·铸就企业高品质商业价值</h1>
      <!-- 分割线 -->
      <div class="server-business-value-line"></div>
      <!-- 内容容器 -->
      <div class="server-business-value-itemBox">
        <!-- 内容 -->
        <div class="server-business-value-item" v-for="(item, index) in items" :key="index">
          <!-- logo -->
          <div class="server-business-value-item-img">
            <img :src="item.logo" />
          </div>
          <!-- 标题 -->
          <h2 class="server-business-value-item-title">{{ item.title }}</h2>

          <!-- 分割线 -->
          <div class="server-business-value-item-line"></div>

          <!-- 详情 -->
          <p class="server-business-value-item-content" v-html="item.content"></p>

          <!-- 按钮 -->
          <el-button class="server-business-value-item-button" type="primary">立即咨询</el-button>
        </div>
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
          logo:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg",
          title: "APP开发",
          content:
            "安卓应用开发<br/>苹果应用开发<br/>商城应用开发<br/>分销系统开发等一站式服务"
        },
        {
          logo:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=466636099,2440212896&fm=111&gp=0.jpg",
          title: "微信小程序开发",
          content:
            "公众号定制开发<br/>小程序定制开发<br/>H5营销活动开发<br/>助力企业获取微信红利"
        },
        {
          logo:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2693871080,3799175956&fm=26&gp=0.jpg",
          title: "网站建设",
          content:
            "企业官网<br/>营销型网站<br/>响应式网站<br/>展示型网站<br/>帮助企业在网络中获取更全面的品牌展示优势"
        }
      ]
    };
  }
};
</script>

<style scoped>
.server-business-value-box {
  margin: 0 auto;
}

.server-business-value-title {
  text-align: center;
  margin: 0 0 24px 0;
  padding-top: 30px;
}

.server-business-value-line {
  background-color: #e3e3e3;
  height: 1px;
  width: 825px;
  margin: 0 auto;
}

.server-business-value-item {
  float: left;
  width: 31%;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-left: 20px;
}

.server-business-value-item:hover {
    background-color: #007df1;
}

.server-business-value-item:hover .server-business-value-item-title {
    color: white;
}

.server-business-value-item:hover .server-business-value-item-line {
    background-color: white;
}

.server-business-value-item:hover .server-business-value-item-content {
    color: white;
}

.server-business-value-item:hover .server-business-value-item-button {
    border: 1px solid white; 
}

.server-business-value-itemBox {
  margin-top: 31px;
}

.server-business-value-itemBox::after {
  content: "";
  display: block;
  clear: both;
}

.server-business-value-item-img {
  padding: 19px 0 10px 0;
  text-align: center;
}

.server-business-value-item-img img {
  width: 70px;
  height: 70px;
  border-radius: 35px;
}

.server-business-value-item-title {
  text-align: center;
  color: black;
  font-size: 20px;
  margin: 0 0 13px 0;
}

.server-business-value-item-content {
  text-align: center;
  color: black;
  font-size: 10px;
  margin: 0;
  line-height: 20px;
}

.server-business-value-item-line {
  height: 3px;
  width: 45px;
  margin: 0 auto;
  background-color: #007df1;
  margin-bottom: 16px;
}

.server-business-value-item-button {
  font-size: 10px;
  margin: 0 auto;
  margin-top: 41px;
  margin-bottom: 31px;
  display: block;
}

.server-business-value-item:nth-child(3) .server-business-value-item-button {
  margin-top: 21px;
}
</style>
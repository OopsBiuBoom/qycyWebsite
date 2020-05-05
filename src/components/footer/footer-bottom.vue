<template>
  <div class="footerbottom-container">
    <div class="footerbottom-interlinkingbox">
      <!-- 友情链接 -->
      <p class="interlinking-title">友情链接:</p>
      <ul>
        <li>
          <a
            v-for="(item, index) in linkItems"
            :key="index"
            :href="item.url"
            target="_blank"
          >{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <!-- logo -->
    <div class="logo-box">
      <img src="../../assets/qycy_black.png" />
    </div>

    <!-- 版权 -->
    <p class="copyright">{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: `Copyright ©  深圳麒越创意开发科技有限公司& 互联网+项目定制开发平台  备案号：粤ICP备19254262-1
地址：深圳市龙华区民治街道办西头新村   联系人：易经理  18948359571`,
      linkItems: [
        { name: "百度", url: "https://www.baidu.com" },
        { name: "新浪", url: "https://www.sina.com" },
        { name: "小米", url: "https://www.mi.com" },
        { name: "淘宝", url: "https://www.taobao.com" },
        { name: "京东", url: "https://www.jd.com" }
      ]
    };
  }
};
</script>

<style scoped>
.footerbottom-container {
  width: 100%;
  background-color: white;
  border-top: 1px solid #e3e3e3;
}

.footerbottom-interlinkingbox {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
}

.copyright {
  font-family: PingFang SC;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
  padding-bottom: 35px;
}

img {
  width: 191px;
  height: 66px;
  margin: 0 auto;
  padding-bottom: 20px;
}

.logo-box {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.interlinking-title {
  margin-top: 50px;
  font-weight: bold;
}

ul {
  list-style-type: none;
}

ul li {
  float: left;
  margin: 0 20px;
  margin-top: 40px;
}

ul li a {
  margin: 0 19px;
  padding: 4px 22px;
  text-decoration: none;
  color: #000000;
  background-color: #f6f6f6;
}
</style>
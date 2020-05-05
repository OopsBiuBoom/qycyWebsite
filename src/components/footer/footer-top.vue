<template>
  <div class="footertop-container">
    <div class="footertop-content">
      <div class="footertop-ability-box">
        <!-- 麒越创意的服务 -->
        <div class="footertop-ability-children" v-for="(item, index) in items" :key="index">
          <h2>{{ item.title }}</h2>
          <a
            v-for="(el, index) in item.datas"
            :key="index"
            :href="el.url"
            target="_block"
          >{{ el.title }}</a>
        </div>
      </div>

      <!-- 二维码 -->
      <div class="footertop-qrcode-box">
        <h2>微信公众号</h2>
        <div class="footertop-qrcode"></div>
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
          title: "麒越创意",
          datas: [
            { title: "产品案例", url: "http://www.baidu.com" },
            { title: "资讯", url: "http://www.baidu.com" },
            { title: "关于我们", url: "http://www.baidu.com" },
            { title: "站酷团队", url: "http://www.baidu.com" }
          ]
        },
        {
          title: "开发服务",
          datas: [
            { title: "微信小程序解决方案", url: "http://www.baidu.com" },
            { title: "网站建设解决方案", url: "http://www.baidu.com" },
            { title: "APP开发解决方案", url: "http://www.baidu.com" },
            { title: "微信公众号个性化定制", url: "http://www.baidu.com" }
          ]
        },
        {
          title: "品牌策划",
          datas: [
            { title: "商标设计", url: "http://www.baidu.com" },
            { title: "企业画册设计", url: "http://www.baidu.com" },
            { title: "产品包装设计", url: "http://www.baidu.com" },
            { title: "宣传海报设计", url: "http://www.baidu.com" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.footertop-container {
  height: 250px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.footertop-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.footertop-ability-box {
  width: 50%;
  height: 100%;
  margin-top: 45px;
  float: left;
}

.footertop-ability-children {
  width: 33.33%;
  float: left;
}

.footertop-ability-children a {
  text-decoration: none;
  display: block;
  line-height: 32px;
  color: #000000;
}

.footertop-qrcode-box {
  width: 50%;
  margin-top: 44px;
  float: right;
}

.footertop-qrcode {
  height: 120px;
  width: 120px;
  float: right;
  background-color: aquamarine;
}

.footertop-qrcode-box h2 {
  text-align: right;
  margin-right: 25px;
}
</style>
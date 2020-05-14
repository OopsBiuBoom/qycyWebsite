<template>
  <div class="main-solution-container" v-if="this.items.length > 0">
    <!-- 解决方案展示 -->
    <div class="main-solution-container-box">
      <h1 class="main-solution-box-title">为企业提供一站式技术服务·为您提供多行业解决方案</h1>
      <div class="main-solution-line"></div>
      <p class="main-solution-box-content">行业经验丰富的技术伙伴为您服务，是您安心的选择</p>
      <div class="main-solution-contentbox">
        <el-menu
          class="main-solution-nav"
          mode="horizontal"
          :default-active="selectIndex"
          @select="meunDidTap"
        >
          <el-menu-item
            class="main-solution-nav-item"
            v-for="(title, index) in titles"
            :key="index"
            :index="index+''"
          >{{ title }}</el-menu-item>
        </el-menu>
        <div class="main-solution-detail">
          <div class="main-solution-detail-left">
            <div class="main-solution-detail-left-content">
              <h1 class="main-solution-detail-left-title">{{ selectItem.title }}</h1>
              <p class="main-solution-detail-left-detail">{{ selectItem.content }}</p>
            </div>
            <div class="main-solution-detail-left-buttons">
              <el-button type="primary" class="main-solution-detail-left-contact">立即咨询</el-button>
              <el-button class="main-solution-detail-left-more">查看更多</el-button>
            </div>
          </div>
          <div class="main-solution-detail-right">
            <ul>
              <li v-for="(item,index) in selectItem.tags" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main-solution-container-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: "",
      selectItem: {},
      items: [
        {
          title: "小程序开发",
          content:
            "小程序已经成为企业移动互联网战略上不可忽视的组成部分。作为微信小程序早期解决方案供应商之一，已为20+行业、100+家企业提供了小程序以及微信生态的产品设计和开发服务。为您提供最合适的小程序产品开发方案。",
          tags: ["流量红利", "微信生态", "无需安装", "设备兼容", "产业赋能"]
        },
        {
          title: "APP开发",
          content:
            "接口的激发刻录机安静地发卡家看风景的科技大厦看放假啊抵抗力家里肯德基离开家阿萨德考虑放假案例卡三等奖立刻发坚实的弗兰克金坷垃但是房间拉三等奖分开了",
          tags: ["流量红利", "微信生态"]
        },
        {
          title: "网站建设",
          content:
            "接口的激发刻录机安静地发卡家看风景的科技大厦看放假啊抵抗力家里肯德基离开家阿萨德考虑放假案例卡三等奖立刻发坚实的弗兰克金坷垃但是房间拉三等奖分开了",
          tags: ["无需安装", "设备兼容", "产业赋能"]
        },
        {
          title: "电商商城",
          content:
            "接口的激发刻录机安静地发卡家看风景的科技大厦看放假啊抵抗力家里肯德基离开家阿萨德考虑放假案例卡三等奖立刻发坚实的弗兰克金坷垃但是房间拉三等奖分开了",
          tags: []
        }
      ],
      titles: []
    };
  },
  methods: {
    meunDidTap(key, keyPath) {
      // 根据选择修改index
      if (key.length > 0) {
        this.selectIndex = key[0];
      }
    }
  },
  mounted() {
    if (this.items.length > 0) {
      // 处理title
      var tmp = [];
      this.titles = [];
      this.items.forEach(element => {
        tmp.push(element.title);
      });
      this.titles = tmp;

      // 默认选中第一个
      this.selectIndex = "0";
    }
  },
  watch: {
    selectIndex(newValue, oldValue) {
      // 修改选中的内容
      this.selectItem = this.items[newValue - 0];
    }
  }
};
</script>

<style scoped>
.main-solution-container {
  width: 100%;
  background-color: #007df1;
}

.main-solution-container-box {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: white;
  padding-top: 48px;
  margin-bottom: 46px;
}

.main-solution-container-line {
  height: 1px;
}

.main-solution-box-title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}

.main-solution-box-content {
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 0;
  margin-top: 13px;
}

.main-solution-line {
  width: 705px;
  height: 1px;
  background-color: white;
  margin: 0 auto;
}

.main-solution-contentbox {
  border-radius: 3px;
  background-color: white;
  margin-top: 34px;
}

.main-solution-nav {
  padding: 0 20px;
}

.main-solution-nav-item {
  padding: 0 30px;
}

.main-solution-detail {
  height: 350px;
}

.main-solution-detail::after {
  content: "";
  display: block;
  clear: both;
}

.main-solution-detail-left {
  width: 40%;
  height: 100%;
  float: left;
}

.main-solution-detail-left-content {
  height: 70%;
}

.main-solution-detail-left-title {
  margin: 0 29px 24px 29px;
  font-size: 25px;
  padding-top: 34px;
  color: black;
}

.main-solution-detail-left-detail {
  font-size: 15px;
  margin: 0 29px 0 29px;
  line-height: 30px;
  color: black;
}

.main-solution-detail-left-buttons {
  height: 30%;
  margin-top: 25px;
}

.main-solution-detail-left-contact {
  margin-left: 29px;
}

.main-solution-detail-left-more {
  margin-left: 13px;
}

.main-solution-detail-right {
  width: 60%;
  height: 100%;
  float: left;
  margin: 45px 0px;
}

.main-solution-detail-right ul {
    list-style-type: none;
}

.main-solution-detail-right ul::after {
    content: "";
    display: block;
    clear: both;
}

.main-solution-detail-right ul li {
    color: black;
    background-color: #F6F6F6;
    float: left;
    margin: 16px;
    padding: 18px 35px;
}

</style>
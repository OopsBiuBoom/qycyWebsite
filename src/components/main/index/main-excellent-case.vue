<template>
  <div class="main-excellent-case-container" v-show="items.length > 0">
    <!-- 优秀案例 -->
    <h1>优秀案例</h1>
    <!-- 分割线 -->
    <div class="excellent-case-line"></div>
    <!-- 优秀案例 -->
    <div class="excellent-case-box">
      <!-- 导航 -->
      <div class="excellent-case-box-head">
        <ul>
          <li
            :class="index == selectIdx ? 'excellent-case-box-head-active' : ''"
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="changeTag"
          >{{ item.title }}</li>
        </ul>
      </div>
      <!-- 内容 -->
      <div class="excellent-case-box-detail">
        <div class="excellent-case-box-detail-left">
          <div class="excellent-case-box-detail-left-top">
            <h2 class="excellent-case-box-detail-left-title">{{ selectItem.title }}</h2>
            <p class="excellent-case-box-detail-left-content">{{ selectItem.content }}</p>
          </div>
          <div class="excellent-case-box-detail-left-bottom">
            <img
              src="../../../assets/excellent_case_arrow.png"
              class="excellent-case-box-detail-left-button"
              @click="arrowClick"
            />
          </div>
        </div>
        <div class="excellent-case-box-detail-right">
          <img :src="selectItem.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 保存选中的index
      selectIdx: -1,
      // 当前选中的数据
      selectItem: {},
      // 数据源
      items: [
        {
          title: "易捷一卡通",
          content:
            "大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋",
          img:
            "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3062374190,3164523231&fm=111&gp=0.jpg"
        },
        {
          title: "货运道物流",
          content:
            "大家啊快递费dakfjkl大健康大进口量了富家大室考虑放假恐龙当家卡垃圾袋大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2830808572,4159554637&fm=26&gp=0.jpg"
        },
        {
          title: "中国铁建",
          content:
            "大家啊快递费dakfjkl大健康大进口量了富家大室考虑放假恐龙当家卡垃圾袋大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减胜多负少的罚阿道夫奥迪肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=152554929,4202512113&fm=26&gp=0.jpg"
        },
        {
          title: "巴州融兴",
          content:
            "大家啊快递费dakfjkl大健康大进口量了富家大室考虑放假恐龙当家卡垃圾袋大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减胜多负少的罚阿道夫奥迪肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=918731660,2879077476&fm=15&gp=0.jpg"
        },
         {
          title: "理财通项目",
          content:
            "大家啊快递费dakfjkl大健康大进口量了富家大室考虑放假恐龙当家卡垃圾袋大家啊快递费就可敬的反馈垃圾啊到付款了京东数科减胜多负少的罚阿道夫奥迪肥看电视剧快递费即可经典款了富家大室考虑放假恐龙当家卡垃圾袋",
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2406608946,3158722286&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    // 标签被点击
    changeTag(event) {
      this.selectIndex = event.target.value;
    },
    // 箭头变点击
    arrowClick() {
      alert(this.selectItem.title);
    }
  },
  computed: {
    selectIndex: {
      get() {
        return this.selectIdx;
      },
      // 处理选中后的逻辑
      set(newValue, oldValue) {
        var idx = newValue;
        this.selectIdx = idx;
        this.selectItem = this.items[idx];
      }
    }
  },
  // 挂载成功
  mounted() {
    console.log(this.items.length)
    if(this.items.length > 0) {
      this.selectIndex = 0
    }
  }
};
</script>

<style scoped>
.main-excellent-case-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 20px;
}

.main-excellent-case-container h1 {
  font-size: 35px;
  text-align: center;
}

.excellent-case-line {
  background-color: #e3e3e3;
  width: 501px;
  height: 1px;
  margin: 0 auto;
}

.excellent-case-box-head {
  text-align: center;
}

.excellent-case-box-head ul {
  list-style-type: none;
  display: inline-block;
}

.excellent-case-box-head ul::after {
  content: "";
  display: block;
  clear: both;
}

.excellent-case-box-head li {
  float: left;
  margin: 5px 10px;
  padding: 8px 12px;
  border: 1px #E3E3E3 solid;
  border-radius: 3px;
}

.excellent-case-box-head li a {
  text-decoration: none;
  color: black;
}

.excellent-case-box-head li:hover {
  background-color: #007df1;
  cursor: pointer;
  color: white;
}

.excellent-case-box-head-active {
  background-color: #007df1;
  cursor: pointer;
  color: white;
}

.excellent-case-box-head::after {
  content: "";
  display: block;
  clear: both;
}

.excellent-case-box-detail {
  margin-top: 28px;
  margin-bottom: 69px;
}

.excellent-case-box-detail-left {
  width: 30%;
  height: 293px;
  background-color: #f6f6f6;
  float: left;
}

.excellent-case-box-detail-left-top {
  height: 70%;
}

.excellent-case-box-detail-left-bottom {
  height: 30%;
}

.excellent-case-box-detail-left-button {
  cursor: pointer;
  width: 75px;
  height: 25px;
  margin-left: 23px;
}

.excellent-case-box-detail-left-title {
  font-size: 20px;
  text-align: left;
  margin: 34px 23px 0px 23px;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
}

.excellent-case-box-detail-left-content {
  font-size: 10px;
  text-align: left;
  margin: 14px 23px 0px 23px;
  line-height: 20px;
}

.excellent-case-box-detail-right {
  width: 69%;
  float: left;
  margin-left: 10px;
  height: 293px;
}

.excellent-case-box-detail-right img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.excellent-case-box-detail::after {
  content: "";
  display: block;
  clear: both;
}
</style>
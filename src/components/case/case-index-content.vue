<template>
  <!-- 产品案例内容页 -->
  <div class="case-index-content-container common-container">
    <!-- 标题 -->
    <h1 class="case-index-content-title common-title">优秀案例</h1>
    <!-- 分割线 -->
    <div class="case-index-content-line"></div>
    <!-- 副标题 -->
    <p class="case-index-content-subtitle">我们已经为物流、教育、医疗、电商零售等30多个行业提供了移动互联网解决方案</p>
    <!-- 选择栏 -->
    <div class="case-index-content-selected">
      <titleNav :items="titles" :selectedIndex="selectIndex" @didSelect="didSelect"></titleNav>
    </div>
    <!-- 内容盒子 -->
    <div class="case-index-content-detail-box" >
      <div
        class="case-index-content-detail-box-item"
        v-for="(item, index) in selectItem"
        :key="index"
        @click="itemClick(index)"
      >
        <!-- 图片容器 -->
        <div class="case-index-content-detail-img">
          <img :src="item.img" />
        </div>
        <!-- 标题 -->
        <h2 class="case-index-content-detail-title">{{ item.title }}</h2>
        <!-- 内容 -->
        <p class="case-index-content-detail-content">{{ item.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import titleNav from "@/components/case/title-nav.vue";

export default {
  data() {
    return {
      selectIndex: -1,
      titles: [],
      // 这里是处理后的所有数据
      showItems: [],
      // 当前显示数据
      selectItem: [],
      // 网络获取的数据放这里
      items: [
        {
          title: "小程序",
          datas: [
            {
              img:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2945908607,1627227886&fm=26&gp=0.jpg",
              title: "小程序1",
              detail:
                "案例卡机放得开了阿艰苦奋斗记录卡大家拉到就佳都科技分开了大事件考虑"
            },
            {
              img:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1094243505,1375315232&fm=26&gp=0.jpg",
              title: "小程序2",
              detail:
                "案例卡机放得开斗asfafsad记录卡大家拉到就佳都科技分开了大事件考虑"
            }
          ]
        },
        {
          title: "APP",
          datas: [
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1640343169,3658709459&fm=26&gp=0.jpg",
              title: "APP1",
              detail:
                "案例卡机放得开了阿艰苦奋斗记录卡大家拉到就佳都科技分开了大事件考虑"
            },
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2763833368,3807917864&fm=26&gp=0.jpg",
              title: "APP2",
              detail: "案例卡机放得开斗asfafsad开了大事件考虑"
            },
            {
              img:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1526146253,82497632&fm=26&gp=0.jpg",
              title: "APP3",
              detail: "案例卡机放得开斗asfafsad开了大事件考虑"
            }
          ]
        },
        {
          title: "网站建设",
          datas: [
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3889064414,2009917438&fm=26&gp=0.jpg",
              title: "网站建设1",
              detail:
                "案例卡机放得开了阿艰苦奋斗记录卡大家拉到就佳都科技分开了大事件考虑"
            }
          ]
        },
        {
          title: "品牌策划",
          datas: [
            {
              img:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1526146253,82497632&fm=26&gp=0.jpg",
              title: "品牌策划1",
              detail:
                "案例卡机放得开了阿艰苦奋斗记录卡大家拉到就佳都科技分开了大事件考虑"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 选项被点击
    didSelect(index) {
      this.selectIndex = index;
    },
    // 选项被点击
    itemClick(index) {
        alert(this.selectItem[index].title)
    }
  },
  watch: {
    selectIndex(newValue, oldValue) {
      // 获取选择的数据
      var datas = this.showItems[newValue].datas;
      this.selectItem = datas.length > 0 ? datas : [];
    }
  },
  mounted() {
    if (this.items.length > 0) {
      //   显示用的标题
      var totalString = "全部";
      var titles = [totalString];
      // `全部`的数据
      var total = {
        title: toString,
        datas: []
      };
      // 实际显示用的数据[ { title: '标题', datas: [ { title: "", img: "", detail: ""} ] }]
      var showItems = [];
      this.items.forEach(element => {
        var item = {
          title: element.title,
          datas: []
        };

        // 获取标题，并插入
        titles.push(element.title);

        // 获取内部数据并插入
        element.datas.forEach(e => {
          // 添加到`全部`数据
          total.datas.push(e);
          // 添加到要暂时的数据
          item.datas.push(e);
        });

        showItems.push(item);
      });
      this.titles = titles;
      this.showItems = showItems;
      // 添加`全部`的数据到展示数组
      this.showItems.unshift(total);

      // 如果有内容，默认选择第一项
      this.selectIndex = 0;
    }
  },
  components: {
    titleNav
  }
};
</script>

<style scoped>
.case-index-content-container {
  margin: 0 auto;
}

.case-index-content-title {
  text-align: center;
  margin: 0;
  padding: 49px 0 22px 0;
}

.case-index-content-line {
  height: 1px;
  width: 491px;
  background-color: #e3e3e3;
  margin: 0 auto;
}
.case-index-content-subtitle {
  text-align: center;
  font-size: 18px;
  margin: 21px 0 27px 0;
}

.case-index-content-selected {
  text-align: center;
}

.case-index-content-detail-box {
    margin-top: 41px;
    padding-bottom: 49px; 
}

.case-index-content-detail-box-item {
  float: left;
  width: 31%;
  height: 350px;
  margin: 0 20px 18px 0;
  border-radius: 15px;
  cursor: pointer;
}

.case-index-content-detail-box::after {
  content: "";
  display: block;
  clear: both;
}

.case-index-content-detail-box-item img {
  width: 100%;
  height: 250px;
  border-radius: 6px;
}

.case-index-content-detail-title {
  font-size: 18px;
}

.case-index-content-detail-content {
  font-size: 10px;
}

.case-index-content-detail-box-item:nth-child(3n) {
  margin-right: 0 !important;
}
</style>
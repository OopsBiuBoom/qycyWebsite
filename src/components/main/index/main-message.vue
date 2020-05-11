<template>
  <div class="main-message-container">
    <!-- 资讯中心 -->
    <h1>{{ title }}</h1>
    <!-- 分割线 -->
    <div class="main-message-line"></div>
    <div class="main-message-box">
      <mainMessageItem v-for="(item, index) in items" :item="item" :key="index" ></mainMessageItem>
      <div style="clear: both"></div>
    </div>
    <!-- <div style="clear: both"></div> -->
  </div>
</template>

<script>
import mainMessageItem from "@/components/main/index/main-message-item.vue";

export default {
  data() {
    return {
      title: "资讯中心",
      items: [
        {
          title: "这是我的文章标题1",
          content:
            "这是我文章的预览细节，最多只展示三行，这是我文章的这是我文章的预览细节，最多只展示三行预览细节，最多只展示三行...",
          tag: "小程序开发",
          imageurl:
            "http://pic2.zhimg.com/50/v2-67f162fdc821545edf25ba0dce14bb0d_hd.jpg"
        },
        {
          title: "这是我的文章标题2",
          content:
            "CALayer属性：CALayer层的主要工作是管理您提供的视觉内容，图层本身具有可设置的可视属性，例如背景颜...",
          tag: "小程序开发",
          imageurl:
            "http://img0.imgtn.bdimg.com/it/u=1361981880,3052617388&fm=11&gp=0.jpg"
        },
        {
          title: "这是我的文章标题3",
          content:
            "返回给我三行加上点点点就好了ad范德萨爱思暗红色的加速度计卡老师解读卡垃圾袋刻录机卡手榴弹监考老师就困了就睡困了就睡立刻...",
          tag: "小程序开发",
          imageurl:
            "http://img1.imgtn.bdimg.com/it/u=3170379310,1742401393&fm=11&gp=0.jpg"
        },
        {
          title: "这是我的文章标题4",
          content:
            "这是我文章的预览细节，最多只展示三行，这是我文章的这是我文章的预览细节，最多只展示安居客放假啊咖啡机卡家看电视剧开发局...",
          tag: "小程序开发",
          imageurl:
            "http://img2.imgtn.bdimg.com/it/u=3744215463,383557679&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  components: {
    mainMessageItem
  }
};
</script>

<style scoped>
.main-message-container {
  width: 1200px;
  padding-top: 58px;
  margin: auto;
}

.main-message-container h1 {
  font-size: 35px;
  text-align: center;
}

.main-message-line {
  height: 1px;
  width: 491px;
  margin: auto;
  background-color: #e3e3e3;
}

.main-message-box {
  margin-bottom: 41px;
}
</style>
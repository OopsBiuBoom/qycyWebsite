<template>
  <div class="main-swiper-container">
    <el-carousel height="515px">
      <el-carousel-item
        class="main-ad-container"
        :style="item.bgcolor"
        v-for="(item, index) in items"
        :key="index"
      >
        <el-image class="main-ad-item" :src="item.img"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img:
            "http://attach.bbs.miui.com/forum/201409/08/211752bxwfet50zl9sfw99.jpg",
          link: "",
          bgcolor: "background-color:red;"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1233689502,4155997424&fm=26&gp=0.jpg",
          link: "",
          bgcolor: "background-color:#672636;"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2905079431,1762939885&fm=26&gp=0.jpg",
          link: "",
          bgcolor: "background-color:#123000;"
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=344953548,3267289682&fm=26&gp=0.jpg",
          link: "",
          bgcolor: "background-color:#FFF123;"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-swiper-container {
  background-color: darkgrey;
}

.main-ad-container {
  text-align: center;
}

.main-ad-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
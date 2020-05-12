<template>
  <div class="main-photos-container">
    <h1 class="main-photos-title">麒越创意与他们一起前行</h1>
    <div class="main-photos-box">
      <div class="main-photos-imgbox" v-for="item in items" :key="item.id">
        <img :src="item.img" />
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
          id: 1,
          img:
            "http://img0.imgtn.bdimg.com/it/u=3256100974,305075936&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          img:
            "http://img3.imgtn.bdimg.com/it/u=111601881,3529434258&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          img:
            "http://img0.imgtn.bdimg.com/it/u=3521319392,1160740190&fm=26&gp=0.jpg"
        },
        {
          id: 4,
          img:
            "http://img2.imgtn.bdimg.com/it/u=1811291600,2390482842&fm=26&gp=0.jpg"
        },
        {
          id: 5,
          img:
            "http://img0.imgtn.bdimg.com/it/u=2841648446,236398816&fm=26&gp=0.jpg"
        },
        {
          id: 6,
          img:
            "http://img1.imgtn.bdimg.com/it/u=3986366078,1066070541&fm=11&gp=0.jpg"
        },
        {
          id: 7,
          img:
            "http://img3.imgtn.bdimg.com/it/u=1368451564,780267377&fm=11&gp=0.jpg"
        },
        {
          id: 8,
          img:
            "http://img2.imgtn.bdimg.com/it/u=489010633,4171019105&fm=11&gp=0.jpg"
        },
        {
          id: 9,
          img:
            "http://img3.imgtn.bdimg.com/it/u=3062649025,2826066354&fm=26&gp=0.jpg"
        },
        {
          id: 10,
          img:
            "http://img5.imgtn.bdimg.com/it/u=1675952576,3103805455&fm=26&gp=0.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-photos-container {
  width: 100%;
  background-color: #f6f6f6;
  padding: 38px 0 54px 0;
}

.main-photos-box {
  width: 1200px;
  margin: 0px auto;
}

.main-photos-title {
  font-size: 35px;
  text-align: center;
}

.main-photos-imgbox {
  float: left;
  width: 220px;
  height: 180px;
  margin: 10px 10px 10px 10px;
}

.main-photos-imgbox img {
  height: 100%;
  width: 100%;
}

.main-photos-box::after {
  content: "";
  display: block;
  clear: both;
}

/* ie8好像不支持css3的:nth-child选择器，可以使用jq来实现 */
.main-photos-imgbox:nth-child(1) {
  margin-left: 0 !important;
}

.main-photos-imgbox:nth-child(5n + 1) {
  margin-left: 0 !important;
}

.main-photos-imgbox:nth-child(5n) {
  margin-right: 0 !important;
}
</style>
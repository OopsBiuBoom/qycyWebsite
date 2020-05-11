<template>
  <div class="bottom-introduce-container">
    <p class="bottom-introduce-top">如果您对我们感兴趣，请联系我们，我们会有人员为您提供的专业服务</p>

    <p class="bottom-introduce-mid">【多一份参考对您总有益处】</p>

    <p class="bottom-introduce-contact">咨询或者预约面谈，可以拨打：{{ phone }}</p>

    <div class="bottom-introduce-contactButton-box">
        <el-button plain class="bottom-introduce-contactButton">咨询在线客服</el-button>
        <img src="../../../assets/bottom_introduce_bg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            "phone": "18948359571"
        }
    },
}
</script>

<style scoped>
.bottom-introduce-container {
  width: 100%;
  padding: 0;
  background-color: #007df1;
}

.bottom-introduce-top {
  margin: 0;
  padding-top: 44px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
}

.bottom-introduce-mid {
  margin: 31px 0 0 0;
  padding: 0;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
}

.bottom-introduce-contact {
  margin-top: 12px;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
}

.bottom-introduce-contactButton-box {
    position: relative;
}

.bottom-introduce-contactButton-box img {
    width: 100%;
    height: 77px;
    vertical-align: bottom;
}

.bottom-introduce-contactButton {
    background-color: #ffffff;
    color: #007DF1;
    font-size: 10px;
    position: absolute;
    top: 20px;
    left: 48%;
    padding: 9px 8px;
}
</style>
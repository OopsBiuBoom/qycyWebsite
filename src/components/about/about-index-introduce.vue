<template>
  <!-- 底部联系信息 -->
  <div class="about-slogan-introduce-container common-container">
    <p class="about-slogan-introduce-top">如果您对我们感兴趣，请联系我们，我们会有人员为您提供的专业服务</p>

    <p class="about-slogan-introduce-mid">【多一份参考对您总有益处】</p>

    <p class="about-slogan-introduce-contact">
      咨询或者预约面谈，可以拨打：
      <span>{{ phone }}</span>
    </p>

    <el-button plain class="about-slogan-introduce-contactButton">咨询在线客服</el-button>
  </div>
</template>

<script>
import commonVar from "@/common/common.js"
export default {
    data() {
        return {
            phone: commonVar.phone
        }
    },
}
</script>

<style scoped>
.about-slogan-introduce-container {
  margin: 0 auto;
  text-align: center;
}

.about-slogan-introduce-top {
  margin: 0;
  padding-top: 44px;
  color: black;
  font-size: 25px;
  text-align: center;
}

.about-slogan-introduce-mid {
  margin: 31px 0 0 0;
  padding: 0;
  font-size: 30px;
  color: #ff5617;
  text-align: center;
}

.about-slogan-introduce-contact {
  margin-top: 12px;
  font-size: 15px;
  text-align: center;
  color: black;
}

.about-slogan-introduce-contact span {
  color: #ff5617;
}

.about-slogan-introduce-contactButton {
  border: black 1px solid;
  margin-top: 36px;
  color: black;
}

</style>
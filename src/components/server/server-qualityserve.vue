<template>
  <!-- 全面品质服务 -->
  <div class="server-qualityserve-container common-container">
    <!-- 箭头 -->
    <div class="server-qualityserve-arrow">
      <img src="../../assets/indx-arrow.png" />
    </div>
    <!-- 标题 -->
    <h1 class="server-qualityserve-title common-title">全方面品质服务</h1>
    <!-- 分割线 -->
    <div class="server-qualityserve-line"></div>
    <!-- 标语容器 -->
    <div class="server-qualityserve-logo-box">
      <div class="server-qualityserve-logo-item box1">
        <div class="server-qualityserve-logo-text1">
          <p>高质量交付</p>
          <p>企业级定制开发服务</p>
        </div>
      </div>
      <div class="server-qualityserve-logo-item box2">
        <div class="server-qualityserve-logo-text2">
          <p>一站式全产品晟敏周期服务</p>
          <p>咨询、设计、开发</p>
          <p>质保、运维全覆盖</p>
        </div>
      </div>
      <div class="server-qualityserve-logo-item box3">
        <div class="server-qualityserve-logo-text3">
          <p>全透明项目管理</p>
          <p>实时对每个项目进行跟踪，</p>
          <p>确保每个项目全流程透明管理</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.server-qualityserve-container {
  margin: 0 auto;
}

.server-qualityserve-arrow {
  padding: 77px 0 46px 0;
  text-align: center;
}

.server-qualityserve-title {
  margin: 0;
  margin-bottom: 22px;
  padding: 0;
  text-align: center;
}

.server-qualityserve-line {
  height: 1px;
  width: 491px;
  background-color: #e3e3e3;
  margin: 0 auto;
  padding: 0;
}

.server-qualityserve-logo-item {
  width: 32%;
  float: left;
  height: 170px;
  border-radius: 18px;
  margin: 0 0 0 15px; 
}

.server-qualityserve-logo-item p {
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.server-qualityserve-logo-box {
    margin: 31px 0 65px 0;
}

.server-qualityserve-logo-box::after {
  content: "";
  display: block;
  clear: both;
}

.server-qualityserve-logo-item:nth-child(1) {
    margin-left: 0; 
}

.box1 {
  background-image: url(../../assets/q1.png);
}

.server-qualityserve-logo-text1 {
  padding-top: 60px;
}

.box2 {
  background-image: url(../../assets/q2.png);
}

.server-qualityserve-logo-text2 {
  padding-top: 50px;
}

.box3 {
  background-image: url(../../assets/q3.png);
}

.server-qualityserve-logo-text3 {
  padding-top: 50px;
}
</style>
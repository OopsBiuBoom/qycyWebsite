<template>
  <!-- 理念标语 -->
  <div class="about-slogan-container">
    <img src="../../assets/aboutme-bg.png" />
    <div class="about-slogan-textbox">
      <h1>一直坚信</h1>
      <h1>恪守诚信才是企业成长的基石</h1>
    </div>
  </div>
</template>

<style scoped>
.about-slogan-container {
  height: 400px;
  width: 100%;
  position: relative;
}

.about-slogan-container img {
  width: 100%;
  height: 100%;
}

.about-slogan-textbox {
  text-align: center;
  color: white;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-slogan-textbox h1 {
    margin-bottom: 7px;
}
</style>
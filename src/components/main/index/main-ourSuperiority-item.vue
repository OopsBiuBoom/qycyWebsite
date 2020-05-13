<template>
  <div>
    <div class="imgbox">
      <img :src="item.img" />
    </div>
    <h3 class="ourSuperiority-item-title">{{ item.title }}</h3>
    <p class="ourSuperiority-item-contetent">{{item.content}}</p>
    <p class="ourSuperiority-item-contetent">{{item.content2}}</p>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
.imgbox {
  width: 88px;
  height: 88px;
  margin: auto;
}

.imgbox img {
  height: 100%;
  width: 100%;
}

.ourSuperiority-item-title {
  color: #007df1;
  font-size: 13px;
  text-align: center;
}

.ourSuperiority-item-contetent {
  font-size: 10px;
  line-height: 17px;
  text-align: center;
}
</style>
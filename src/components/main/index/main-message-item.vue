<template>
  <div class="main-message-item-container" @click="itemTap">
    <!-- 资讯中心的item -->
    <div class="logo">
      <img :src="item.imageurl" />
    </div>
    <div class="main-message-item-info">
      <h2>{{ item.title }}</h2>
      <p class="main-message-item-info-content">{{ item.content }}</p>
      <span class="main-message-item-info-tag">{{ item .tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    itemTap() {
      alert(this.item.title)
    }
  },
  props: ["item"]
};
</script>

<style scoped>
.main-message-item-container {
  width: 45%;
  float: left;
  margin-top: 72px;
  margin-right: 56px;
}

.logo {
  width: 174px;
  height: 174px;
  background-color: aquamarine;
  float: left;
}

.logo img {
  height: 100%;
  width: 100%;
}

.main-message-item-info {
  float: left;
  width: 300px;
  margin-left: 15px;
}

.main-message-item-info h2 {
  font-size: 20px;
  padding: 0;
  margin: 0;
}

.main-message-item-info-content {
  width: 100%;
  height: 90px;
  font-size: 14px;
}

.main-message-item-info-tag {
  background-color: #f6f6f6;
  margin: 0;
  padding: 3px 4px;
  color: #888888;
  font-size: 9px;
  /* margin-top: 45px; */
}

.main-message-item-container:hover {
  background-color: honeydew;
  cursor: pointer;
}
</style>
<template>
  <!-- 自定义标题导航 -->
  <div class="title-nav-container">
    <ul>
      <li
        :class="index == selectedIndex ? 'title-nav-active' : ''"
        v-for="(item, index) in items"
        :key="index"
        @click="changeTag(index)"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 显示内容
    items: Array,
    // 选择的item
    selectedIndex: Number
  },
  methods: {
    // item点击事件
    changeTag(index) {
      this.$emit("didSelect", index);
    }
  }
};
</script>

<style scoped>
.title-nav-container {
  margin: 0;
}

ul {
  padding-inline-start: 0;
  margin: 0;
  list-style-type: none;
  display: inline-block;
}

ul::after {
  content: "";
  display: block;
  clear: both;
}

li {
  float: left;
  margin: 5px 10px;
  padding: 8px 12px;
  border: 1px #e3e3e3 solid;
  border-radius: 3px;
}

li:hover {
  background-color: #007df1;
  cursor: pointer;
  color: white;
}

.title-nav-active {
  background-color: #007df1;
  color: white;
}
</style>
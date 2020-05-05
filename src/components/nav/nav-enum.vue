<template>
  <div class="enum">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a href="#" @click="aDidSelect(item.id)">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "首页", id: 1 },
        { title: "服务", id: 2 },
        { title: "产品案例", id: 3 },
        { title: "资讯", id: 4 },
        { title: "关于我们", id: 5 }
      ]
    };
  },
  methods: {
    aDidSelect(id) {
      console.log(this.items[id].title)
    }
  }
};
</script>

<style scoped>
.enum {
  height: 100%;
}

ul {
  list-style-type: none;
}

.enum ul li {
  float: left;
  margin: 12px 0px 0 80px;
}

.enum ul li a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: PingFang SC;
  font-size: 16px;
}

/* 还缺少选择高亮和点击高亮 */
/* .nav ul li:hover {
  text-align: center;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
} */
</style>
<template>
  <div class="enum">
    <ul>
      <li v-for="item in items" :key="item.id">
        <p @click="aDidSelect(item.id)">{{ item.title }}</p>
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
      switch (id) {
        case 1:
          // 跳转`主要页面`
          this.$router.push("subIndex")
          break;
        case 2:
          // 跳转`服务页面`
          this.$router.push("server")
          break;
      }
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
  margin: 0;
}

ul::after {
  content: "";
  display: block;
  clear: both;
}

.enum ul li {
  float: left;
  height: 60px;
  width: 100px;
  text-align: center;
}

.enum ul li p {
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: PingFang SC;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  top: 20px;
}

.enum li:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
</style>
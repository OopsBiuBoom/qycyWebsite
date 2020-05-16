<template>
  <div class="enum">
    <ul>
      <li v-for="item in items" :key="item.id" @click="aDidSelect(item.id)">
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import e from "@/common/enum";

export default {
  data() {
    return {
      items: [
        { title: "首页", id: e.navIndex.index },
        { title: "服务", id: e.navIndex.server },
        { title: "产品案例", id: e.navIndex.case },
        { title: "资讯", id: e.navIndex.message },
        { title: "关于我们", id: e.navIndex.about }
      ]
    };
  },
  methods: {
    aDidSelect(id) {
      switch (id) {
        case 1:
          // 跳转`主要页面`
          this.$router.push("subIndex");
          // 发送通知
          PubSub.publish("navChange", id);
          break;
        case 2:
          // 跳转`服务页面`
          this.$router.push("server");
          // 发送通知
          PubSub.publish("navChange", id);
          break;
        case 3:
          // 跳转`产品案例页面`
          this.$router.push("case");
          // 发送通知
          PubSub.publish("navChange", id);
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
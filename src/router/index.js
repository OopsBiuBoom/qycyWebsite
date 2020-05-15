import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/Index.vue";
import serverIndex from "@/components/server/server-index.vue";
import indexMain from "@/components/main/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: index,
    children: [
      {
        // 默认路径
        path: '',
        redirect: 'subIndex'
      },
      {
        // 首页子内容
        path: 'subIndex',
        component: indexMain
      },
      {
        // 服务
        path: "server",
        component: serverIndex
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;

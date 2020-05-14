<template>
  <div class="main-dev-product-container">
    <!-- 严谨的开发每一个项目 -->
    <div class="main-dev-product-box">
      <h1 class="dev-product-title">严谨开发每一个项目</h1>
      <p class="dev-product-subtitle">以客户产品成功为企业价值观</p>

      <div class="main-dev-product-itembox">
        <devProductItem
          class="main-dev-product-item"
          v-for="(item, index) in items"
          :key="index"
          :info="item"
        ></devProductItem>
            <div style="clear:both;"></div>

      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
import devProductItem from "@/components/main/index/main-dev-product-item.vue";

export default {
  data() {
    return {
      items: [
        {
          title: "前期评估"
        },
        {
          title: "需求管理"
        },
        {
          title: "风险评估"
        },
        {
          title: "积极沟通"
        },
        {
          title: "质量管理"
        }
      ]
    };
  },
  components: {
    devProductItem
  }
};
</script>

<style scoped>
.main-dev-product-container {
  width: 100%;
  background-color: #f6f6f6;
}

.main-dev-product-box {
  width: 1200px;
  margin: auto;
}

.dev-product-title {
  font-size: 35px;
  text-align: center;
  margin: 0 auto;
  padding: 50px 0 12px 0;
}

.dev-product-subtitle {
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
}

.main-dev-product-itembox {
  margin: 46px 100px 103px 100px;
}

.main-dev-product-itembox::after {
  content: "";
  display: block;
  clear: both;
}

.main-dev-product-item {
  width: 200px;
  float: left;
}
</style>
<template>
  <!-- 优秀案例 -->
  <div class="server-case-container">
    <div class="server-case-box">
        <!-- 标题 -->
        <h1 class="server-case-title common-title">优秀案例</h1>
        <!-- 内容格子容器 -->
        <div class="server-case-detail-box">
            <!-- 内容item -->
            <div class="server-case-detail-item" v-for="(item, index) in items" :key="index" @click="itemTap(index)">
                <!-- 图片容器 -->
                <div class="server-case-detail-img">
                    <img :src="item.img">
                </div>
                <!-- 标题 -->
                <h2 class="server-case-detail-title">{{ item.title }}</h2>
                <!-- 内容 -->
                <p class="server-case-detail-content">{{ item.content }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=15857274,120780525&fm=26&gp=0.jpg",
                    title: "接口的就按",
                    content: "侃大山开发捡垃圾杀得快放假拉开数据的发链接阿市领导附近拉三等奖卡拉假设考虑到卡萨丁考虑..."
                },
                {
                    img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3332175176,3567490807&fm=26&gp=0.jpg",
                    title: "接水电费按",
                    content: "侃大山开发发大厦快放假拉开数据的发链接阿市领导附近拉三等奖卡拉假设考虑到卡萨丁考虑..."
                },
                {
                    img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=378571857,376275755&fm=26&gp=0.jpg",
                    title: "接卡视角反馈按",
                    content: "侃大山开发发大厦快放假拉虑到卡萨丁考虑..."
                },
                {
                    img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586539993,220144071&fm=26&gp=0.jpg",
                    title: "接卡视酷酷的看看按",
                    content: "侃大山开发发大厦快放假拉开数据的发链接阿市领导附近拉三等奖卡拉假设考虑到卡萨丁考虑..."
                },
                {
                    img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=303546052,1489945627&fm=26&gp=0.jpg",
                    title: "接卡视酷酷的看看按",
                    content: "侃大山开发发大厦快放假拉开数据的发链接阿市领导附近拉三等奖卡拉假设考虑到卡萨丁考虑..."
                },
                {
                    img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2255910787,3354486640&fm=26&gp=0.jpg",
                    title: "接卡视看看按",
                    content: "侃大山开发发大厦快放假拉开数据的发链接阿市领导附近拉三等奖卡拉假设考虑到卡萨丁考虑..."
                },
            ]
        }
    },
    methods: {
        // 内容点击
        itemTap(index) {
            alert(this.items[index].title)
        }
    },
}
</script>

<style scoped>
.server-case-container {
    background-color: #F6F6F6;
}

.server-case-box {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px; 
}

.server-case-title {
    text-align: center;
    margin: 0;
    padding: 38px 0 41px 0;
}

.server-case-detail-item {
    float: left;
    height: 300px;
    width: 30%;
    margin: 0 10px 18px 10px; 
    cursor: pointer;
}

.server-case-detail-img img {
    width: 100%;
    height: 200px;
    border-radius: 6px;
}

.server-case-detail-title {
    text-align: left;
    font-size: 18px;
    margin: 15px 0 13px 0;
    padding: 0;
}

.server-case-detail-content {
    text-align: left;
    font-size: 10px;
    line-height: 21px;
    margin: 0;
    padding: 0;
}

.server-case-detail-box::after {
    content: "";
    display: block;
    clear: both;
}

/* ie8好像不支持css3的:nth-child选择器，可以使用jq来实现 */
.server-case-detail-item:nth-child(1) {
  margin-left: 0 !important;
}

.server-case-detail-item:nth-child(3n + 1) {
  margin-left: 0 !important;
}

.server-case-detail-item:nth-child(3n) {
  margin-right: 0 !important;
}

</style>
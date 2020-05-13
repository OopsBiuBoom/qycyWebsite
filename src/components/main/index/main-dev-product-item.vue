<template>
    <div class="main-dev-product-container">
        <div class="main-dev-product-logobox"></div>
        <p class="main-dev-product-title">{{ info.title }}</p>
    </div>
</template>

<script>
export default {
    props: ['info']
}
</script>

<style scoped>

.main-dev-product-logobox {
    height: 140px;
    width: 140px;
    background-color: aquamarine;
    margin: 0 auto;
}

.main-dev-product-title {
    font-size: 15px;
    text-align: center;
}

</style>
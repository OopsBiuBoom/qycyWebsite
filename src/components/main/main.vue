<template>
    <div id="main-container">
        <main-index/>
    </div>
</template>

<script>

import mainIndex from "@/components/main/index/main-index.vue"

export default {
    components: {
        "main-index": {
            render: h => h(mainIndex)
        }
    }
}
</script>

<style scoped>

#main-container {
    height: 100%;
    /* height: 800px; */
    /* background-color: aquamarine; */
}

</style>
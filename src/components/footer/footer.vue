<template>
    <div>
        <footer-top/>
        <footer-bottom/>
    </div>
</template>

<script>

import footetTop from "../footer/footer-top"
import footerBottom from "../footer/footer-bottom"

export default {
    components: {
        "footer-top": {
            render: h => h(footetTop)
        },
        "footer-bottom": {
            render: h => h(footerBottom)
        }
    }
}
</script>
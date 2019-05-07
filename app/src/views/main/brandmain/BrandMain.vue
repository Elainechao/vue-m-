<template>
    <div class="brand-containter">
        <BrandNav></BrandNav>
    </div>
</template>
<script>
import BrandNav from './BrandNav'
export default {
    components:{
        BrandNav
    }
}
</script>

<style lang="stylus" scoped>
 .brand-containter
    width 100%
    flex 1
    overflow auto
    background #fff
    -webkit-overflow-scrolling touch
    ellipsis (auto 2)
</style>
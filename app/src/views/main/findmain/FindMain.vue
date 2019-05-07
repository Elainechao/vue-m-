<template>
    <div class="findmain-containter">
        <FindNav></FindNav>
    </div>
</template>
<script>
import FindNav from './FindNav'
export default {
    components:{
        FindNav
    }
}
</script>

<style lang="stylus" scoped>
 .findmain-containter
    width 100%
    flex 1
    overflow auto
    background #fff
    -webkit-overflow-scrolling touch
    ellipsis (auto 2)
</style>

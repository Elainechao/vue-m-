<template>
    <div class="layout-container">
        <Header class="header"></Header>
        <main>
            <transition
            enter-active-class="animated fadeIn"
            >
            <router-view class="home-layout"></router-view>
            </transition>
        </main>
        <Tabbar class="footer"></Tabbar>
    </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Tabbar from '@/components/layout/Tabbar'
import FistPage from '@/views/home/FistPage'
export default {
    components:{
        Header,
        Tabbar,
        FistPage
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl' 
.layout-container
    height 100%
    display flex
    flex-direction column
    main
        position relative
        flex 1
        overflow auto  
.home-layout
  position absolute
  width 100%  
</style>



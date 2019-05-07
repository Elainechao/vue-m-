<template>
    <div class="tabbar-container">
        <ul>
      <router-link to="/fistpage" active-class="active" tag="li">
        <img width="25" height="25" @click="handleClick(0) " :src="currentIndex === 0 ? 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_home_hl@2x.png' : 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_home_normal@2x.png'" alt="">
        <b>首页</b>
      </router-link>
        <router-link to="/find" active-class="active" tag="li">
        <img width="25" height="25" @click="handleClick(1)" :src="currentIndex === 1 ? 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_tclass_hl@2x.png':'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_tclass_normal@2x.png'" alt="" :class="currentIndex === 0 ? 'active1' : ''">
        <b>发现</b>
        </router-link>
      <router-link to="/brand" active-class="active" tag="li">
        <img width="25" height="25" @click="handleClick(2)" :src="currentIndex === 2 ? 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_brand_hl@2x.png':'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_brand_normal@2x.png'" alt="" :class="currentIndex === 0 ? 'active1' : ''">
        <b>品牌</b>
      </router-link>
       <router-link to="/classific" active-class="active" tag="li">
        <img width="25" height="25" @click="handleClick(3)" :src="currentIndex === 3 ? 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_classify_woman_hl@2x.png':'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_classify_woman_normal@2x.png'" alt="" :class="currentIndex === 0 ? 'active1' : ''">
        <b>分类</b>
       </router-link>
       <router-link to="/my" active-class="active" tag="li">
        <img width="25" height="25" @click="handleClick(4)" :src="currentIndex === 4 ? 'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_mine_hl@2x.png':'https://static.360buyimg.com/tp-statics/images/globalBottom/BottomBar_mine_normal@2x.png'" alt="" :class="currentIndex === 0 ? 'active1' : ''">        
        <b>我的</b>
       </router-link>
    </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: 0

    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/variables.styl'
@import '~@/assets/border.styl'
.tabbar-container
  height .5rem
  border(1px 0 0 0)
  background #232321
  ul
    height 100%
    display flex
    li
      height 100%
      color #fff
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      .img-wrap
        width .25rem
        height .25rem
      b
        font-size .12rem
        vertical-align inherit
        // color #fff
        opacity .4
    
      &.active b
        color $base-color
      
        
</style>


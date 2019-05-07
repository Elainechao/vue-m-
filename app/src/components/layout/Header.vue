<template>
    <div  class="header-container" :class="item === 0 ? 'header-container-active' : ''">
        <!-- <div data-v-c1ef27fa data-v-50e4723e class="wake-up-app-blank" :class="item === 0 ? 'active' : ''">
            <div data-v-c1ef27fa class="wake-up-app">
              <div data-v-c1ef27fa class="download-pannel">
                <div data-v-c1ef27fa class="download-btn">
                  <img @click="clickHandler(0)"
                    data-v-c1ef27fa
                    src="//img30.360buyimg.com/mobilecms/jfs/t9076/58/2457698646/1854/12a9206d/59ce19f5Na0d0b175.png"
                  >
                </div>
                <div data-v-c1ef27fa class="download-logo">
                  <img
                    data-v-c1ef27fa
                    src="//img30.360buyimg.com/mobilecms/jfs/t9304/348/2393282538/4178/dc1c6ed0/59ce19feN9c72a029.png"
                  >
                </div>
                <div data-v-c1ef27fa class="download-txt">
                  <span data-v-c1ef27fa class="dt-tit">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">进入TOPLIFE APP浏览</font>
                    </font>
                  </span>
                  <span data-v-c1ef27fa class="dt-sub">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">新人领1500礼包</font>
                    </font>
                  </span>
                </div>
                <a data-v-c1ef27fa class="download-action">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">即刻享购</font>
                  </font>
                </a>
              </div>
            </div>
        </div> -->
        <div class="search-container">
        <div class="logo-box"><img src="https://m.360buyimg.com/babel/jfs/t1/332/4/9394/2708/5bab63d8Ecc3363c5/f369d305f3084a93.png" alt=""></div> 
        <!-- <div class="search-box"></div> -->
        <router-link to="/search" tag="div" class="search-box" active-class="active" @click="clickHandle(1)"><div class="icon"></div></router-link>
        <div class="cart-box">
          <router-link to="/car" tag="div" class="bg"></router-link>
          <div class="count" style="display : none"></div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      item:1
    }
  },

  // computed:{
  //   clickHandle(index){
  //     return this.$store.state.
  //   }
  // },
    
    // methods:{
    //   clickHandler(index){
    //       this.item=index
    //   }
    // }
}
</script>


<style lang="stylus" scoped>
.header-container
  height .5rem
  background #ffffff
  line-height .5rem
  text-align center
  .active
    display none 
  // .wake-up-app-blank
  //   position relative
  //   left 0
  //   top 0
  //   z-index 333
  //   width 100%
  //   height .5rem
  //   margin 0 auto
  //   transform:translateY(0) 
  //   .download-pannel
  //       display flex
  //       width 100%
  //       height .5rem
  //       background-color #232321
  //       .download-btn
  //           width .16rem
  //           height .16rem
  //           margin-left: .15rem;
  //           margin-top: .17rem;
  //           img 
  //               display block
  //               width 100%
  //               height 100%
  //       .download-logo
  //           width .31rem
  //           height .31rem
  //           margin-left .25rem
  //           margin-top .095rem
  //           margin-right .1rem
  //           img 
  //               display block
  //               width 100%
  //               height 100%
  //       .download-txt
  //           -web-box-flex 1
  //           flex 1
  //           height 100%
  //           overflow hidden
  //           color #ffffff
  //         span 
  //             display block
  //             width 100%
  //             overflow hidden
  //             white-space nowrap
  //             text-overflow ellipsis
  //         .dt-tit
  //             heiht .18rem
  //             line-height .18rem
  //             margin-top .08rem
  //             font-size .14rem
  //         .dt-sub
  //             height .16rem
  //             line-height: .16rem;
  //             font-size: .12rem;
  //             color: #c0a369;
  //         .download-action
  //             display block
  //             width 1rem
  //             height 100%
  //             margin-left .025rem
  //             line-height .5rem
  //             background #c0a369
  //             color #ffffff
  //             text-align center
  //             font-size .14rem
  // .active
  //   display none  
  .search-container
    height .5rem
    position relative
    .logo-box
      position absolute
      top .06rem
      left 0
      right 0
      width 1.28rem
      height .38rem
      line-height .38rem
      margin 0 auto 
      img 
        width 100%
        vertical-align middle
    .search-box
      position absolute
      top 0
      right .5rem
      width .35rem
      height 100%
      padding .075rem .2rem
      background-color #fff
      .icon
        position absolute
        display inline-block
        vertical-align middle
        top 0
        right 0
        bottom 0
        left 0
        width .17rem
        height .16rem
        margin auto
        background url("//static.360buyimg.com/tp-statics/images/homeTop/icon_fold_search.png") no-repeat 50%/100% 100%
      .ipt-box
        position absolute
        left 0
        top 0
        width .4rem
        height .5rem
        border 0
        color transparent
        background-color transparent
    .cart-box
      position absolute
      top 0
      right 0
      width .28rem
      height 100%
      padding-right .2rem
      box-sizing content-box 
      .bg
        position absolute
        top 0
        right .2rem
        bottom 0
        width .24rem
        height .24rem
        margin auto
        background url(//static.360buyimg.com/tp-statics/images/homeTop/shoppingbag.png) no-repeat 50%
        background-size 100% 100%
.header-container-active
  height .5rem
</style>


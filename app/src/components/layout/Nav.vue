<template>
  <div data-v-c1ef27fa data-v-50e4723e class="wake-up-app-blank" :class="item === 0 ? 'active' : ''">
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
  </div>
</template>
<script>
export default {
  data(){
    return{
      item:1
    }
  },
    
    methods:{
      clickHandler(index){
          this.item=index
      }
    }
}
</script>
<style lang="stylus" scoped>
.wake-up-app-blank
    position relative
    left 0
    top 0
    z-index 333
    width 100%
    height .5rem
    margin 0 auto
    transform:translateY(0) 
    .download-pannel
        display flex
        width 100%
        height .5rem
        background-color #232321
        .download-btn
            width .16rem
            height .16rem
            margin-left: .15rem;
            margin-top: .17rem;
            img 
                display block
                width 100%
                height 100%
        .download-logo
            width .31rem
            height .31rem
            margin-left .25rem
            margin-top .095rem
            margin-right .1rem
            img 
                display block
                width 100%
                height 100%
        .download-txt
            -web-box-flex 1
            flex 1
            height 100%
            overflow hidden
            color #ffffff
          span 
              display block
              width 100%
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
          .dt-tit
              heiht .18rem
              line-height .18rem
              margin-top .08rem
              font-size .14rem
          .dt-sub
              height .16rem
              line-height: .16rem;
              font-size: .12rem;
              color: #c0a369;
          .download-action
              display block
              width 1rem
              height 100%
              margin-left .025rem
              line-height .5rem
              background #c0a369
              color #ffffff
              text-align center
              font-size .14rem
.active
  display none                

</style>


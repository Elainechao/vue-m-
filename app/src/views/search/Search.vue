<template>
<div>
  <div class="big view">
    <div data-v-3f83c169 data-v-50e4723e class="search-container" style>
      <div data-v-3f83c169 class="placeholder-box">
        <section data-v-3f83c169 class="section-top clearfix">
          <div data-v-3f83c169 class="search-box-md">
            <div data-v-3f83c169 class="icon-search"></div>
            <!-- <div data-v-3f83c169 class="placeholder" style="display: none;">
            </div> -->     
            <input data-v-3f83c169 type="text" class="ipt" placeholder="输入品牌或关键词进行搜索" id="searchPreInput" v-model="inputtext" @keyup.13="handlerKeyup(4)">
          </div>
          <router-link to="/fistpage" data-v-3f83c169 class="btn-cancel">取消</router-link>
        </section>
      </div>
      <section data-v-5646f233 data-v-3f83c169 class="section_associate" style="display: none;"></section>
      <div data-v-3f83c169 style>
      <section data-v-1f5e9c29 data-v-3f83c169 class="section-history" :style="num===2 ? 'display:none' : 'display:block'">
          <section data-v-1f5e9c29 class="section-title">
            <div data-v-1f5e9c29 class="title">
                历史搜索
            </div>
            <div data-v-1f5e9c29 class="btn-del-all" @click="clickHandler(1)"></div>
          </section>
          <section data-v-1f5e9c29 class="section-list">
            <div data-v-1f5e9c29 class="item"  v-for="list of lists">
              {{list}}
            </div>
            <!-- <div data-v-1f5e9c29 class="item">
                哈哈哈
            </div> -->
          </section>
        </section>
        <section data-v-495ab7e2 data-v-3f83c169 class="section-hot" >
          <section data-v-495ab7e2 class="section-title">
            <div data-v-495ab7e2 class="title">
                热门搜索
            </div>
          </section>
          <section data-v-495ab7e2 class="section-list">
            <div data-v-495ab7e2 class="item">
                YSL
            </div>
            <div data-v-495ab7e2 class="item">
                围巾
            </div>
            <div data-v-495ab7e2 class="item">
                酒
            </div>
            <div data-v-495ab7e2 class="item">
                羽绒服
            </div>
            <div data-v-495ab7e2 class="item">
                棉服
            </div>
            <div data-v-495ab7e2 class="item">
                桑
            </div>
            <div data-v-495ab7e2 class="item">
                派克外套
            </div>
            <div data-v-495ab7e2 class="item">
              手表
            </div>
            <div data-v-495ab7e2 class="item">
                纹理钱包
            </div>
            <div data-v-495ab7e2 class="item">
                礼盒
            </div>
          </section>
        </section>
      </div>
    </div>
          
      <div data-v-6d69e183="" class="popwin-wrap pop-del-all-history" :style="num===1 && num !==2 && num !==3? 'display:flex' :'display:none'" >
          <div data-v-6d69e183="" class="mask"></div> 
          <div data-v-6d69e183="" class="popbox">
              <div data-v-6d69e183="" class="pop_tit">确定要删除全部搜索历史吗？</div> 
              <div data-v-6d69e183="" class="btn-box"><div data-v-6d69e183="" class="btn-gray" @click="clickHandler2(3)">取消</div>
              <div data-v-6d69e183="" class="btn-black" @click="clickHandler1(2)">确定</div>
          </div>
      </div>
      </div>
    <!-- <router-link to="/detail" tag="div" class="swiper-slide" :key="search.data[0].suId" v-for="search of searchs">
    <div data-v-61fcfe1d class="pro-item">
      <div data-v-61fcfe1d class="pro_con">
        <div data-v-61fcfe1d class="pro-img">
          <img data-v-61fcfe1d class="img" :src="search.data[0].image" lazy="loaded">
        </div>
        <div data-v-61fcfe1d class="brand-name">{{search.data[0].commentInfo}}</div>
        <div data-v-61fcfe1d class="price">
          <span data-v-61fcfe1d class="price-num">
            <i data-v-61fcfe1d class="yen">
             ￥
            </i>
           {{search.data[0].priceStr}}
          </span>
          </div>
        </div>
      </div>
    </router-link > -->
    <!-- <div class="search-templates">
      <div class="singleProductTemplate">
        <ul v-for="searchdata of searchdatas" :key="searchdata.data[0].suId">
          <li class="singleProduct routeLink clear">
            <img :src="searchdata.data[0].image">
            <div class="singleProductDes">
              <p class="singleTitle">{{searchdata.data[0].title}}</p>
              <p class="singleShop">{{searchdata.data[0].productDes}}</p>
              <ul class="singleTag productTag">
                <li style="background:#FFFFFF;border:solid 0.015rem #FB4C81;color:#FB4C81; ">一起拼</li>
              </ul>
              <p class="singleBackground">{{searchdata.data[0].background}}</p>
              <p class="singlePrice">
                <i>￥</i>
                <span class="singlePriceInt">{{searchdata.data[0].priceStr}}</span>
                <span class="singlePriceCent"></span>
              </p>
              <div class="item-praise-wrap">
                <p class="item-praise escp">{{searchdata.data[0].commentInfo}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
</div>
</div>
</template>
<script>
// 节流函数
// const delay =(function(){
//   let timer =0,
//   return function (callback,ms){
//     clearTimeout(timer);
//     timer =setTimeout(callback,ms);
//   }
// })
import request from "utils/request"
import axios from 'axios'
import { toUnicode } from 'punycode'
export default {
  data() {
    return {
      searchs: "",
      num:0,
      lists:[],
      searchdatas:[],
      inputtext:"",
      encodeURItext:""
    };
  },

  methods:{
      clickHandler(index){
              this.num=index

      },
      clickHandler1(index){
              this.num=index
              console.log(this.num)
          

      },
       handlerKeyup(index){
                    this.num=index 
                   if(this.inputtext==='') {
                    alert("请输入正确信息，我们会根据您输入的信息自动检索物品")
                  }
                   this.lists.push(this.inputtext)
                   this.inputtext=''
               },

      clickHandler2(index){
              this.num=index
              this.lists.lenght=0
      },
  },
     watch:{
    inputtext:async function(){
      if(this.inputtext){
      this.encodeURItext ="q%3D" +encodeURI(encodeURI(this.inputtext))
      }
      let result = await request({
      url: "/biyao/search/goSearch",
      params: {
        sp: this.encodeURItext,
      }
      });
      // this.searchdatas = result.data.blockData[0].templates
      console.log(result)
    }
  }
}
</script>
<style lang="stylus" scoped>
.big
    height 100%
    background-color #ffffff
.view
    font-size .12rem
    margin 0 auto 
    .search-container
        position fixed
        top 0
        left 0
        right 0
        z-index 920
        max-width 3.75rem
        height 100%
        margin 0 auto
        padding-top env(safe-area-inset-top)
        overflow scroll
        background-color #f4f1f1
        .placeholder-box
            height .65rem
            .section-top
                position fixed
                left 0
                right 0
                z-index 5
                width 100%
                height .68rem
                max-width 3.75rem
                padding .27rem .2rem 0
                top env(safe-area-inset-top)
                border-bottom 1px solid #ddd
                background-color #fff
                .search-box-md
                    position relative
                    float left
                    width 83%
                    height .3rem
                    padding-left .35rem
                    background-color #f7f7f7
                    .icon-search
                        position absolute
                        top .1rem
                        left .075rem
                        width .4rem
                        height 100%
                        background: url(//static.360buyimg.com/tp-statics/images/ic_search_myorder_search2.png) no-repeat
                        background-size .15rem 

                    .placeholder
                        position absolute
                        left .35rem
                        right .99rem
                        color #999
                    .ipt
                        width 100%
                        height 100%
                        border none 
                        background-color transparent
                        position relative
                        z-index 5                
                .btn-cancel
                    float right
                    width 15%
                    height .3rem
                    margin-left 2%
                    color #333333
                    font-size .16rem
                    text-align center            
                    :after
                        content "."
                        display block
                        height 0
                        font-size 0
                        clear both
                        visibility hidden
        .section-history
            margin-bottom .1rem
            background-color #ffffff
            .section-title
                position relative
                padding .05rem .2rem 0
                .title
                    height .44rem
                    line-height .44rem
                    color #232321
                    font-weight 700
                    font-size .14rem
                .btn-del-all
                    position absolute 
                    right .15rem
                    top .12rem
                    width .3rem
                    height .3rem
                    background url(//static.360buyimg.com/tp-statics/2019-2-28/m/img/delete@2x.png) 50% no-repeat
                    background-size .2rem .2rem
            .section-list
                height .33rem
                margin 0 .12rem 0 .2rem
                padding-bottom .12rem
                .item 
                    float left
                    height .23rem
                    line-height .23rem
                    margin 0 .08rem .08rem 0
                    padding 0 .15rem
                    border 1px solid #dddddd
                    font-size .14rem
                :after 
                    content ""
                    display table
                    clear both
        .section-hot
            background-color #fff
            display block
            .section-title
                position relative
                padding .05rem .2rem 0
                .title
                    height .44rem
                    line-height .44rem
                    color #232321
                    font-weight 700
                    font-size .14rem
        .section-list
                height .99rem
                margin 0 .12rem 0 .2rem
                padding-bottom .12rem
                .item 
                    float left
                    height .23rem
                    line-height .23rem
                    margin 0 .08rem .08rem 0
                    padding 0 .15rem
                    border 1px solid #dddddd
                    font-size .14rem
    .popwin-wrap
        position fixed 
        left 0
        top 0
        display flex
        justify-content center
        align-items center
        width 100%
        height 100%
        z-index 1005
        display none 
        .mask
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background-color rgba(0,0,0,.8)
            z-index 1002
            opacity 1
        .popbox
            position relative
            width 3rem
            padding-top .14rem
            -webkit-border-radius .15037rem
            border-radius .15037rem
            background-color hsla(0,0%,100%,.9)
            z-index 1005
            .pop_tit
                line-height .8rem
                font-size .16rem
                color #232321
                text-align center
                padding 0 .2rem
            .btn-box
                display flex
                justify-content space-around
                height .43rem
                margin-top .14rem
                border-top .01rem solid #ddd
                line-height .43rem
                text-align center
                font-size .16rem
                color #232321 
                .btn-gray
                    position relative
                    flex 1
                    text-align center
                    color #999 
                .btn-black
                    flex 1
                    text-align center
                    color #232321   
    .swiper-slide 
      width 100%
      flex-shrink 0
      height 100%
      position relative
      text-align center
      .pro-item 
        position: relative
        width 100%
        height 100%
        padding 0 0.13333rem
        text-align center
        margin 0 auto
        .pro-img 
          width 100%
          height 100%
          margin 0 auto

          img 
            width 100%
            height 100%;
        .brand-name
          width 100%
          height 0.32rem
          margin-top 0.14rem
          overflow hidden
          -o-text-overflow ellipsis
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          font-size 0.12rem
          text-align center
          white-space normal
        .price 
          width 100%
          height 0.2rem
          line-height 0.2rem
          overflow hidden
          text-align center
          white-space nowrap
          font-size 0
          .price-num
            font-size 0.12rem


</style>

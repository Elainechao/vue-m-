<template>
  <div>
    <template v-if="data.template ==='hotzone'" >
      <div  class="brand-list cur">
        <div
          class="hotZone"
          type="hot"
          floorindex="2"
          curindex="0"
          apptoken="F13FFC6C_E352CB57"
          platformtoken="F13FFC6C_56C20B0F" :height="data.height/3">
              <img :height="data.height/3" width="100%"
              :src="data.hotZone.pictureUrl"
              lazy="loaded"
              >
        </div>
      </div>
    </template>
     <template v-else-if="data.template ==='jiange'">
          <div class="jiange">
          <div width="100%"></div>
          </div>
    </template>   
  </div>
</template>
<script>
export default {
    props:['data'],
    created(){
      if(this.data.template === 'guanggao_beishu'){
        console.log(this.data)
        }
    }
}
    
</script>
<style lang="stylus" scoped>
.brand-list
  display block
    .list
      width 1.17rem
      padding 0 .09rem
      font-size 0
      .brand-item
        width 1.17rem



// .brand-list.cur
//   display block
// .brand-list 
//   display none
//   width 100%
//   height 100%
//   overflow-x hidden
//   overflow-y auto
//   .hotZone
//       position relative
//       width 100%
//       overflow hidden
//       background-color #fff
//       img
//           position absolute
//           left 0
//           top 0
//           width 100%
//           height 100%
//       .item
//           position absolute
//           left 0
//           top 0
//           z-index 5
//           width 3.75rem
//           height 1.5rem
//       .Jiange
//           height .02rem
//       
//           .brand-item
//               position relative
//               display inline-block
//               width 1rem
//               padding-top 1.1rem
//               margin .1rem .045rem 0
.jiange
  width 3.75rem
  height 2px
</style>



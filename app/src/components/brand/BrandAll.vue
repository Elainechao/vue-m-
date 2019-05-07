<template>
        <div>
        <div class="brand-list">
          <div
            class="guanggao-beishu"
            apptoken="F13FFC6C_E352CB57"
            platformtoken="F13FFC6C_56C20B0F" v-for="value,index in datas">
            <div class="list">
              <div  class="brand-item"  v-for="item in value.adsList" :width="item.picWidth/3"
                  :height="item.picHeight/3">
                <img
                  :width="item.picWidth/3"
                  :height="item.picHeight/3"
                  alt="商标"
                  class="logo"
                  :src="item.pictureUrl"
                  lazy="loaded"
                >
              </div>
            </div>
          </div>
        </div> 
  </div>
</template>
<script>
export default {
    props:['datas'],
    created(){
        console.log(this.datds)
    }
}
</script>

<style lang="stylus" scoped>
.guanggao-beishu
    width 3.75rem
    .list
        padding 0 .09rem
        width 3.75rem
        .brand-item
            width 1.17rem
            display inline-block
</style>

<template>
    <div class="line-containter">
        <img :src="datas[0][1].hotZone.pictureUrl" alt="">     
         <!-- <img src="//m.360buyimg.com/babel/jfs/t1/11957/37/8093/11115/5c6a1466Ede5af774/b0eeee19eb3da207.jpg!q70.dpg" alt=""> -->
    </div>
</template>
<script>
export default {
    props:["datas"],
     data() {
         return{
             titles:[]
         }
     },
     created(){ 
        //  console.log(this.datas)
        // console.log(this.data[1])
        // if(this.data[1] === ''){
        //     this.titles=''            
        // }else{
        //     // this.titles = this.data[1].hotZone.pictureUrl
            
        // }
        //     this.titles = this.data[1].hotZone.pictureUrl

        // this.titles = this.data[1] ? 'this.data[1].hotZone.pictureUrl' : ''
        // console.log(this.data[1])
        // console.log(this.data)
        
     },
    // watch:{
    //     data(){
    //         this.titles = this.data[1] 
           
    //     }
    
     

}
</script>

<style lang="stylus" scoped>
.line-containter
    width 100%
    height .2rem
    overflow hidden
    position relative
    background #fff
    img
        position absolute
        left 0
        top 0
        width 100%
        height 100%        
</style>


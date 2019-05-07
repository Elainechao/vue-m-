<template>
    <div>
        <template v-if="from === 'hot'">
            <BrandItem v-for="value,index in brandlist" :key="value.moduleId" :data="value"></BrandItem>
        </template>
        <template v-if="from === 'all'">
            <BrandAll :datas="brandlist"></BrandAll>
        </template>
        <!-- <template v-if="from === 'az'">
            <BrandItem v-for="value,index in brandlist" :key="value.moduleId" :data="value"></BrandItem>
        </template> -->
    </div>
</template>
<script>
import request from 'utils/request'
import BScroll from 'better-scroll'
import BrandItem from './BrandItem'
import BrandAll from './BrandAll'

import _ from 'lodash'
export default {
    props:['resource'],
    data(){
        return {
            brandlist:[],
            from:'',
            brandIds:[],
        }
    },
    components:{
        BrandItem,
        BrandAll
    },
    creaed(){
    },
    watch:{
        resource(){
            if(this.$route.path  === '/brand/hot'){
                this.from='hot'
            }else if(this.$route.path  === '/brand/all'){
                this.from='all'               
            }else if(this.$route.path  === '/brand/az'){
                this.from='az'                
            }
            let pageSize = 10
            this.brandlist=this.resource.floorList
            // console.log( this.brandlist)
            // this.brandIds =this.resource.activityId
            // console.log(this.findlist[0].template)
            // return this.findlist/
            
            // let bscroll =new BScroll('.findmain-containter',{
            //     probeType:2,
            //     pullUPLoad:true
            // })
            // bscroll.on('pullingup',()=>{
            //     let chunkedArray = _.chunk(this.findId.slice(10),pageSize)
            // })
            // if(this.from === 'news'){
            //     this.findlist = this.from{

            //     }
            // }else if(this.from  === 'styles'){
            //     this.findlist = this.from
            // }else if(this.from === 'stars'){
            //     this.from=this.from               
            // }else if(this.from === 'brands'){
            //     this.findlist=this.from                
            // }else{
            //     this.findlist=this.from
            // }
            // bScroll.finishPullUp()
        }
    },
    //  mounted(){
    //     console.log(this.findlist)
    // },
}
</script>

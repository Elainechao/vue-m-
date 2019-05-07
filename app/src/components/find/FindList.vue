<template>
    <div>
        <template v-if="from === 'new'">
            <FindItem v-for="value,index in findlist" :key="value.moduleId" :data="value"></FindItem>
        </template>
        <template v-if="from === 'star'">
            <FindItem v-for="value,index in findlist" :key="value.moduleId" :data="value"></FindItem>
        </template>
        <template v-if="from === 'brand'">
            <FindItem v-for="value,index in findlist" :key="value.moduleId" :data="value"></FindItem>
        </template>
        <template v-if="from === 'vidio'">
            <FindItem v-for="value,index in findlist" :key="value.moduleId" :data="value"></FindItem>
        </template>
        <template v-if="from === 'style'">
            <FindItem v-for="value,index in findlist" :key="value.moduleId" :data="value"></FindItem>
        </template>
    </div>
</template>
<script>
import request from 'utils/request'
import BScroll from 'better-scroll'
import FindItem from './FindItem'
import _ from 'lodash'
export default {
    props:['resource'],
    data(){
        return {
            findlist:[],
            from:''
        }
    },
    components:{
        FindItem
    },
    watch:{
        resource(){
            if(this.$route.path  === '/find/new'){
                this.from='new'
            }else if(this.$route.path  === '/find/style'){
                this.from='style'               
            }else if(this.$route.path  === '/find/star'){
                this.from='star'                
            }else if(this.$route.path  === '/find/brand'){
                this.from='brand'                
            }else if(this.$route.path  === '/find/vidio')
            {
                this.from='vidio'
            }
            let pageSize = 10
            this.findlist=this.resource.floorList
            this.findIds =this.resource.activityId
            // console.log(this.findlist)
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

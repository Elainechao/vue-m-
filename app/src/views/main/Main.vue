<template>
    <div class="main-container">
        <Banner> </Banner>
        <List></List>
        <MiddleBanner></MiddleBanner>
        <Wrap></Wrap>
        <ThreeM></ThreeM>
        <FourBanner></FourBanner>        
        <PublicMain></PublicMain>
        <All></All>
        <!-- <template  v-for="(list,index) in foods">
            <Lines :data="titleList(index)"></Lines>
            <Title :datas="titleList(index)"></Title>

            <template v-for="item in list.length">
            <Publicmain :datar="food(index)"></Publicmain>
            </template>

        </template> -->
    </div>
</template>

<script>
import Banner from './Banner'
import List from './List'
import Title from './Title'
import MiddleBanner from './MiddleBanner'
import Lines from '@/components/public/Lines'
import axios from 'axios'
import PublicMain from './PublicMain'
import ThreeM from './ThreeM'
import Wrap from '@/components/public/Wrap'
import FourBanner from './FourBanner'
import request from 'utils/request'
import All from './brandmain/routerbrand/All'
import _ from 'lodash'
export default {
    // name: 'recommend',
    data(){
        return {
            all:[]
        }

    },
    components:{
        Banner,
        List,
        Title,
        MiddleBanner,
        Lines,
        PublicMain,
        Wrap,
        ThreeM,
        FourBanner,
        All
      
    },
       
}
</script>

<style lang="stylus" scoped>
 .main-container
    display flex
    flex 1
    flex-direction column
    overflow auto
    background #fff
    -webkit-overflow-scrolling touch
    ellipsis (auto 2)
</style>




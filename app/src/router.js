import Vue from 'vue'
import Router from 'vue-router'
import Brand from '@/views/home/Brand'
import Classific from '@/views/home/Classific'
import Find from '@/views/home/Find'
import FistPage from '@/views/home/FistPage'
import My from '@/views/home/My'
import Home from '@/views/home/Home'
import New from '@/views/main/findmain/routerfind/New'
import star from '@/views/main/findmain/routerfind/star'
import vidio from '@/views/main/findmain/routerfind/vidio'
import brand from '@/views/main/findmain/routerfind/brand'
import style from '@/views/main/findmain/routerfind/style'
import search from '@/views/search/Search'
import Detail from '@/views/detail/Detail'
import Car from '@/views/car/car'
import Hot from '@/views/main/brandmain/routerbrand/Hot'
import Az from '@/views/main/brandmain/routerbrand/Az'
import All from '@/views/main/brandmain/routerbrand/All'
import Wrapp from '@/views/wrapper/WrapFace'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component:Wrapp,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path:'/fistpage',
          name:'fistpage',
          component:FistPage
        },
        {
          path: '/find',
          name:'find',
          component:Find,
          redirect:'/find/new',
          children:[
            {
              path:'new',
              component:New,
            },
            {
              path:'star',
              component:star
            },
            {
              path:'vidio',
              component:vidio
            },
            {
              path:'brand',
              component:brand
            },
            {
              path:'style',
              component:style
            }
          ]
        },
        {
          path:'/brand',
          name:'brand',
          component:Brand,
          redirect:'/brand/hot',
          children:[
            {
              path:'hot',
              component:Hot,
            },
            {
              path:'all',
              component:All
            },
            {
              path:'az',
              component:Az
            },
          ]
        },
        {
          path:'/classific',
          name:'classific',
          component:Classific
        },
        {
          path:'/my',
          name:'my',
          component: My
        },
      ]
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path:'/car',
      name:'car',
      component:Car
    }
  ]
})

// /:img/:brand/:price
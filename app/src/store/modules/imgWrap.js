import request from 'utils/request.js'
const state = {
  movies: []
}

const actions = {
  async load({commit}) {
    const result = await request({
      url:'/ajax/client.action?uuid=87746ee0-3f49-ed62-3601-bcef9bb67f78&clientVersion=7.2.0&areas=21_1911_26451_26718&client=wh5&screen=375*812&functionId=queryRealatedPros&body=%7B%22relatedIds%22:%22pro_07945392%22,%22pageId%22:%22729003%22,%22moduleId%22:13875534,%22prodSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_2_0_0_2_5-1-1%22,%22prodExpoSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_5-1-1%22,%22transParam%22:%22%7B%5C%22bsessionId%5C%22:%5C%2221e761c8-3ce1-47d8-b3d4-a64563cd8688%5C%22,%5C%22babelChannel%5C%22:%5C%22%5C%22,%5C%22actId%5C%22:%5C%2200243489%5C%22,%5C%22enActId%5C%22:%5C%222reXDuX1YpbxyCNajQyVWvyCWBd5%5C%22,%5C%22pageId%5C%22:%5C%22729003%5C%22,%5C%22encryptCouponFlag%5C%22:%5C%221%5C%22,%5C%22requestChannel%5C%22:%5C%22h5%5C%22%7D%22%7D',
    })
    commit('changeMovies', result.skuInfoList)

  }
}

const getters = {
  filterMovies(state) {
    return state.movies.slice(0, 3)
  }
}

const mutations = {
  changeMovies(state, payload) {
    state.movies = payload.pro_07945392
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}




// import req from 'utils/request'

// const state = {
//   shopping: []
// }

// const actions = {
//   async load({commit}) {
//     let result = await req({
//       url:'/ajax/client.action?uuid=87746ee0-3f49-ed62-3601-bcef9bb67f78&clientVersion=7.2.0&areas=21_1911_26451_26718&client=wh5&screen=375*812&functionId=queryRealatedPros&body=%7B%22relatedIds%22:%22pro_07945392%22,%22pageId%22:%22729003%22,%22moduleId%22:13875534,%22prodSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_2_0_0_2_5-1-1%22,%22prodExpoSrvPrefix%22:%2200243489_13875534_t2_03095311_6301052988_1_5-1-1%22,%22transParam%22:%22%7B%5C%22bsessionId%5C%22:%5C%2221e761c8-3ce1-47d8-b3d4-a64563cd8688%5C%22,%5C%22babelChannel%5C%22:%5C%22%5C%22,%5C%22actId%5C%22:%5C%2200243489%5C%22,%5C%22enActId%5C%22:%5C%222reXDuX1YpbxyCNajQyVWvyCWBd5%5C%22,%5C%22pageId%5C%22:%5C%22729003%5C%22,%5C%22encryptCouponFlag%5C%22:%5C%221%5C%22,%5C%22requestChannel%5C%22:%5C%22h5%5C%22%7D%22%7D'
//     })
//     console.log(result)
//     // commit('changeMovies', result.skuInfoList.pro_07945392.image)
//   }
// }

// const getters = {
//   filterMovies(state) {
//     return state.shopping.slice(0, 3)
//   }
// }

// const mutations = {
//   changeMovies(state, payload) {
//     state.shopping = payload.coming
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// }
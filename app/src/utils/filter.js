import Vue from 'vue'
Vue.filter('wh', (value, size) => {
  const dpr = window.devicePixelRatio
  // const map = {
  //   1: '64.90',
  //   2: '128.180',
  //   3: '192.270',
  //   4: '256.360'
  // }
  // return value.replace('w.h', map[dpr])

  return size === 'large' 
    ? value.replace('w.h', `${256*dpr}.${360*dpr}`)
    : value.replace('w.h', `${64*dpr}.${90*dpr}`)
})
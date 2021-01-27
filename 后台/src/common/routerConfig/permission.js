import router from '@/router'
import { _SessionStore } from '@/common/utils/storage'



const whiteList = ['/login', '/401', '/404', '/retrieve']

// router.beforeEach((to, from, next) => {
//   let userinfo =  _SessionStore.get('userinfo');
//   if(to.path == '/login' || to.path == '/'){
//     next()
//     return
//   }
//   if(!userinfo){
//     next({ path: '/' })
//   }else{
//     if(to.path == '/home/user'){
//       if(userinfo.Power != '1' ){
//         next('/login')
//       }else{
//         next()
//       }
//     }else{
//       next()
//     }
//   }
 
// })
router.afterEach(() => {
})

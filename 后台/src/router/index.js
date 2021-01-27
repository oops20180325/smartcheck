import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home/pollingSet'
  },
  {
    path: '/home',
    name: 'lauout',
    component: () => import('@/views/layout'),
    redirect:'/home/pollingSet',
    children: [
      
      
      
      
      {
        path: '/home/pollingSet',
        component: () => import('@/views/inspection_setting/index'),
        meta: {
          title: "自动巡检设置",
          auth: true
        }
      },
      
      
      
      
      
      
      {
        path: '/home/ch4meter',
        component: () => import('@/views/ch4meter/index.vue'),
        meta: {
          title: "ch4meter配置",
          auth: true
        }
      },
      {
        path: '/home/lightmeter',
        component: () => import('@/views/lightmeter/index.vue'),
        meta: {
          title: "lightmeter配置",
          auth: true
        }
      },
      {
        path: '/home/lightpoint',
        component: () => import('@/views/lightpoint/index.vue'),
        meta: {
          title: "红外激光点位设置",
          auth: true
        }
      },
      {
        path: '/home/ch4point',
        component: () => import('@/views/ch4point/index.vue'),
        meta: {
          title: "激光甲烷点位设置",
          auth: true
        }
      },
      {
        path: '/home/ch4log',
        component: () => import('@/views/ch4log/index.vue'),
        meta: {
          title: "激光甲烷巡检记录",
          auth: true
        }
      },
      {
        path: '/home/lightlog',
        component: () => import('@/views/lightlog/index.vue'),
        meta: {
          title: "红外双视巡检记录",
          auth: true
        }
      },
      {
        path: '/home/ch4alarm',
        component: () => import('@/views/ch4alarm/index.vue'),
        meta: {
          title: "激光甲烷报警记录",
          auth: true
        }
      },
      {
        path: '/home/lightalarm',
        component: () => import('@/views/lightalarm/index.vue'),
        meta: {
          title: "红外双视报警记录",
          auth: true
        }
      },
      
      
      
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router

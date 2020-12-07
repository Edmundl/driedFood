import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/pdf'
    },
    {
<<<<<<< HEAD
      path: '/pdf',
      component: () => import('../components/container/pdf.vue')
=======
			path: '/example',
      component: () => import(
        /* webpackChunkName: "example" */
        '../components/container/example.vue'),
      children: [
        {
          path: 'feedback',
          component: () => import(
            /* webpackChunkName: "feedback" */
            /* webpackPrefetch: true */
           '../components/container/feedback.vue')
        },
        {
          path: 'form',
          component: () => import(
            /* webpackChunkName: "form" */
            /* webpackPrefetch: true */
           '../components/container/form.vue')
        },
        {
          path: 'upload',
          component: () => import(
            /* webpackChunkName: "upload" */
            /* webpackPrefetch: true */
           '../components/container/upload.vue')
        },
        {
          path: 'button',
          component: () => import(
            /* webpackChunkName: "button" */
            /* webpackPrefetch: true */
           '../components/container/button.vue')
        },
        {
          path: 'tip',
          component: () => import(
            /* webpackChunkName: "tips" */
            /* webpackPrefetch: true */
           '../components/container/tips.vue')
        },
        {
          path: 'tabs',
          component: () => import(
            /* webpackChunkName: "tabs" */
            /* webpackPrefetch: true */
           '../components/container/tabs.vue')
        },
        {
          path: 'others',
          component: () => import(
            /* webpackChunkName: "others" */
            /* webpackPrefetch: true */
           '../components/container/others.vue')
        },
        {
          path: 'getDatas',
          component: () => import(
            /* webpackChunkName: "others" */
            /* webpackPrefetch: true */
           '../components/container/getDatas.vue')
        }
      ],
			meta: {
        title: '公用组件示例',
        keepAlive: false // 不需要被缓存的组件
			}
    },
    {
      path: '/keepALiveTest',
      component: () => import(
        /* webpackChunkName: "example" */
        '../components/container/keepALiveTest.vue'),
      meta: {
        title: 'keep-alive例子',
        keepAlive: true // 需要被缓存的组件
      }
>>>>>>> e3944b30158d375b21d14fec10949a875a7c495c
    }
    // {
		// 	path: '/example',
    //   component: () => import(
    //     /* webpackChunkName: "example" */
    //     '../components/container/example.vue'),
    //   children: [
    //     {
    //       path: 'feedback',
    //       component: () => import(
    //         /* webpackChunkName: "feedback" */
    //         /* webpackPrefetch: true */
    //        '../components/container/feedback.vue')
    //     },
    //     {
    //       path: 'form',
    //       component: () => import(
    //         /* webpackChunkName: "form" */
    //         /* webpackPrefetch: true */
    //        '../components/container/form.vue')
    //     },
    //     {
    //       path: 'upload',
    //       component: () => import(
    //         /* webpackChunkName: "upload" */
    //         /* webpackPrefetch: true */
    //        '../components/container/upload.vue')
    //     },
    //     {
    //       path: 'button',
    //       component: () => import(
    //         /* webpackChunkName: "button" */
    //         /* webpackPrefetch: true */
    //        '../components/container/button.vue')
    //     },
    //     {
    //       path: 'tip',
    //       component: () => import(
    //         /* webpackChunkName: "tips" */
    //         /* webpackPrefetch: true */
    //        '../components/container/tips.vue')
    //     },
    //     {
    //       path: 'tabs',
    //       component: () => import(
    //         /* webpackChunkName: "tabs" */
    //         /* webpackPrefetch: true */
    //        '../components/container/tabs.vue')
    //     },
    //     {
    //       path: 'others',
    //       component: () => import(
    //         /* webpackChunkName: "others" */
    //         /* webpackPrefetch: true */
    //        '../components/container/others.vue')
    //     },
    //     {
    //       path: 'getDatas',
    //       component: () => import(
    //         /* webpackChunkName: "others" */
    //         /* webpackPrefetch: true */
    //        '../components/container/getDatas.vue')
    //     }
    //   ],
		// 	meta: {
		// 		title: '公用组件示例'
		// 	}
    // }
	]
})
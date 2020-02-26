import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/example'
		},
    {
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
        }
      ],
			meta: {
				title: '公用组件示例'
			}
    }
	]
})
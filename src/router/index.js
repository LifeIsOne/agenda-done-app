import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
// 폼 들
import FormListView from '@/views/forms/FormListView.vue'
import FormCreateView from '@/views/forms/FormCreateView.vue'
import FormEditView from '@/views/forms/FormEditView.vue'
import FormResponseView from '@/views/forms/FormResponseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/form',
      name: 'FormList',
      component: FormListView,
    },
    {
      path: '/form/create',
      name: 'FormCreate',
      component: FormCreateView,
    },
    {
      path: '/form/:formId/edit',
      name: 'FormEdit',
      component: FormEditView,
      props: true,
    },
    {
      path: '/form/:formId',
      name: 'FormResponse',
      component: FormResponseView,
      props: true,
    },
    // TODO : + 응답 결과 페이지 ?
    // {
    //   path: '/form/:formId/result',
    //   name: 'Formresult',
    //   component: FormresultView,
    //   props: true,
    // },
  ],
})

export default router

/**
 * 路由模块
 */

 import MSite from '@/pages/MSite/MSite'
 import Search from '@/pages/Search/Search'
 import Order from '@/pages/Order/Order'
 import Profile from '@/pages/Profile/Profile'


  export default [ 

    {
      path: '/msite',
      component: MSite,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path:'/',
      redirect:'/msite'
    }
]

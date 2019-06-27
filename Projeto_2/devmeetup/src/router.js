import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('./components/Home')
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component:()=>import('./components/Meetup/Meetups')
    }
    ,
    {
      path: '/meetups/new',
      name: 'Createmeeups',
      component:()=>import('./components/Meetup/CreateMeetups')
    }
    ,
    {
      path: '/profile',
      name: 'Profile',
      component:()=>import('./components/User/Profile')
    }
    ,
    {
      path: '/signup',
      name: 'Signup',
      component:()=>import('./components/User/Signup')
    }
    ,
    {
      path: '/signin',
      name: 'Signin',
      component:()=>import('./components/User/Signin')
    }
  ]
 
})

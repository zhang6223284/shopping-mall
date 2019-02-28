import React from 'react'
import Account from './pages/account/index'
import Login from './pages/login/login'
import Shopping from './pages/shopping/index'
import Index from './pages/index/index'

const route = [
  {
    path: '/account',
    comp: () => <Account />
  },
  {
    path: '/',
    comp: () => <Index />
  },
  {
    path: '/shopping',
    comp: () => <Shopping />
  },
  {
    path: '/login',
    comp: () => <Login />
  }
]

export default route
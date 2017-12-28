import asyncComponent from '../AsyncComponent'
import {renderRoutes} from 'react-router-config'

const routes = [
  { 
    path: '/',
    component: asyncComponent(() => import('../views/Home')),
    routes: [
      {
        path: '/one',
        component: asyncComponent(() => import('../views/One')),
        routes: [
          { 
            path: '/one/child',
            component: asyncComponent(() => import('../views/OneChild'))
          }
        ]
      }, {
        path: '/two',
        component: asyncComponent(() => import('../views/Two'))
      }
    ]
  }
]

const routers = renderRoutes(routes)

export default routers
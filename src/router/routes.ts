
import { RouteConfig } from "react-router-config"
import IndexPage from '../pages/Index/IndexPage'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: IndexPage
  }
]

export default routes
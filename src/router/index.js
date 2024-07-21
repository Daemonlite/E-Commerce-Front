import { createRouter,createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Glasses from '../views/Glasses.vue'
import Fridges from '../views/Fridges.vue'
import Shoes from '../views/Shoes.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/Register.vue'


const routes = [
       {
        path:"/",
        component:DefaultLayout,
        children:[
            {
                path:"/",
                name:"landing",
                component:Home
            },
            {
                path:"/register",
                name:"register",
                component:Register
            },
            {
                path:"/login",
                name:"login",
                component:Login
            },
            {
              path:'/shoes',
              name:'shoes',
              component:Shoes
            },
            {
                path:"/cart",
                name:"cart",
                component:Cart
            },
            {
                path:"/product",
                name:"product-detail",
                component:ProductDetail
            },
            {
                path:"/glasses",
                name:"glasses",
                component:Glasses
            },
            {
                path:"/fridges",
                name:"fridges",
                component:Fridges
            },
            { path: '/:pathMatch(.*)*', component: NotFound }
            
        ]
       }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
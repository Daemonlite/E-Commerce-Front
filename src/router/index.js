import { createRouter,createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductDetail from '../views/ProductDetail.vue'



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
                path:"/cart",
                name:"cart",
                component:Cart
            },
            {
                path:"/product",
                name:"product-detail",
                component:ProductDetail
            }
            
        ]
       }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
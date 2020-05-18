import Vue from 'vue'
import Router from 'vue-router'
import Footer from "./components/footer.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/productList",
            name: "footer",
            component: Footer,
            children: [{
                    path: '/productList',
                    name: 'productList',
                    component: () => import("./views/product/productList.vue"),
                    meta: {
                        title: '产品列表',
                        keepAlive: true
                    }
                },
                
                {
                    path: '/class',
                    name: 'class',
                    component: () => import("./views/class/class.vue"),
                    meta: {
                        title: '全部分类',
                        keepAlive: true
                    }
                },
                {
                    path: '/car',
                    name: 'car',
                    component: () => import("./views/car/car.vue"),
                    meta: {
                        title: '购物车',
                        keepAlive: true
                    }
                },
                {
                    path: '/mallMine',
                    name: 'mallMine',
                    component: () => import("./views/mallMine/mallMine.vue"),
                    meta: {
                        title: '我的',
                        keepAlive: true
                    }
                }
            ]
        },
        {
            path: '/productDesc',
            name: 'productDesc',
            component: () => import("./views/product/productDesc.vue"),
            meta: {
                title: '产品详情'
            }
        }
    ]
})

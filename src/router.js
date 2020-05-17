import Vue from 'vue'
import Router from 'vue-router'
import Footer from "./components/footer.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "footer",
            component: Footer,
            children: [{
                    path: '/',
                    name: 'home',
                    component: () => import("./views/home/home.vue"),
                    meta: {
                        title: '首页',
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
                    path: '/mine',
                    name: 'mine',
                    component: () => import("./views/mine/mine.vue"),
                    meta: {
                        title: '我的',
                        keepAlive: true
                    }
                }
            ]
        },
        {
            path: '/desc',
            name: 'desc',
            component: () => import("./views/home/desc.vue"),
            meta: {
                title: '产品详情'
            }
        }
    ]
})

const router = new VueRouter({
    base: "rutas",
    routes:[{
        path: '/lists',
        component: Lists
    }]
});

const app = new Vue({
    router,
    el:'#app',
});
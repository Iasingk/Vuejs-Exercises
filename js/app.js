const router = new VueRouter({
    base: "rutas",
    routes:[
        {
            path: '/list_person',
            component: ListsPerson
        },
        {
            path:'/list_language',
            component: ListsPrograming
        }
    ]
});

const app = new Vue({
    router,
    el:'#app',
});
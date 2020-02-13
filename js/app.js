/*const Foo = { template: '<div>contenido de footer</div>' }
const Bar = { template: '<div>contenido de Barra de navegación</div>' }*/

/*const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
  
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  */

const Home = {
    template: '#homepage'
};
const About = {
    template: '#about'
};
const PageNotFound = {
    template: '#PageNotFound'
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
            path: '/about',
            redirect : '/about-us'
		},
		{
			path: '/about-us',
			component: About
        },
        {
            path: '*',
			component: PageNotFound
        }
	]
})

const app = new Vue({
    el:'#app',
    router,
    data:{
       message: 'Hello vue',
       sum : 3 + 6,
       value : 1,
       isVisible : true,
       people: ['Deivid', 'Alex', 'Yoyi', 'César', 'Chai'],
       content_html : "<h1> Prueba renderizado de contenido </h1>",
       src : '../imgs/descarga.png',
       alt : 'Logo vuejs',
       numero: 10,
       name: 'Iasí',
       textModal: 'Test',
       p_error: false,
       mp_error: false
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
        }
      },
    methods:{
          calculateSum( value1, value2){
              return value1 + value2;
          },
          incrementar(){
              this.numero++;
          },
          decrementar(){
              this.numero--;
          },
          greet(event){
              alert('Hello ' + this.name + ' !');
              if(event){
                  alert(event.target.tagName);
              }
          },
          say(message){
              alert(message + ' ' + this.name + ' !');
          }
      },
    watch:{
        numero:function(val){
            console.log('watch: ' + val);
        },
        textModal:function(val){
            console.log('watch: ' + val);
        }
      }
});
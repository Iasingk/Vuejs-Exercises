const app = new Vue({
    el:'#app',
    data:{
       message: 'Hello vue',
       sum : 3 + 6,
       value : 1,
       isVisible : true,
       people: ['Deivid', 'Alex', 'Yoyi', 'César', 'Chai'],
       content_html : "<h1> Prueba renderizado de contenido </h1>",
       src : '../imgs/descarga.png',
       alt : 'Logo vuejs'
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
          }
      }
});
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
       alt : 'Logo vuejs',
       numero: 10,
       name: 'Iasí',
       textModal: 'Test'
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
      }
});
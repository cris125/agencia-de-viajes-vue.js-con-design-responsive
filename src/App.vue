<template>
 
 <header>
    
        <a href="" class="header" >
            <div class="logo">
                <button  v-on:click="loadHome"  class="nav-link"><img src="@/assets/ViajanTop.jpg" alt="logo Viajeantop"></button>  
            </div>

            
            <nav class="Grande Mediano">
                <button v-if="!is_auth" v-on:click="loadaerolinea" >Aerolineas</button>
                <button v-if="!is_auth">Actividades</button>
                <button v-if="!is_auth">Hoteles</button>
                <button v-if="!is_auth">Mas</button>

                <button v-if="is_auth" v-on:click="loadreserva"  >Reservas</button>

                <button v-if="is_auth" v-on:click="loadcasa" > Inicio </button>
                <button v-if="is_auth" v-on:click="loadAccount" > Cuenta </button>
               
                <button v-if="is_auth" v-on:click="logOut" class="IN"> Cerrar Sesión </button>
                <button v-if="!is_auth" v-on:click="loadLogIn" class="IN"> Iniciar Sesión </button>
                
                
                
            </nav>
            <nav class="pequeno">
            
            <ul class=" menu">
                <li><a  v-if="!is_auth" v-on:click="loadaerolinea">Aerolineas</a></li>
                <li><a v-if="!is_auth">Actividades</a></li>
                <li><a v-if="!is_auth">Hoteles</a></li>
                <li><a v-if="!is_auth">Mas</a></li>
                <li><a v-if="is_auth" v-on:click="loadreserva" >Reservas</a></li>
                <li><a v-if="!is_auth" v-on:click="loadLogIn" class="IN"> Iniciar Sesión </a></li>
                <li><a v-if="is_auth" v-on:click="loadcasa" > Inicio </a></li>
                <li><a v-if="is_auth" v-on:click="loadAccount"> Cuenta </a></li>
                <li> <a v-if="is_auth" v-on:click="logOut" class="IN"> Cerrar Sesión </a></li>
            </ul>
                
            
            </nav>  
        </a>
           
        
        </header>
  <div class="main-component">
  <router-view
    v-on:completedaerolinea="completedaerolinea"
    v-on:completedhome="completedhome"
    v-on:completedLogIn="completedLogIn"
    v-on:completedSignUp="completedSignUp"
    v-on:logOut="logOut"
  >
  </router-view>
  </div>
  
  
  </template>
<script>




export default {
name: 'App',
data: function(){
return{
is_auth: false ,
is_auth2: false 
}
},
components: {
},
methods:{
verifyAuth: function() {
this.is_auth2 = localStorage.getItem("isAuth2") || false;
this.is_auth = localStorage.getItem("isAuth") || false;
if (this.is_auth2 == false)
this.$router.push({ name: "home" });





},

loadreserva: function () {
this.$router.push({ name: "reserva" });
},

loadAccount: function () {
this.$router.push({ name: "account" });
},

loadLogIn: function(){
localStorage.setItem("isAuth2", true);
this.$router.push({name: "logIn"})
this.verifyAuth();
},

loadaerolinea: function(){
localStorage.setItem("isAuth2", true);
this.$router.push({name: "aerolinea"})
this.verifyAuth();
},

loadHome: function(){
localStorage.clear();
this.$router.push({name: "home"})
},

loadcasa: function() {
this.$router.push({ name: "casa" });
},



completedLogIn: function(data) {
localStorage.setItem("isAuth", true);
localStorage.setItem("username", data.username);
localStorage.setItem("token_access", data.token_access);
localStorage.setItem("token_refresh", data.token_refresh);
alert("Autenticación Exitosa");

this.$router.push({ name: "casa" });
this.verifyAuth();
},
completedaerolinea: function(data) {
localStorage.setItem("isAuth", true);
localStorage.setItem("username", data.username);
localStorage.setItem("token_access", data.token_access);
localStorage.setItem("token_refresh", data.token_refresh);
alert("Autenticación Exitosa");

this.$router.push({ name: "casa" });
this.verifyAuth();},

completedSignUp: function(data) {
alert("Registro Exitoso");
this.completedLogIn(data);
}
},
created: function(){
    this.verifyAuth()
}

}



</script>

<style>
body{
    background-image: url(@/assets/fondo2.png);
}

</style>
    
<template>
    <div class="logIn_user">
    <div class="container_logIn_user">
        <h2>Iniciar sesión</h2>
        <form v-on:submit.prevent="processLogInUser" >
            <input type="text" v-model="user.username" placeholder="Username">
            <br>
                <input type="password" v-model="user.password" placeholder="Password">
            <br>
        <button type="submit">Iniciar Sesion</button>
        </form>
    </div>
    <button class="creC" v-if="!is_auth" v-on:click="loadSignUp">Crear cuenta nueva</button>
    </div>
    <div class="main-component">
  
  </div>
  <div class="main-component">
  <router-view
  v-on:completedhome="completedhome"
  v-on:completedSignUp="completedSignUp"
  >
  </router-view>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
    name: "LogIn",
    data: function(){
    return {
    user: {
    username:"",
    password:""
    }
    }
    },

    methods: { 
    

    loadSignUp: function(){
   this.$router.push({name: "signUp"})
    },

    completedSignUp: function(data) {
    alert("Registro Exitoso");
    this.completedLogIn(data);
    },


    processLogInUser: function(){
    axios.post(
    "https://minticadv.herokuapp.com/login/",
    this.user,
    {headers: {}}
    )
    .then((result) => {
    let dataLogIn = {
    username: this.user.username,
    token_access: result.data.access,
    token_refresh: result.data.refresh,
    }
    this.$emit('completedLogIn', dataLogIn)


    })
    .catch((error) => {
    if (error.response.status == "401")
    alert("ERROR 401: Credenciales Incorrectas.");
    });
    }
    }

    }
</script>

<style>
    .logIn_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
 @media (width>900px){
    .container_logIn_user {
    margin :2em;
    width: 30%;
    height: 20em;
    background-color: rgb(255, 255, 255);
    border: 2px solid #87bc00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    }
 }
 @media (max-width:900px){
    .container_logIn_user {
    margin :2em;
    width: 60%;
    height: 20em;
    background-color: rgb(255, 255, 255);
    border: 2px solid #87bc00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    }
 }

 .logIn_user h2{
    font-size: 2em;
    color: #33943e;
    font-family: 'Lucida Sans Unicode';
    text-align:center;
    }
.logIn_user form{
    width: 80%;
}
.logIn_user input{
font-size: 1.5em;
font-family: 'Lucida Sans Unicode';
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px 0;
border: 1px solid #009817;
}
.logIn_user button{
font-size: 1.5em;
width: 100%;
height: 2em;    
color: #E5E7E9;
background: #066a1a;
margin: 5px 0;
}
.logIn_user button:hover{
color: #E5E7E9;
background: rgb(4, 79, 6);
border: 1px solid #283747;
}
.logIn_user .creC{
    width: 10em;
    height: 3em;    
    color: #ffffff;
    background-color: rgb(32, 134, 252);
    border: 2px solid #87bc00;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;

    
}
.logIn_user .creC:hover{
    background-color: rgb(83, 163, 255);
    border: none;
    color: rgb(254, 254, 254);
}

</style>
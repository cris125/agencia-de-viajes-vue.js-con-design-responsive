<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
        <h2>Hacer una reserva</h2>
        <form v-on:submit.prevent="processSignUp" >
            <input type="text" id="hola" v-model="user.ciudad" placeholder="ciudad">
            <br>
            <input type="text" id="hola" v-model="user.valor" placeholder="valor">
            <input type="date"  v-model="user.fecha" name="fecha">

            <button v-on:click="prosesarvalot" type="submit">Hacer reserva</button>
            
        </form>
            
        </div>
        
    </div>
    </template>
    
    <script>
    
        import axios from 'axios';
        export default {
        name: "reserva",
        data: function(){
        return {
            user: {
    lugar: "",
    valor: 0,
    fehca:" ",
    
    account: {
    lastChangeDate: (new Date()).toJSON().toString(),
    balance: 0,
    isActive: true
    }
    }
        }
        },
        methods: {
            processSignUp: function(){
        axios.post("https://minticadv.herokuapp.com/reserva/",
        this.user,
        {headers: {}}
        )
        .then((result) => {
        let dataSignUp = {
        fecha: this.user.fecha,
        token_access: result.data.access,
        token_refresh: result.data.refresh,
        }
        this.$emit('completedSignUp', dataSignUp)
        })
        .catch((error) => {
        console.log(error)
        alert("ERROR: Fallo en el registro."); });
            
    }}
    }
    </script>
    <style>
    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
    .container_signUp_user {
        font-family: 'Lucida Sans Unicode';
        margin: 80px 0px 100px 0px ;
        background-color: #ffffff;
        border: 2px solid #009817;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .signUp_user h2{
    
    font-size: 20px;
    color: #0a6c23;
    }
    .signUp_user form{
    width: 70%;
    
    }
    .signUp_user input{
    font-family: 'Lucida Sans Unicode';
    font-size: 20px;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #0f932e;
    }
    .signUp_user button{
    font-family: 'Lucida Sans Unicode';
    width: 100%;
    height: 40px;
    color: #eff3f7;
    background: #11650a;
    
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
    }
    .signUp_user button:hover{
    color: #E5E7E9;
    background: rgb(23, 110, 5);
    border: 1px solid #283747;
    }
    </style>
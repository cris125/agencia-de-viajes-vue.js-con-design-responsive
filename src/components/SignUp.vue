<template>
<div class="signUp_user">
    <div class="container_signUp_user">
    <h2>Registrarse</h2>
    <form v-on:submit.prevent="processSignUp" >
        <input type="text" v-model="user.username" placeholder="Username">
        <br>
            <input type="password" v-model="user.password" placeholder="Password">
        <br>
            <input type="text" v-model="user.name" placeholder="Name">
        <br>
        
            <input type="email" v-model="user.email" placeholder="Email">
        <br>
        

        <br>
        <button type="submit">Registrarse</button>
    </form>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
    name: "SignUp",
    data: function(){
    return {
        user: {
username: "",
password: "",
name: "",
email: "",
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
        axios.post("https://minticadv.herokuapp.com/user/",
        this.user,
        {headers: {}}
        )
        .then((result) => {
        let dataSignUp = {
        username: this.user.username,
        token_access: result.data.access,
        token_refresh: result.data.refresh,
        }
        this.$emit('completedSignUp', dataSignUp)
        })
        .catch((error) => {
        console.log(error)
        alert("ERROR: Fallo en el registro."); });
}
}
}
</script>
<style>
.signUp_user{
    display: flex;
    justify-content: center;
    align-items: center;
    }
@media (width>900px){
        .container_signUp_user {
    font-family: 'Lucida Sans Unicode';
    background-color: #ffffff;
    border: 2px solid #009817;
    border-radius: 10px;
    display: flex;
    width: 30% !important;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    }
 @media (max-width:900px){
        .container_signUp_user {
    font-family: 'Lucida Sans Unicode';
    background-color: #ffffff;
    border: 2px solid #009817;
    border-radius: 10px;
    display: flex;
    width: 75% !important;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
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
font-size: 1.3em;
font-family: 'Lucida Sans Unicode';
width: 100%;
height: 50px;
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
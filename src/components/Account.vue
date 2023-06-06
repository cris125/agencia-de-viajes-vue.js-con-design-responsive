<template>
    <div class="information">
    <h1>Información de su cuenta</h1>
    <h2>Nombre: <span>{{name}}</span></h2>
    <h2>Correo electrónico: <span>{{email}}</span></h2>
    <h2>Reservas activas: <span>{{reservas}}</span></h2>
    </div>
    </template>
    <script>
    import jwt_decode from "jwt-decode";
    import axios from 'axios';
    export default {
    name: "Account",
    data: function(){
    return {
    name: "",
    email: "",
    reservas: 0,
    
    }
    },
    methods: {
    getData: async function () {
    if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
    this.$emit('logOut');
    return;
    }
    await this.verifyToken();
    let token = localStorage.getItem("token_access");
    let userId = jwt_decode(token).user_id.toString();
    axios.get(`https://minticadv.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
    .then((result) => {
    this.name = result.data.name;
    this.email = result.data.email;
    this.reserva = result.data.reservas; 
    
    
    ;
    })
    .catch(() => {
        alert("ERROR 401: Credenciales Incorrectas.")
        this.$emit('logOut');
    });
},
    verifyToken: function () {
    return axios.post("https://minticadv.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
)
.then((result) => {
localStorage.setItem("token_access", result.data.access);
})
.catch(() => {
this.$emit('logOut');
});
}
},
created: async function(){
this.getData();
},
}
</script>
<style>
    .information{
    font-family: 'Lucida Sans Unicode';
    margin: 20px 200px 20px 200px ;
    background-color: #ffffff;
    border: 2px solid #009817;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
.information h1{
    margin-top: 50px;
    margin-right:200px ;
    font-size: 40px;
    color: #10a223;
}
.information h2{
    
font-size: 40px;
color: #283747;
}
.information span{
color: crimson;

}
</style>
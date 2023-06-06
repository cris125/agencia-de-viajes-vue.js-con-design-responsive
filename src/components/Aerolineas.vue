<template>
    <body>
    <div class="aerolinea">
    
    <h3 class="aa">Nuestras Aerolineas</h3>
    <div class="conteiner">
    <div class="a">   
    <h2>Nombre:<span>Lan</span></h2>
    <h2>No Aviones:<span>8</span></h2>
    </div>   
    <div class="b">    
    <h2>Nombre: <span>Wingo</span></h2>
    <h2>No Aviones:<span>7</span></h2>
    </div>
    <div class="c">    
    <h2>Nombre: <span>avianca</span></h2>
    <h2>No Aviones:<span>8</span></h2>
    </div>
    </div>
    </div>
        
    </body>
    </template>


    <script>
   
    import axios from 'axios';
    export default {
    name: "Aerolineas",
    data: function(){
    return {
    nombre: "no encontrado",
    num_aviones: "no encontrado",
    loaded: false,
    
    
    }
    },
    methods: {
    getData: function () {
    
    axios.get(`https://minticadv.herokuapp.com/aerolinea/`)
    .then((result) => {
    this.nombre = result.data.nombre;
    this.num_aviones = result.data.num_aviones;
   
    })
    .catch(() => {
        alert("no hay aerolineas encontradas")
    });
},
    
},
    created: async function(){
    this.getData();
},
}
</script>
<style>
body{
    margin: 0px;
}
.aerolinea{
background-color: rgb(251, 255, 254);
border: 2px solid #87bc00;
margin:100px 100px 100px 100px ;
display: flex;
flex-direction: column;
align-items: center;
}
.aerolinea .conteiner{
    display: flex;
}
.aerolinea .a,.b,.c{
        border: 2px solid #87bc00;
        background-image: url(@/assets/avion.jpg);
        background-size: 100% 100%;
        font-family:'Lucida Sans Unicode';
        font-size: 50px;
        background-color: rgb(65, 185, 65);
        border-radius: 5px;
        padding: 180px  0px 0px 0px ;
    
        align-items: center;
        margin: 10px 10px 50px 10px ;
        
    }
h3{ 
    font-family:'Lucida Sans Unicode';
    font-size: 35px;
    background: none;
    color: #87bc00;
}
h2{ 
    font-family:'Lucida Sans Unicode';
    margin:20px 20px 20px 20px;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: rgb(255, 254, 251);
    }
span{
    color: #e3efc4;
}
</style>
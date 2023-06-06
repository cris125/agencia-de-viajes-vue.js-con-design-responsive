<template>
    <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </header>
    <body>
        <section class="fondo">
            <h1>ViajanTop </h1>
            <div class="buscador">
                    <form class="aq">
                        <br class="brclass"><input type="text" id="fname" name="fname" placeholder="¿Donde quieres Viajar?" ><br>
                        <button href="" class="nav-link">Buscar</button>    
                    </form>
            </div>
        </section>
        <h2 class="TopLug">Top lugares mas buscados hoy </h2>
        <div class="top">
        <div href="" class="h5">
            <a href="" class="img"><img src="@/assets/cartagena.jpg" alt="">
            <p>cartagena de indias</p></a>
        </div>
        <div href="" class="h5">
            <a href="" class="img"><img src="@/assets/francia.jpg" alt="">
            <p>Paris Francia</p></a>
        </div>
        <div class="mas_opciones">
            <div href="" class="h7">
                <a href="" class="img"><img src="@/assets/cancun.jpg" alt="">
                <p>cancun mexico</p></a>
        </div>
        <a href="" class="m-opciones"><strong>Mas lugares</strong></a>
        </div>
    </div>
        <h2 class="OfertasQ">Ofertas que no pueden esperar</h2>
        <section class="ofertas">
            
            <a href="" class="h7">San Andres</a>
            <a href="" class="h8">Santa Marta</a>
            <a href="" class="h9">Ciudad de Mexico </a>
            <a href="" class="h10">Miami</a>
            <a href="" class="h11">Cali</a>
            
            
        </section>
        
        <footer class="OfertasExclusivas">
            <div class="text">
                <h3>
                    Ofertas exclusivas en tu email
                </h3>   
                <p>
                    Recibe de primera mano nuestras ofertas y beneficios exclusivos.
                </p>
    
            </div>
            <div class="form">
                <form>
                
                    <br><input type="text" id="mail" name="mail" placeholder="ingrese tu emal" ><br>   
                    <button>!Quiero recibirlas¡</button> 
                </form>
            </div>
            
        </footer>
        
        
    </body>
    
    
    </template>
<script>
export default {
name: 'home',
data: function(){
return{

}

},


mounted() {
    document.title = 'Viajantop home'
  },
components: {
},
methods:{}


}


</script>
<style>
 @media (width>900px){
    /*header*/
    *{
        text-decoration: none;
    }
    body{        
         margin:0em; 
          
    }
    .pequeno{
        display: none !important;
    }
    .logo button img{
        width:  20em !important;
        padding:0em ;
        
    }
    .logo{
        pointer-events: all;
        margin: 1em 0.5em 2em 0.5em;
    }
    .header{
        pointer-events: none; 
        display: flex !important;
        justify-content: space-between;  
        background-color: rgba(0, 0, 0, 0.644);
    }
    .Grande.Mediano {
        margin: auto 0.5em auto 1em;
        font-weight: 30;
        padding-left: 10%;
        
    }
    .Grande button{
        pointer-events: all;
        margin-left: 1em;
        font-size: 1.3em;
        width: auto;
        height: auto;
        color: aliceblue;
        background-color: rgba(255, 255, 255, 0);
        border: none;
    }
    .IN {
        color: rgb(137, 197, 131)!important;
        margin-left: 3em !important;
    }

    /*cuerpo*/


.fondo{
        display:grid;
        justify-content: center;
        align-content: center;
    }
 h1{ color:aliceblue;
        font-size: 5em;
        margin-block-end: -0.1em;
    }
.buscador button{
        font-size: 1.5em;
        color: #ffffff;
        border-radius: 60px;
        padding: 5px 70px 5px 70px;
        background-color: #41973e;
        margin-top: -1em;
    }

.buscador button:hover{
        color: rgb(64, 64, 65);
        background-color: #3b7d39;
    }
h1{ color:aliceblue;
    font-size: 4em;
    margin-top: 0.2em;
    margin-block-end: 0.2em;
    }
  
.aq{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
input{
    text-decoration: none;
    border: none;
    text-align: center;
    font-size: 2em;
    margin: 0px 0px 20px 0px;
    padding: 0px auto 0px auto; 
    }

    
h2.TopLug{
    font-family:Arial;
    font-size: 40px;
    margin:1em;
    }
    
        .top{
            font-family:Arial;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
        .top .h5{
            width: 50%;
            overflow: hidden;
            position:relative;
            object-fit: cover;
            object-position: 15% 100%;
            margin:1em;
            
            
        }
        .top .h5 img{
            width: 100%;
            height: 500px;
            object-fit: cover;
            object-position: center;
            
        }
        .top .h5 p{
            text-transform: capitalize; 
            font-weight: 700;
            font-size: 2em;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke: 0.5px black;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-100%);
        }
.top .mas_opciones{
            width: 50%;
            display:flex;
            flex-direction: column;
            color: #ffffff;
            justify-content: center;
            align-items: center;
            align-content: center;
            height: 500px;
            margin: 1.5em;
    }
    .top .mas_opciones .h7{
            width: 100%;
            height: 500px;
            overflow: hidden;
            position:relative;
            background-size: cover;
            background-position:center;
            background-repeat: no-repeat;
            
        }
    .top .mas_opciones .h7 img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        object-position: 15% 100%;
             
            
        }
    .top .mas_opciones .h7 p{
            text-transform: capitalize; 
            font-weight: 700;
            font-size: 2em;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke: 0.5px black;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-60%,-100%);
        }
    .top .m-opciones{
        text-decoration: none;
        text-transform: capitalize;
        color: #ffffff; 
        font-size: 1em;
        padding: 1em 4em ;
        margin: 0.2em;
        margin-block-end: -0.2em;
        background-color: rgb(219, 143, 0);
    }
    h2.OfertasQ{
    font-family:Arial;
    font-size: 30px;
    margin: 20px 0px 0px 50px;
    color: black;
     }
.ofertas {
    justify-content: space-between;
    display:flex;
    text-align: center;
    align-items: center;
    font-family:Arial;
    margin: 25px 50px 80px 40px; 
    }
section.ofertas{
    display: flex;
    width: 93%;
    height: 430px;
}
section.ofertas a{
    color: aliceblue;
    font-weight: 700;
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 08;
    transition: .5s ease;
    
}
section.ofertas a:hover{
    cursor: crosshair;
    width: 200px;
    opacity: 50;
    filter: contrast(120%);
}
    
.ofertas .h7,.h8,.h9,.h10,.h11{
    border: 0.5px solid rgba(218, 144, 33, 0.719);
    height: 430px;
    font-size: 25px;
}
.ofertas .h7 text{
    border: 0.5px solid rgba(218, 144, 33, 0.719);
    
        
}
    .ofertas .h7{
        background-image: url(@/assets/san\ andres.jpg);
        background-size: cover;
        background-position:right;
        background-repeat: no-repeat;
    }
    .ofertas .h8{
        background-image: url(@/assets/santamarta.jpg);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .ofertas .h9{
        background-image: url(@/assets/CIUDAD\ DE\ MEXICO2.jpg);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .ofertas .h10{
        background-image: url(@/assets/miami.jpeg);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .ofertas .h11{
        background-image: url(@/assets/cali.png);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    /*pie de pagina*/
    /*pie de pagina*/
    .OfertasExclusivas{
        display:flex;   
        background-color: rgb(223, 218, 211);
        align-items: Center;
        justify-content: center;
        align-content: center;
    }
    .OfertasExclusivas .text{ 
        margin :  1em;
        display: flex;
        flex-direction: column;
        font-family:Arial;
        
    }
    .OfertasExclusivas .text h3{
        font-size: 1.7em;
        color: green;
        margin-block-end: -1em;
    }
    .OfertasExclusivas .text p{
        font-size: 1.4em;
        color:rgb(129, 129, 128);
    }

    .OfertasExclusivas .form {
        display:grid;
        text-align: center;
        margin:1em;
    }
    .OfertasExclusivas  form button{
        font-size: 1.5em;
        font-family:Arial;
        border-radius: 30px;
        padding: 8px 80px 8px 80px;
        background-color: #41973e;
        border: none;
        color: #ffffff;
    }
    .OfertasExclusivas  form button:hover{
        color: rgb(108, 108, 108);
    }
    .OfertasExclusivas form input{
        margin: 0px 20px 20px 20px;
        padding: 10px 50px 20px 50px;
        font-size: 20px;
        font-family:Arial;
        
    }
    #mail{
        border-radius: 30px;
        padding: 8px 80px 8px 80px;
        font-size: 1.8em;
    }
}    
 @media (max-width:900px){
/*header*/  
    body{
        color:aliceblue    

        }
    .Grande{
        display: none !important;;
        }
   
     
    .logo button img{
        width:  10em;
        
        
    }
    .logo{
        display: flex;
        justify-content: center;
        margin-top:1em ;
        margin-block-end: 1em;
    }
    .header{ 
        display: grid;
        background-color: rgba(0, 0, 0, 0.644);
    }
    .pequeño.img{
        padding:0em ;
        margin: 1em;
    }
    ul,li,a{
        text-decoration: none;
        list-style: none;
    }
    .pequeno{
        display: flex;
        justify-content: center;
    }
    .menu{
        display:flex;
        color: aliceblue;
    }
    .menu li{
        margin: -1em 0.6em 0em 0em;
        margin-left: -1.5;    
        text-overflow: ellipsis;
        font-size: 0.9em;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;     
    }
    /** Cuepoooo */
    h1{ color:aliceblue;
    font-size: 4em;
    margin-top: 0.2em;
    margin-block-end: 0.2em;
    }
    .fondo{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .buscador{
        padding:0px;
        display:grid;
        align-items: center;
        align-content: center;
    }
    .buscador button{
    font-size: 20px;
    color: #ffffff;
    border-radius: 60px;
    padding: 5px 70px 5px 70px;
    background-color: #41973e;
    }
    input{
    text-align: center;
    font-size: 1.5em;
    margin: 0px 0px 20px 0px;
    padding: 0px auto 0px auto;
    border-radius: 60px;
    }
    .buscador button:hover{
    color: rgb(64, 64, 65);
    background-color: #3b7d39;
    }
    
    .IN {
        color: rgb(137, 197, 131)!important;
    }
    h2.TopLug{
    
    font-family:Arial;
    font-size: 40px;
    margin:1em;
    margin-top: 2em;
    color: #000000;
    justify-content: center;
    }
    .top{
            font-family:Arial;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
        .top .h5{
            width: 80%;
            overflow: hidden;
            position:relative;
            object-fit: cover;
            object-position: 15% 100%;
            margin:0.1em;
            
            
        }
        .top .h5 img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: 15% 100%;
            
        }
        .top .h5 p{
            text-transform: capitalize; 
            font-weight: 700;
            font-size: 2em;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke: 0.5px black;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-100%);
        }
.top .mas_opciones{
            width: 100%;
            display:flex;
            flex-direction: column;
            color: #ffffff;
            justify-content: center;
            align-items: center;
            align-content: center;
            height: 200px;
            margin: 1.5em;
    }
    .top .mas_opciones .h7{
            width: 80%;
            height: 200px;
            overflow: hidden;
            position:relative;
            background-size: cover;
            background-position:center;
            background-repeat: no-repeat;
            
        }
    .top .mas_opciones .h7 img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        object-position: 15% 100%;
             
            
        }
    .top .mas_opciones .h7 p{
            text-transform: capitalize; 
            font-weight: 700;
            font-size: 2em;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke: 0.5px black;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-100%);
        }
    .top .m-opciones{
        text-decoration: none;
        text-transform: capitalize;
        color: #ffffff; 
        font-size: 1em;
        padding: 1em 4em ;
        margin: 0.2em;
        margin-block-end: -0.2em;
        background-color: rgb(219, 143, 0);
    }
    h2.OfertasQ{
    font-family:Arial;
    font-size: 30px;
    margin: 20px 0px 0px 50px;
    color: black;
     }
.ofertas {
    text-align: center;
    align-items: center;
    font-family:Arial;
    }
section.ofertas{
    display: flex;
    justify-content: center;
    margin: 1em;
    width: 93%;
    height: 430px;
}
section.ofertas a{
    color: aliceblue;
    font-weight: 700;
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 08;
    transition: .5s ease;
    
}
section.ofertas a:hover{
    cursor: crosshair;
    width: 200px;
    opacity: 50;
    filter: contrast(120%);
}
    
.ofertas .h7,.h8,.h9,.h10,.h11{
    border: 0.5px solid rgba(218, 144, 33, 0.719);
    height: 430px;
    font-size: 25px;
}
.ofertas .h7 text{
    border: 0.5px solid rgba(218, 144, 33, 0.719);
      
}
    .ofertas .h7{
        background-image: url(@/assets/san\ andres.jpg);
        background-size: cover;
        background-position:right;
        background-repeat: no-repeat;
    }
    .ofertas .h8{
        background-image: url(@/assets/santamarta.jpg);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .ofertas .h9{
        background-image: url(@/assets/CIUDAD\ DE\ MEXICO2.jpg);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .ofertas .h10,.h11{
        display: none;
    }
    /*pie de pagina*/
    .OfertasExclusivas{
        display:flex;   
        background-color: rgb(223, 218, 211);
        align-items: Center;
        justify-content: center;
        align-content: center;
    }
    .OfertasExclusivas .text{ 
        margin :  1em;
        display: flex;
        flex-direction: column;
        font-family:Arial;
        align-items: Center;
        justify-content: center;
        align-content: center;
    }
    .OfertasExclusivas .text h3{
        font-size: 1.1em;
        color: green;
    }
    .OfertasExclusivas .text p{
        display: none;
    }

    .OfertasExclusivas .form {
        display:grid;
        text-align: center;
        margin:0.5em;
    }
    .OfertasExclusivas  form button{
        font-size: 1em;
        font-family:Arial;
        border-radius: 30px;
        padding: 8px 20px 8px 30px;
        background-color: #41973e;
        border: none;
        color: #ffffff;
    }
    .OfertasExclusivas  form button:hover{
        color: rgb(108, 108, 108);
    }
    .OfertasExclusivas form input{
        font-size: 1em;
        font-family:Arial;
        
    }
 }

</style>
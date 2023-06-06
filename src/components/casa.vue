<template>
    <div class="greetings">
    <h1>¡Bienvenido-<span> {{username}} </span>!</h1>
    </div>
    
    </template>
    <script>

export default {
name: "Home",
data: function(){
return {
username: localStorage.getItem('username') || "none"
}
}
}
</script>
<style>
    .greetings h1{ 
    border-radius: 10px;
    border: 2px solid #12b939;
    background-color: aliceblue;
    margin: 100px 250px 0px 250px;
    padding: 10px 10px 10px 10px ;
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: #136118;
    }
    .greetings span{
    color: rgb(42, 160, 56);
    
    }
    </style>
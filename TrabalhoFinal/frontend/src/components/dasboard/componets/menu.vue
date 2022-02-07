<template>
    <div class='corpo'>
        <header class='imagem'>
            <img src="../../../..//imgs/logo2.svg" max-widht="150px"  alt="logo">
    
        </header>   
        <nav id='menu'>
            <label id='titulo'>Menu</label>
            <ul id="nav">
                <li><router-link to='/home'><i class="bi bi-house"></i> Home</router-link></li>
                <li><router-link to='/reservar'><i class="bi bi-pencil-square"></i> Reservar</router-link></li>
                <li><router-link to='/consultar'> <i class="bi bi-search"></i> Consultar</router-link></li>
                <li><router-link to='/historico'><i class="bi bi-card-list"></i> Historico</router-link></li>
                
            </ul>
        </nav>
        <footer id='logout'>
            <i class="bi bi-person-check"></i> RafaelSurfce <br>
             <li><i class="bi bi-arrow-bar-left"></i> <router-link to='/' > logout</router-link></li>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Menu'
    
}
</script>


<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
}

.imagem img {
    justify-content: center;
    margin: auto;
    margin-top: 50px;
    background-color: #422E26;
    height: 100px;
    width: 150px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

.corpo {
    background-color: #422E26;
    height: 100vh;
    width: 10%;
    display: table;
    flex-direction: column;
    float: left;
}

#titulo{
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    border-top: 2px solid rgb(190, 190, 190);
    color: white;
    padding-left: 70px;
    padding-right: 70px;
}
#menu {
    text-align: center;
    margin-top: 30px;
    display: table;
    top: 35%;
}

#menu ul{
    border-bottom: 1px solid #bdb8d7;
    padding: 0px;
    list-style: none;
}


#menu li a{
    text-decoration: none;
    background-color: #422E26;
    display: flex;
    padding-left: 50px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    color: rgb(190, 190, 190);
    text-decoration: none;
    align-items: center;
    border-top: 1px solid rgb(190, 190, 190);
    transition: all ease 0.5s;
}

#menu li a:hover{
    text-decoration: none;
    background-color: #ffffff;
    display: flex;
    font-family: 'Roboto', sans-serif;
    color: #362720;
    padding-left: 40px;
    border-top: 1px solid #362720;
    border-bottom: 1px solid #362720;
    border-bottom: 1px solid rgba(0,0,0,0.05);   
}


#logout {
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    color: rgb(190, 190, 190);
    text-align: center;
    margin-top: 70px;

    
}
#logout li{
     text-decoration: none;
     background-color: #422E26;
     display: flex;
     padding-left: 50px;
     font-family: 'Josefin Sans', sans-serif;
     color: rgb(190, 190, 190);
     transition: all ease 0.5s;
 }



</style>
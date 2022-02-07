<template>
        <div id="logar" class="col-12 row"> <!-- div branca -->
           <header class='titulo'>
           LOGIN
           </header>
           <form @submit="entrar(e)">
           <div class='' id="divinput"><!-- inputs -->
            <div>
              <i class="material-icons">person</i>
             <input type="text" id="user" v-model="user_input">
            </div>
            <div class="password">
              <i class="material-icons">key</i>
             <input type="password" id="password" v-model="password_input">
            </div>
           </div>
           <div class='text-danger' id='result' v-show="resultado">
           Usuário ou senha incorreta, ou inexistente
           </div>
           <div class="" id="buttons">
             <button id="btnentrar" type="submit">Entrar</button> 
           </div>
           </form>
           <a> <router-link to='/cadastro'> Cadastre-se </router-link> </a>
     
       </div>
</template>


<script>

export default {
  name: 'login',
  components: {},
  data(){
    return {
      resultado: null,
      user_input: '',
      password_input: '',

    }
  },
  methods: {
    cadastro(){
      //rota cadastro
    },
    async entrar(e){
      e.preventDefault();


      const data = {
        password: this.password_input,
        user: this.user_input,
      }
      const dataJson = JSON.stringify(data)
      const pergunta = await fetch('http://localhost:2222/login', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        query: dataJson
      });


      const resposta = await resposta.JSON();


      console.log(dataJson)

      if(resposta === "Usuário ou senhas incorreta, ou inexistente"){
       this.resultado = true;
      }
      else{
        this.resultado = false;
      }


      this.user_input = '';
      this.password_input = '';

    
    }
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}


#logar {
    height: 350px;
    width: 335px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 10px;
    margin: auto;

  }

  .titulo{
    font-size: 35px;
    border-radius: 10px 10px 0px 0px;
    height: 48px;
    background-color: #422E26;
    color:#ffffff;
    font-weight: bold;
  }
    

i {
  font-size: 24px;
}

#user, #password {
  height: 40px;
  width: 280px;
  background-color: #DCDCDC;
  border: none;
  outline: none; 
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
}


#divinput {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
}


#result {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  color: #8585ad;          
}



#buttons button a{
  text-decoration: none;
  border: none;
  margin: 0 2px;
  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #422E26;
  height: 30px;
  width: 100px;
  font-size: 20px;
  border-radius: 10px;
  
}
#buttons button a:hover{
  text-decoration: none;
  border-color: #422E26;
  font-family: 'Roboto', sans-serif;
  color: #422E26;
  background-color: #ffffff;
  height: 30px;
  width: 300px;
  font-size: 20px;
  border: solid 1px;
  
}

</style>
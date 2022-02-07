<template>
        <div id='cadastro'>
            <h2>CADASTRO</h2>
            <hr>
              <form @submit="cadastrar(e)">
                <div id='pessoal'>
                    <label for="">Nome:</label><br> 
                    <input type="text" id='nome' v-model="nome_input">
                    <br>
                    <label for="">Data de Nascimento:</label><br>
                    <input type="date" id='data' v-model="data_input"><br>

                    <label>CPF:*</label><br>
                    <input type="text" id='cpf' name='cpf' maxlength="14" v-model="cpf_input"><br>
                    

                    <label for="">Telefone/Celular: </label><br>
                    <input type="text" id='telefone' name='telefone' v-model="telefone_input"><br>

                    <label for="">E-mail: </label><br>
                    <input type="text" id='email' name='email' v-model="email_input"><br>
                    
                </div>

                 

                <div id='login'>
                    <label for="">Nome de Usuário:*</label><br>
                    <input type="text" id='username' name='username' v-model="username_input"><br>
                    <label for="">Senha:* </label><br> 
                    <input type="Password" id='password1' name='password' v-model="password_input">
                    <br>
                    <label for="">Confirme sua senha:* </label><br> 
                    <input type="Password" id='password2' name='password' v-model="password2_input">
                    <br>
                </div>
              <div id='result' class='text-danger'>
                {{ resultado }}
              </div>
                
            <div id='buttons'>
                <button id='cadastrar' type="submit"> Cadastrar </button>
                <button id='sair'> <router-link to='/' > Sair </router-link></button>
            </div>
            </form>


        </div>

    
</template>


<script>


export default {
  name: 'cadastro',
  components:{


  },

  data(){
    return{
      nome_input: '',
      data_input: '',
      cpf_input: '',
      resultado: '',
      telefone_input: '',
      email_input: '',
      username_input: '',
      password_input: '',
      password2_input: '',
    }
    },
  methods: {
    exit(){
      //rota login
    },
    async cadastrar(e){

      e.preventDefault();

      const data = {
        name: this.nome_input,
        dataNascimento: this.data_input,
        cpf: this.cpf_input,
        telefone: this.telefone_input,
        email: this.email,
        username: this.username_input,
        password: this.password_input,
        password2: this.password2_input,
      }

      const dataJson = JSON.stringify(data)
      console.log(dataJson);
      const pergunta = await fetch("http://localhost:2222/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });


      const res = await resposta.JSON();
      console.log(res)


      this.resultado = `${resposta}`

      


       this.nome_input = '';
       this.data_input = '';
       this.cpf_input = '';
       this.telefone_input = '';
       this.email = '';
       this.username_input = '';
       this.password_input = '';
       this.password2_input = '';

      }

    },
  }
    

</script>


<style>

#cadastro{
  font-family: 'Roboto', sans-serif;
  background-color: white;
  margin: auto;
  height: 500px;
  width: 350px;
  display: table;
  border-radius: 10px 10px 10px 10px;
}

h2 {
  text-align: center;
  font-family:'Roboto', sans-serif;
  background-color: #422E26;
  color: white;
}

#pessoal {
  position: relative;
  width: 356px;;
  margin: 0 auto;
  border: solid white;
  
}
#pessoal label{
  font-size: 15px;
  font-family: 'Roboto', sans-serif;

}
#pessoal input{
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #DCDCDC;
  border: none;
  height: 30px;
  width: 260px;
  margin: auto; 
}
#pessoal input#nome{
  height: 30px;
  width: 350px;
   
}
#pessoal input#data{
  width: 170px;
   
}
#login{
  position: relative;
  margin: 0 auto;
  margin-top: 2%;
  border: solid white;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
}

#login input{

  border: none;
  width: 200px;
  height: 30px;
  background-color: #DCDCDC;
}

#result {
  display:flex;
  justify-content: center;
  font-size: 10px;
  font-family: 'Roboto', sans-serif;          
}

#buttons{
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
  margin: 40px 0px 10px 0px;
}

#buttons button{
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
#buttons button:hover{
  border-color: #422E26;
  font-family: 'Roboto', sans-serif;
  color: #422E26;
  background-color: #ffffff;
  height: 30px;
  width: 100px;
  font-size: 20px;
  
}




</style>
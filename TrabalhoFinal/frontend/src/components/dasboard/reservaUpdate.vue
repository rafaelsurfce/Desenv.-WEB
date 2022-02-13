<template>
    <div>
    <Menu/>
    <Cabecalho :apresentacao="apresentacao"/>
    <div>
        <div id='main'>
            <div id="pages">
                        <form method="POST" @submit="atualizar">
                            <div class='' id='inforCli'>

                                <label for="">Cliente:*</label> <input type="text" id='cliente' v-model="cliente_input" placeholder="Nome do Cliente"><br>
                                <label for="">CPF:*</label> <input type="text"  id='cpf' v-model="cpf_input" placeholder="000.000.000-00">
                                <label for="">RG:*</label> <input type="text"  id='rg' v-model="rg_input" placeholder="0000000000-0"> <br>
                                <label for="">Telefone:</label> <input type="text" id='telefone' v-model="telefone_input" placeholder="(XX) 0-0000-0000">
                                <label for="">Endereço:</label> <input type="text" id='endereco' v-model="endereco_input" placeholder="">
                                <br>
                            

                                <label for="">Mesa:*</label> <input type="number" id='mesa' v-model="mesa_input" placeholder="000">
                                <label for="">Cadeiras:*</label> <input type="number" id='cadeiras' min="1" max='6' v-model="cadeiras_input" placeholder="00"> <br>
                                <label for="">Data:*</label> <input v-model="data_input" id='data' type="date">
                                <label for="" >Hora Inicial:*</label><input type="number" id='horainicial' min="11" max='23' maxlength="2" v-model="horaInicial_input" placeholder="00">

                                <label for="">Hora Final:*</label><input type="number"  id='horaFinal' min="11" max='23' v-model="horaFinal_input" placeholder="00" >

                                <br>
                                <div class="font-weight-bold text-danger" >
                                   
                                    <center><p class="fw-bold text-dark">  {{ resultado }} </p></center>
                                </div>

                                <center><button id='btnReservar' type="submit"> Atualizar </button></center>
                            </div> 
                        </form>
            </div>
        </div>

        

    </div>
</div>
  
</template>

<script>
    import Menu from './componets/menu.vue'
    import Cabecalho from './componets/cabecalho.vue'
    import axios from "../../../store/index"


    export default {
        name: 'reservaUpdate',
        components: {
            Menu,
            Cabecalho
        },
        data(){
            return{
                apresentacao: 'Atualizar',
                id: this.$route.params.id,
                resultado: null,
                cliente_input: null,
                cpf_input: null,
                rg_input: null,
                telefone_input: null,
                endereco_input: null,
                mesa_input: null,
                cadeiras_input: null,
                data_input: null,
                horaInicial_input: null,
                horaFinal_input: null,
                reserva: {}  

            }
        },
        mounted(){
            this.getReservas();
        },
        methods: {
            async getReservas(){
                try {
                    const resposta =  await axios.get('/consultar');
                    const {reservas} = resposta.data;
                    for (let reserva in reservas){
                        
                        if(String(reservas[reserva].id) === this.id){
                            this.reserva = reservas[reserva];
                            break
                        }
                        else{
                            continue
                        }
                    }
                } catch (error) {console.log(error)}
                    this.cliente_input = this.reserva.cliente;
                    this.cpf_input = this.reserva.cpf;
                    this.rg_input = this.reserva.rg;
                    this.telefone_input = this.reserva.telefone;
                    this.endereco_input = this.reserva.endereco;
                    this.mesa_input = this.reserva.mesa;
                    this.cadeiras_input = this.reserva.cadeiras;
                    this.data_input = this.reserva.data;
                    this.horaInicial_input = this.reserva.horaInicial;
                    this.horaFinal_input = this.reserva.horaFinal;
            },
            async atualizar(e){
                e.preventDefault(e);
                try {
                    const data = {
                        cliente: this.cliente_input,
                        cpf: this.cpf_input,
                        rg: this.rg_input,
                        telefone: this.telefone_input,
                        endereco: this.endereco_input,
                        mesa: this.mesa_input,
                        cadeiras: this.cadeiras_input,
                        data: this.data_input,
                        horaInicial: this.horaInicial_input,
                        horaFinal: this.horaFinal_input,
                    }
                    const pergunta = await axios.put(`/consultar/${this.$route.params.id}`, data)
                    const {resultado} = pergunta.data;
                    console.log(resultado)
                    this.resultado = resultado;
                    this.cliente_input = null;
                    this.cpf_input = null;
                    this.rg_input = null;
                    this.telefone_input = null;
                    this.endereco_input = null;
                    this.mesa_input = null;
                    this.cadeiras_input = null;
                    this.data_input = null;
                    this.horaInicial_input = null;
                    this.horaFinal_input = null;
                } catch (error) {console.log(error)}
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
        
    }

    #main {
    height: 100vh;
    width: 100vw;
    }


    #pages {
        background-color: rgb(204, 204, 204);
        width: 86.06%;
        float: right;
        min-height: 93.4%;
    }


    #inforCli {
        font-family: 'Roboto', sans-serif;;
    }

    input {
        font-family: 'Roboto', sans-serif;
        background-color: aliceblue;
        border:  solid 1px;
        border-color: rgb(92, 92, 92);
        height: 30px;
        font-size: 25px;
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        
    }
    #cliente{
        width: 70%;
    }
    #endereco {
        width: 26.8%;
    }

    #inforCli label{
        font-size: 15px;
        text-align: right;
        display: inline-block;
        padding: 15px;
        padding-right: 10px;
        width: 90px;
        font-family: 'Roboto', sans-serif;
    }

    #btnReservar{
        width: 120px;
        border: solid;
        border-color: #422E26;
        background-color: #422E26;
        font-family: 'Roboto', sans-serif;
        color: white;
        border-radius: 10px;
        
    }

    #btnReservar:hover {
        width: 120px;
        border: solid;
        border-color: #422E26;
        background-color: #ffffff;
        font-family: 'Roboto', sans-serif;
        color: #422E26;
        border-radius: 10px;

    }

</style>
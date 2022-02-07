<template>
<div>
    <Menu/>
    <Cabecalho :apresentacao="apresentacao"/>
    <pages>
        <div id='main'>
            <div id="pages">
                        <form>
                            <div  class='form-group' id='inforCli' @submit="reservar(args)">

                                <label for="">Cliente:*</label> <input type="text" id='cliente' v-model="cliente_input" placeholder="Nome do Cliente"><br>
                                <label for="">CPF:*</label> <input type="text"  id='cpf' v-model="cpf_input" placeholder="000.000.000-00">
                                <label for="">RG:*</label> <input type="text"  id='rg' v-model="rg_input" placeholder="0000000000-0"> <br>
                                <label for="">Telefone:</label> <input type="text" id='telefone' v-model="telefone_input" placeholder="(XX) 0-0000-0000">
                                <label for="">Endereço:</label> <input type="text" id='endereco' v-model="endereco_input" placeholder="">
                                <br>
                            

                                <label for="">Mesa:*</label> <input type="text" id='mesa' v-model="mesa_input" placeholder="000">
                                <label for="">Cadeiras:*</label> <input type="number" id='cadeiras' min="1" max='6' v-model="cadeiras_input" placeholder="00"> <br>
                                <label for="">Data:*</label> <input v-model="data_input" id='data' type="date">
                                <label for="" >Hora Inicial:*</label><input type="number" id='horainicial' min="11" max='23' maxlength="2" v-model="horaInicial_input" placeholder="00">

                                <label for="">Hora Final:*</label><input type="number"  id='horaFinal' min="11" max='23' v-model="horaFinal_input" placeholder="00" >

                                <br>
                                <div class="font-weight-bold text-danger" >
                                    - Campos marcados com * devem ser obrigatorios; <br>
                                    - O tanto de mesas disponiveis é ilimitado no sistema; <br>
                                    - O cliente pode escolher no máximo até 6 cadeiras; <br>
                                    - Se caso uma mesa estiver reservada em um intervalo de horario o sistema deve avisar <br>
                                    ao clicar no botão reservar; <br>
                                    - O limite de horarios para escolha da reserva é de 11 horas até as 23 horas 
                                    <center><p class="fw-bold text-dark">  {{ resultado }} </p></center>
                                </div>

                                <center><button id='btnReservar' type="submit"> Reservar </button></center>
                            </div> 
                        </form>
            </div>
        </div>

        

    </pages>
</div>

    
</template>



<script>

    import Menu from './componets/menu.vue'
    import Cabecalho from './componets/cabecalho.vue'

    export default {
        name: 'reservar',
        components: {
            Menu,
            Cabecalho
        },
        data(){
            return{
                apresentacao: 'Reservar',
                cliente_input: '',
                cpf_input: '',
                rg_input: '',
                telefone_input: '',
                endereco_input: '',
                mesa_input: '',
                cadeiras_input: '',
                data_input: '',
                horaInicial_input: '',
                horaFinal_input: '',
                resultado: ''
            }
            },
        methods: {
            async reservar(args){

                args.preventDefault();

                const data = {
                
                    cliente: this.cliente_input,
                    cpf: this.cpf_input,
                    rg: this.rg_input,
                    telefone: this.telefone_input,
                    endereco: this.endereco_input,
                    mesa: this.mesa_input,
                    cadeiras: this.cadeiras_input,
                    data: this.data_input,
                    horaIncial: this.horaInicial_input,
                    horaFinal: this.horaFinal_input,
               
                }


                const dataJson = JSON.stringify(data)
                console.log(dataJson);
                const pergunta = await fetch("http://localhost:2222/reservar", {
                    method: "POST",
                    headers: { "Content-Type": "aplication/json" },
                    body: dataJson
                })


                    //const resposta = await resposta.JSON();


                
                this.resultado=`${resposta}`



                this.cliente_input = '';
                this.cpf_input = '';
                this.rg_input = '';
                this.telefone_input = '';
                this.endereco_input = '';
                this.mesa_input = '';
                this.cadeiras_input = '';
                this.data_input = '';
                this.horaInicial_input = '';
                this.horaFinal_input = '';
                
            }
        }
        
    }
</script>


<style scoped>
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
<template>
<div>
    <Menu/>
    <Cabecalho :apresentacao="apresentacao"/>
    <pages>

        <div id='main'>
            <div id="pages">
                <label for=''>Pesquisar: </label><input type='text' placeholder="id">
                <center>
                    <table class='table table-bordered table-hover text-center table-sm w-75 t-3'>
                        <thead class='table table-dark' id='consultCabecalho'>
                            <tr>
                                <th>Usuário</th>
                                <th>Reserva</th>
                                <th>ação</th>
                                <th>Horario/Data</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(acao, index) in acoes" v-bind:key="index">
                                <td> {{ acao.usuario }}</td>
                                <td>{{ acao.id }}</td>
                                <td>{{ acao.acao }}</td>
                                <td>{{ acao.dataHora }}</td>
                                <td>{{ acao.icon }}</td>
                                
                            </tr>
                            
                        </tbody>
                    
                    </table>
                </center>

            </div>
        </div>

    </pages>
</div>

    
</template>



<script>

import Menu from './componets/menu.vue'
import Cabecalho from './componets/cabecalho.vue'

export default {
    name: 'Historico',
    data(){
        return{
            apresentacao: 'Historico',
            acoes: [
                {usuario: 'RafaelSurfce',
                id: '0202230125059',
                acao: 'Exclusao',
                dataHora: '15:00 31/01/2022',
                icon: '<i class="bi bi-x-lg"></i>'}
                ]
            
        }},
    components: {
        Menu,
        Cabecalho
        
    },
    methods: {
        listar(){
            // select banco
            /*if(){
                this.icon = '<i class="bi bi-x-lg Danger"></i>';
            }*/

                /*else if(){
                this.icon = '<i class="bi bi-pencil-fill"></i>';
            }*/
            /*else if(){
                this.icon = '<i class="bi bi-pencil-fill"></i>';

            }*/
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




* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
}



table {
    margin-top: 10px;
    width: 1000px; /* 140px * 5 column + 16px scrollbar width */
}

tbody, thead tr { display: block;
 }

tbody {
    height: 470px;
    overflow-y: auto;
    overflow-x: hidden;
}

thead th{
    width: 188px;
}
tbody td{
    width: 350px;
}

tbody tr {
    width: 200px;
}


thead th:last-child {
    width: 165px; /* 140px + 16px scrollbar width */
}

label {
    margin: 10px 10px 0px 150px;
}

</style>
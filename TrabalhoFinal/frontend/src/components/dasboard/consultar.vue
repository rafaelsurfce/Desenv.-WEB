<template>
<div>
    <Menu/>
    <Cabecalho :apresentacao="apresentacao"/>
    <pages>
        <div class='' id='main'>

            <div id='pages'>
            <div>
                <label for=''>Pesquisar: </label><input type='text' placeholder="id">
                    <center>
                <table class='table table-bordered table-hover text-center table-sm w-75 t-3'>
                <thead class='table table-dark' id='consultCabecalho'>
                <tr>
                    <th>ID</th>
                    <th>Nome do Cliente</th>
                    <th>Numero da mesa</th>
                    <th>Cadeiras</th>
                    <th>Data</th>
                    <th>Hora inicial</th>
                    <th>Hora Final</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="reserva in reservas" :key="reserva.id">
                    <td>{{ reserva.id }}</td>
                    <td>{{ reserva.cliente }}</td>
                    <td>{{ reserva.mesa }}</td>
                    <td>{{ reserva.cadeiras }}</td>
                    <td>{{ reserva.data }}</td>
                    <td>{{ reserva.horaInicial }}:00</td>
                    <td>{{ reserva.horaFinal }}:00</td>
                    <td><button class="btn btn-success btn-sm"><i class="bi bi-arrow-clockwise"></i></button> <button class="btn btn-danger btn-sm"><i class="bi bi-x-lg"></i></button></td>
                
                </tr>
        
                
                </tbody>
                
            </table>
            </center>
            </div>
            </div>
    
        </div>
        

    </pages>
</div>

    
</template>



<script>
    
    import Menu from './componets/menu.vue'
    import Cabecalho from './componets/cabecalho.vue'
   

    


    export default {
        name: 'Consultar',
        components: {
            Menu,
            Cabecalho
        },
        data(){
            return {
                apresentacao: 'Consultar',  
                reservas: null,   

                           
            }
        },
        methods:{

        async getReservas(){

            const resposta = await fetch('http://localhost:2222/consultar');

            const data = await resposta.json();

            this.reservas = data;
        },

        moutend() {
            this.getReservas();
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



table {
    margin-top: 10px;
    width: 1000px; /* 140px * 5 column + 16px scrollbar width */
}

tbody, thead tr { display: block;
 }

tbody {
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
}

thead th{
    width: 125px;
}
tbody td{
    width: 125px;
}

tbody tr {
    width: 200px;
}


thead th:last-child {
    width: 120px; /* 140px + 16px scrollbar width */
}

label {
    margin: 10px 10px 0px 150px;
}


</style>
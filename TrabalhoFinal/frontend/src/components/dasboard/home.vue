<template>
    <div>
        <Cabecalho :apresentacao="apresentacao"/>
        <Menu/>
        <pages>
            <div id="main">
                <div id="pages">
                    <div class='col align-self-center' >
                        <div class=''>

                        <div class='col-16 border'>
                            <span>Esse é o sistema de gerenciamento de alocação de reserva de mesas, aqui apresento um breve manual de cada função do menu.</span>
                        </div>
                        <div class='col-12 col-md-6 col-lg-12 border'>
                            <p class='font-weight-bold text-center'>Reservar</p>
                            <span> Nessa opção é possivel reservar uma mesa para um cliente, onde voce pode definir o inicio e fim da reserva. 
                                Para reservar é necessário informar alguns dados do cliente como: 
                                
                                        <li>Nome do cliente</li>
                                        <li>CPF</li>
                                        <li>Telefone</li>
                                
                            </span>
                                
                                       
                                
                                
                            
                                
                        </div>

                    
                        <div class='col-12 col-md-6 col-lg-12 border'>
                            <p class='text-center'>Consultar:</p>
                            <span> Essa opção oferece a possibilidade de visualizar reservas efetuadas, além de poder pesquisar uma reserva pelo ID.</span>

                        </div>

                        <div class='col-12 col-md-6 col-lg-5 border'>
                            <span> Além de consultar, é possivel modificar uma reserva existente, a partir do botão atualizar, que se encontra na penultima coluna da tabela. </span>

                        </div>
                        <div class='col-12 col-md-6 col-lg-6 border '>
                            <span> Sistema permite que você possa excluir uma reserva existente a partir do botão excluir na ultima coluna da tabela. Ressalta-se que após excluir não é possivel recuperar a reserva. </span>

                        </div>
                        <div class='col-12 col-md-6 col-lg-12 border'>
                            <p class='text-center'>Historico</p>
                            <span> Toda ação de reserva, atualização e exclusão será mostrada nessa opção, aqui as ações de todos os usuários são listadas </span>

                        </div>




                        </div>
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
    name: 'home',
    components: {
        Menu,
        Cabecalho,
    },
    data(){
        return {
            apresentacao: 'Bem Vindo'
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


</style>
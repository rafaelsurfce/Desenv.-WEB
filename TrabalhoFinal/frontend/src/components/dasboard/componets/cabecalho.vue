<template>
    <div class='' id='cabecalho'> {{ apresentacao }}</div> 
</template>



<script>
export default {
    name: 'Cabecalho',
    components: {},
    props: {
        apresentacao: String
    },
    data(){
        return{
        }
    },
    
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

#cabecalho{
    
    float: right;
    font-size: 30px;
    height: 40px;
    width: 86.06%;
    text-align: center;
    background-color: #422E26;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;

}
</style>
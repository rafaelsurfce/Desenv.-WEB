




 class Pokemon {
    constructor (id, name, pvMax = null, ataque = null, defesa = null, ataqueEspecial = null, defesaEspecial = null, velocidade = null, numeroDeEspecie = null, tipos = null, peso = null, altura = null, imagem=null){
        this.id = id;
        this.nome = name;
        this.pvMax = pvMax;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
        this.defesaEspecial = defesaEspecial;
        this.velocidade = velocidade;
        this.numeroDeEspecie = numeroDeEspecie;
        this.tipos = tipos;
        this.peso = peso;
        this.altura = altura;
        this.imagem = imagem;


        


        
    }
}

module.exports = Pokemon;
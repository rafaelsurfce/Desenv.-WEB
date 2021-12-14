




 class Pokemon {
    constructor (id, name, pvMax = null, ataque = null, defesa = null, ataqueEspecial = null, defesaEspecial = null, velocidade = null){
        this.id = id;
        this.nome = name;
        this.pvMax = pvMax;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
        this.defesaEspecial = defesaEspecial;
        this.velocidade = velocidade;
    }
}

module.exports = Pokemon;
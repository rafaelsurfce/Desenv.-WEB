Exercício Prático
O seu objetivo neste atividade é melhorar a Pokedex desenvolvida na lista anterior. Para isso vamos utilizar o framework Express.

Crie uma rota chamada /pokemons que ao ser acessada deve listar os pokemons de sua pokedex. Nesta tela apenas os seguintes atributos devem ser mostrados: - Nome - Númeo da espécie - Tipos (todos para aquels pokemons que possuem mais de um tipo)

Para cada pokemon listado, deve existir um link para uma rota chamada /pokemons/id, onde id é o id do pokemon

A rota pokemon/id deve mostrar mais detlhes do pokemon escolhido. Nesta página os seguintes atributos devem ser listados: - Nome - Número da espécios - Tipos - PvMax - Ataque - Defesa - Ataque Especial - Defesa Especial - Velocidade - Peso - Altura

A rota / deve redirecionar o usuário a lista de pokemons (/pokemons)

Extra [1 ponto]: Utilizar uma template engine, sugestão handlebars para evitar que o código HTML seja escrito dentro das funções JS.
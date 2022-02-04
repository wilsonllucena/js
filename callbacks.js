
//Callbacks são uma forma de passar uma função como argumento de outra função e executar essa função quando a outra função terminar de executar,
// ou seja, quando a função que passou a função como argumento terminar de executar.

function obterUsuario(callback){
    setTimeout((function(){
          return callback(null, {
                id: 1,
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
                numero: 61
            })
    }
    ), 3000);
}

function obterTelefone(idUser, callback){
    setTimeout((function(){
        return callback(null, {
            telefone: '9999-9999',
            ddd: 61
        })
    }), 2000);
}

function obterEndereco(idUser, callback){
    setTimeout((function(){
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 61
        })
    }), 2000);
}

function resolverUsuario(erro, usuario){
    if(erro){
        console.error('Erro ao obter usuario');
        return;
    }
    obterTelefone(usuario.id,  function(error1, telefone){
        if(error1){
            console.error('Erro ao obter telefone');
            return;
        }
        obterEndereco(usuario.id, function(error2, endereco){
            if(error2){
                console.error('Erro ao obter endereco');
                return;
            }
            console.log(`
                Nome: ${usuario.nome}
                Idade: ${usuario.idade}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereço: ${endereco.rua}, ${endereco.numero}
            `);
        });
    })
}
obterUsuario(resolverUsuario);
//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);

//console.log('Usuario: ', usuario);
//console.log('Telefone: ', telefone);
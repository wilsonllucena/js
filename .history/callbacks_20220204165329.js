function obterUsuario(callback){
    setTimeout((function(){
          return callback(null, {
                id: 1,
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
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

function obterEndereco(idUser){

}

function resolverUsuario(erro, usuario){
    if(erro){
        console.error('Erro ao obter usuario');
        return;
    }
    console.log('Usuario', usuario);
}
obterUsuario(resolverUsuario);
//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);

//console.log('Usuario: ', usuario);
//console.log('Telefone: ', telefone);
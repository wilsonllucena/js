function obterUsuario(){
    setTimeout((function(callback){
          return  callback(null, {
                id: 1,
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
            })
    }
    ), 3000);
}

function obterTelefone(idUser){
    setTimeout((function(){
        return {
            telefone: '9999-9999',
            ddd: 61
        }
    }), 2000);
}

function obterEndereco(idUser){

}

function resolverUsuario(erro, usuario){
    if(erro){
        console.log('Erro ao obter usuario', erro);
    }else{
        console.log('Usuario obtido com sucesso', usuario);
    }
}
obterUsuario(resolverUsuario);
const telefone = obterTelefone(usuario.id);
const endereco = obterEndereco(usuario.id);

console.log('Usuario: ', usuario);
//console.log('Telefone: ', telefone);
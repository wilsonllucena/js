// Promises é uma solução para os callbacks, que são muito verbosos e muito complexos.
function obterUsuario(callback){
    // Quando der erro, o reject é executado
    // Quando der sucesso, o resolve é executado
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
                numero: 61
            })
        }, 2000);
    });
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

obterUsuario(resolverUsuario);
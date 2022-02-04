// Promises é uma solução para os callbacks, que são muito verbosos e muito complexos.
function obterUsuario(){
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

function obterTelefone(idUser){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '9999-9999',
                ddd: 38
            })
        }, 2000);
    });
}

function obterEndereco(idUser, callback){
    setTimeout((function(){
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 61
        })
    }), 2000);
}

const usuario = obterUsuario();
// Para manipular o sucesso usamos o then
// Para manipular o erro usamos o catch

usuario
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                },
                telefone: result
            }
        });
    })
    .then(function(usuario){
        console.log('resultado:',usuario);
    })
    .catch(function(error){
        console.log('Deu ruim:', error);
    });
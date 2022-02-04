function obterUsuario(){
    setTimeout((function(){
          return  {
                id: 1,
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
            }
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

const usuario = obterUsuario()
const telefone = obterTelefone(usuario.id);
const endereco = obterEndereco(usuario.id);

console.log('Usuario: ', usuario);
console.log('Telefone: ', telefone);
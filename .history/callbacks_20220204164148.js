function obterUsuario(){
    setTimeout((function(){
          return  {
                nome: 'John',
                idade: 25,
                telefone: '9999-9999',
                endereco: 'Rua dos bobos',
            }
    }
    ), 3000);
}

function obterTelefone(idUser){

}

function obterEndereco(idUser){

}

const usuario = obterUsuario()
const telefone = obterTelefone(usuario.id);
const endereco = obterEndereco(usuario.id);
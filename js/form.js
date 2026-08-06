
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

// cria um novo objeto da classe contato com os valores do formulário
  let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

            return data;
  
}

function Enviar() {

    const button = document.getElementById("enviar");
    const form = document.getElementById("form");

    if (button && form) {
        button.addEventListener("click", function (event) {
            // essa função previne o comportamento padrão do botão de envio do formulário, que é recarregar a página
            event.preventDefault();

            // chama a função Post passando o formulário como argumento
            const novoContato = Post(form);

        if (novoContato && novoContato.nome.trim() !== "") {
                alert(`Obrigado sr(a) ${novoContato.nome}, os seus dados foram encaminhados com sucesso`);
                console.log(novoContato);
            } else {
                alert("Por favor, preencha o campo de nome.");
            }

   
    });
}
}

document.addEventListener("DOMContentLoaded", function () {
    Enviar();
});
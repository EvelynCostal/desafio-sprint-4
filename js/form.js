
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

function Enviar(el) {
    const button = document.getElementById("enviar");
    const form = document.getElementById("form");
    const checkbox = document.getElementById("termos");

    if (button && form) {
        button.addEventListener("click", function (event) {
            // Previne o recarregamento da página
            event.preventDefault();

            // 1. Valida se o checkbox existe e se está marcado
            if (!checkbox || !checkbox.checked) {
                alert("Por favor, aceite os termos antes de prosseguir.");
                return;
            }

            // 2. Chama a função Post passando o formulário
            const novoContato = Post(form);

            // 3. Valida os dados do contato retornado
            if (novoContato && novoContato.nome && novoContato.nome.trim() !== "") {
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
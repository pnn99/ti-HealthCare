// cadastro.js
function cadastrar() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('firstName').value;
    const sobrenome = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const numeroCasa = document.getElementById('houseNumber').value;
    const senha = document.getElementById('password').value;
    // Adicione outros campos conforme necessário

    // Construa um objeto com os dados do usuário
    const novoUsuario = {
        nome,
        sobrenome,
        email,
        cpf,
        cep,
        numeroCasa,
        senha,
        
    };

    // Faça uma solicitação POST para o servidor
    fetch('/usuario/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
    })
    .then(response => response.json())
    .then(data => {
        // Manipule a resposta do servidor
        console.log(data);
        alert("Cadastrado com sucesso")
    })
    .catch(error => {
        // Manipule erros
        console.error('Erro ao cadastrar:', error);
        // Exiba uma mensagem de erro para o usuário
    });
}

// cadastraUsuario.js

function cadastrar() {
    event.preventDefault();

    const nome = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;   
    const password = document.getElementById('password').value;
    const cidade = document.getElementById('houseNumber').value;
    const telefone = document.getElementById('telefone').value;

    const data = {
        "cpf": cpf,
        "nome": nome + " " +lastName,
        "telefone": telefone,
        "senha": password,
        "email": email,
        "cidade": cidade,
        
    };

    fetch('http://localhost:8082/usuario/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Cadastro realizado com sucesso!');
        window.location.href = "login.html";
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao cadastrar.');
    });
}

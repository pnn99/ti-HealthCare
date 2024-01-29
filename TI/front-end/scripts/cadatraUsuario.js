// cadastraUsuario.js

function cadastrar() {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const houseNumber = document.getElementById('houseNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const data = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "cpf": cpf,
        "cep": cep,
        "houseNumber": houseNumber,
        "password": password,
        "confirmPassword": confirmPassword
    };

    fetch('http://localhost:8082/seu-endpoint-de-cadastro', {
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
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao cadastrar. Verifique o console para mais detalhes.');
    });
}

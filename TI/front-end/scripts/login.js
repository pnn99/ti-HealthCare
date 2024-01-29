// login.js

function login() {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        "email": email,
        "password": password
    };

    fetch('http://localhost:8082/seu-endpoint-de-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Login bem-sucedido!');
        // Adicione redirecionamento ou outras ações após o login bem-sucedido, se necessário
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao realizar login. Verifique o console para mais detalhes.');
    });
}

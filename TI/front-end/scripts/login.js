// login.js

function login() {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    const data = {
        "cpf": cpf,
        "senha": password
    };

    fetch('http://localhost:8082/usuario/login', {
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
        if(data.sucess){
            alert(data.mensagem);
            window.location.href = "consulta.html";
        }else{
            alert(data.mensagem)            
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao realizar login.');
    });
}

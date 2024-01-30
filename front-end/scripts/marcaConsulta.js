// marcaConsulta.js
function marcaConsulta() {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = {
        "name": name,
        "email": email
    };

    fetch('http://localhost:8082/servico/servicos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Consulta marcada com sucesso! Entraremos em contato para agendar '+
        'data, hora e local.');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Entre em contato...');
    });
}

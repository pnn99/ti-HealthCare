// marcaConsulta.js
function marcaConsulta() {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = {
        "name": name,
        "email": email
    };

    fetch('http://localhost:8082/seu-endpoint-de-marcar-consulta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Consulta marcada com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao marcar consulta. Verifique o console para mais detalhes.');
    });
}

function fetchData() {
    //  URL  de tu API
    const apiUrl = 'http://localhost:3000/api/gatos/';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            displayError('Error al obtener datos. Por favor, intenta de nuevo.');
        });
}

function displayData(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    // Aquí puedes procesar y mostrar los datos según tus necesidades
    // Por ejemplo, puedes iterar sobre los elementos y mostrarlos en una lista
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = JSON.stringify(item);
        resultContainer.appendChild(itemElement);
    });
}

function displayError(message) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}
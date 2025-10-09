
function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'd00e62b3bd56d83bdee529e19b4a661a'; // Substitua pela sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.innerHTML = 'Por favor, digite o nome de uma cidade.';
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            const icon = weather[0].icon;

            weatherResult.innerHTML = `
                <h2>${name}</h2>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Ícone do tempo">
                <p>Temperatura: ${temperature.toFixed(1)}°C</p>
                <p>Clima: ${description}</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `Erro: ${error.message}`;
        });
}

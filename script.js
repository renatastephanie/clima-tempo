function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'b0c91e25b28156d41ced18f4c0240240'; // Substitua pela sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const weatherResult = document.getElementById('weatherResult');
    const cityName = document.getElementById('cityName');
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherDescription = document.getElementById('weatherDescription');
    const weatherTemperature = document.getElementById('weatherTemperature');

    if (!city) {
        alert('Por favor, digite o nome de uma cidade.');
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
            const { name, main, weather, sys } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            const icon = weather[0].icon;

            cityName.textContent = `${name}, ${sys.country}`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weatherDescription.textContent = description;
            weatherTemperature.textContent = `${temperature.toFixed(0)}°C`;

            weatherResult.style.display = 'block';
        })
        .catch(error => {
            alert(`Erro: ${error.message}`);
            weatherResult.style.display = 'none';
        });
}
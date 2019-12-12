
const fetchWeather = async () => {
    weather = await fetch(
        'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
    ).then(res => res.json());
    console.log(weather)
};

fetchWeather();

const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado"
];

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

export const weatherInfoCreator = data => {
    let weatherData = {};
    weatherData.currently = {};
    weatherData.week = [];

    const currently = new Date(data.currently.time * 1000);
    weatherData.currently.city = data.timezone;
    weatherData.currently.datetime = `${
        days[currently.getDay()]
    }, ${currently.getDate()} de ${
        months[currently.getMonth()]
    }, ${currently.getHours()}:${currently.getMinutes()}`;
    weatherData.currently.temperature = temperatureCreator(
        data.currently.temperature
    );
    weatherData.currently.windSpeed = `${parseInt(
        data.currently.windSpeed * 3.6
    )} km/h`;
    weatherData.currently.temperatureHigh = temperatureCreator(
        data.daily.data[0].temperatureHigh
    );
    weatherData.currently.humidity = `${data.daily.data[0].humidity * 100}%`;
    weatherData.currently.label = data.daily.data[0].icon;
    weatherData.week = weekCreator(data.daily.data);
    return weatherData;
};

const weekCreator = weekData => {
    weekData.shift();
    const filteredWeekData = weekData.map(day => {
        let objectDay = {};
        const dayString = new Date(day.time * 1000);
        objectDay.day = days[dayString.getDay()];
        objectDay.label = day.precipType;
        objectDay.temperature = temperatureCreator(day.temperatureHigh);
        return objectDay;
    });
    return filteredWeekData;
};

const temperatureCreator = fahrenheit =>
    `${parseInt((fahrenheit - 32) / 1.8)}°`;

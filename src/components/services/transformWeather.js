import convert from 'convert-units';

const data2 = {
	temperature : 15 ,
	weatherState: 'SUN' ,
	humidity: 10,
	wind: '10 m/s'
}

const getTemp = kelvin => {
	return Number(convert(kelvin).from("K").to("C").toFixed(2))
}

const getWeatherState = weather_data => {
	return 'SUN';
}

const transformWeather = weather_data => {
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const  weatherState = getWeatherState(weather_data);
	const temperature = getTemp(temp);
	const data = {
		humidity,
		temperature,
		weatherState,
		wind: `${data2.wind} m/s`
	}
	return data;
}


export default transformWeather;
import { useEffect, useState } from "react";

function WeatherCard(props)
{
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState("");
    const [currentWeatherDescription, setCurrentWeatherDescription] = useState("");
    const [currentTemperature, setCurrentTemperature] = useState("");
    const [currentPressure, setCurrentPressure] = useState("");
    const [currentWindSpeed, setCurrentWindSpeed] = useState("");
    const [currentHumidity, setCurrentHumidity] = useState("");
    const [selectedCityName, setSelectedCityName] = useState("");

    // useEffect(() => {
    //     setSelectedCityName(props.selectedCityName)
    // }, [props.selectedCityName]);

    function getTodaysWeatherReport()
    {
        
        const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&units=metric&appid=0ff9464f3fd2c42db59ce520cd7dd451"    
        // const TorontoUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=43.65&lon=79.38&exclude=minutely,hourly,alerts&units=metric&appid=0ff9464f3fd2c42db59ce520cd7dd451"
        // const SingaporeUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=1,29&lon=103,85&exclude=minutely,hourly,alerts&units=metric&appid=0ff9464f3fd2c42db59ce520cd7dd451"    
    
        fetch(url)
        .then(response => 
        {
            if(!response.ok)
            { 
                const error = response.status
                throw error;
            }
            else 
            {  
                return response.json();
            }
        })
        .then(data => {
            setCurrentWeatherIcon(data.current.weather[0].icon);
            setCurrentWeatherDescription(data.current.weather[0].description);
            setCurrentTemperature(data.current.temp);
            setCurrentPressure(data.current.pressure);
            setCurrentHumidity(data.current.humidity);
            setCurrentWindSpeed(data.current.wind_speed);
        })
        .catch(error => {
            
            // eslint-disable-next-line no-unused-vars
            if((error => 400) && (error <= 499))
            {
                console.log("Error en el cliente")
            }
            // eslint-disable-next-line no-unused-vars
            else if((error => 500) && (error <= 599))
            {
                console.log("Error en el servidor")
            }
        })
    }


        return (
            <div className="weather-card">
                <div className="first-row">
                    <img src={`../assets/${currentWeatherIcon}.png`} alt={currentWeatherDescription}/>
                    <h1>{Math.round(currentTemperature)}º</h1>
                </div>
                <div className="second-row">
                    <div className="pressure">
                        <div className="first-row">
                            <span>Pressure</span>
                        </div>  
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/pressure.png" alt="descripcion"/>
                            <span>{currentPressure} hPa</span>
                        </div>
                    </div>
                    <div className="wind-speed">
                        <div className="first-row">
                            <span>Wind speed</span>
                        </div>
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/wind.png" alt="descripcion"/>
                            <span>{currentWindSpeed} m/s</span>
                        </div>
                    </div>
                    <div className="humidity">
                        <div className="first-row">
                            <span>Humidity</span>
                        </div>
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/humidity.png" alt="descripcion"/>
                            <span>{currentHumidity}%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default WeatherCard;
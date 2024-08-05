/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

function WeatherCard(props)
{
    // const [selectedCityName, setSelectedCityName] = useState("");

    // useEffect(() => {
    //     setSelectedCityName(props.selectedCityName)
    // }, [props.selectedCityName]);

        return (
            <div className="weather-card">
                <div className="first-row">
                    <img src={`../assets/${props.weatherIcon}.png`} alt={props.weatherDescription}/>
                    <h1>{props.weatherTemperature}ºC</h1>
                </div>
                <div className="second-row">
                    <div className="pressure">
                        <div className="first-row">
                            <span>{(props.languageSelected).rainProbSpan}</span>
                        </div>  
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/raindrop.png" alt="descripcion"/>
                            <span>{props.weatherRainProb}%</span>
                        </div>
                    </div>
                    <div className="humidity">
                        <div className="first-row">
                            <span>{(props.languageSelected).humiditySpan}</span>
                        </div>
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/humidity.png" alt="descripcion"/>
                            <span>{props.weatherHumidity}%</span>
                        </div>
                    </div>
                    <div className="wind-speed">
                        <div className="first-row">
                            <span>{(props.languageSelected).windSpeedSpan}</span>
                        </div>
                        <div className="second-row">
                            <img width="45px" height="40px" src="../../public/assets/wind.png" alt="descripcion"/>
                            <span>{props.weatherWindSpeed} km/h</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default WeatherCard;
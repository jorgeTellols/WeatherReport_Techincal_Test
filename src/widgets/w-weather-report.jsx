import WeatherCard from "../components/c-weatherCard";
import MiniWeatherCard from "../components/c-miniWeatherCard";
import { useEffect, useState } from "react";

function WeatherReport(props) {

    // eslint-disable-next-line react/prop-types
    const date = new Date().toLocaleDateString(`${(props.languageSelected).dataFormat}`, { timeZone: "America/Chicago", weekday:"long", year:"numeric", month:"long", day:"numeric"})
    const upperCaseDate = date.charAt(0).toUpperCase() + date.slice(1);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {mostrar}, [])

        function mostrar()
        {
            console.log(props.selectedCityName);
        }

    return(
        <div className="weather-widget">
            <div className="first-row">
                <WeatherCard selectedCityName={selectedCity}></WeatherCard>
                <div className="location-date">
                    <h1>London 💂🏻‍♀️</h1>
                    <h1 className="date">{upperCaseDate}</h1>
                </div>
            </div>
            <div className="second-row">
                <MiniWeatherCard></MiniWeatherCard>
                <MiniWeatherCard></MiniWeatherCard>
                <MiniWeatherCard></MiniWeatherCard>
                <MiniWeatherCard></MiniWeatherCard>
                <MiniWeatherCard></MiniWeatherCard>
                <MiniWeatherCard></MiniWeatherCard>
            </div>
        </div>
    )
}

export default WeatherReport;
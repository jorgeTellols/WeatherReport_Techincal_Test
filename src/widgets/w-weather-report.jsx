/* eslint-disable react/prop-types */
import WeatherCard from "../components/c-weatherCard";
import MiniWeatherCard from "../components/c-miniWeatherCard";
import { useEffect, useState } from "react";

function WeatherReport(props) {

    const [timeZone, setTimeZone] = useState("");
    const [selectedCityName, setSelectedCityName] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    
    useEffect(() => {
        setSelectedCityName(props.selectedCityName)
        if(props.selectedCityName == "London")
        {
            setTimeZone("America/Chicago")
        }
        else if(props.selectedCityName == "Toronto")
        {
            setTimeZone("Asia/Almaty")
        }
        else if(props.selectedCityName == "Singapore")
        {
            setTimeZone("Asia/Singapore")
        }
        }, [props.selectedCityName]);

        useEffect(() => setCurrentDate(new Date().toLocaleDateString(`${(props.languageSelected).dataFormat}`, { timeZone: timeZone, weekday:"long", year:"numeric", month:"long", day:"numeric"})), [timeZone])
            
        const upperCaseDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);
        //const upperCaseDate = "patata"

        
        return(
        <div className="weather-widget">
            <div className="first-row">
                <WeatherCard selectedCityName={selectedCityName}></WeatherCard>
                <div className="location-date">
                    <h1>{selectedCityName}</h1>
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
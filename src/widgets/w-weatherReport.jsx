/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import WeatherCard from "../components/c-weatherCard";
import MiniWeatherCard from "../components/c-miniWeatherCard";
import CityInfoWeatherCard from "../components/c-cityInfoWeatherCard";
import { useEffect, useState } from "react";

function WeatherReport(props) {

    //Objects initialization section 

    let language = "";

    const weather = {
        "date": "",
        "icon": "",
        "description": "",
        "temperature": 0,
        "tempMax": 0,
        "tempMin": 0,
        "timeZone": ""
    }

    const nextDay = {
        "date": "",
        "icon": "",
        "temperature": "",
        "rainProb": "",
    }

    //Hook section

    const [clientError, setClientError] = useState(false);
    const [serverError, setServerError] = useState(false);
    const [selectedCityName, setSelectedCityName] = useState(props.selectedCityName);
    const [cityChanged, setCityChanged] = useState(false)
    const [currentWeather, setCurrentWeather] = useState("");
    const [weatherDay1, setWeatherDay1] = useState("");
    const [weatherDay2, setWeatherDay2] = useState("");
    const [weatherDay3, setWeatherDay3] = useState("");
    const [weatherDay4, setWeatherDay4] = useState("");
    const [weatherDay5, setWeatherDay5] = useState("");
    const [weatherDay6, setWeatherDay6] = useState("");

    useEffect(() => {
        setSelectedCityName(props.selectedCityName)
        setCityChanged(true);
    }, [props.selectedCityName]);

    useEffect(() => {
        //getWeatherReport()
        setCityChanged(false);
    }, [cityChanged, props.languageSelected])

    //Function format the date

    function formatDate(dt, onlyDay)
    {
        const date = new Date(dt * 1000);

        if(onlyDay)
        {
            return date.toLocaleDateString(`${(props.languageSelected).dataFormat}`, 
            { 
                timeZone: currentWeather.timeZone, 
                weekday:"long", 
            });
        }
        else
        {
            return date.toLocaleDateString(`${(props.languageSelected).dataFormat}`, 
            { 
                timeZone: currentWeather.timeZone, 
                weekday:"long", 
                year:"numeric", 
                month:"long", 
                day:"numeric", 
            });
        }
        
    }

    //Function to format the time

    function formatTime(dt)
    {
        const date = new Date(dt * 1000);
        return date.toLocaleTimeString(`${(props.languageSelected).dataFormat}`, 
        { 
            timeZone: currentWeather.timeZone, 
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    //Call to API

    async function getWeatherReport()
    {
            let url;
            let cityName = selectedCityName;

            //Functions to reset the UI if the error is solved

            setClientError(false);
            setServerError(false);

            //Validation of the chosen city to choose the correct url
            
            if((cityName == "London 💂🏻‍♀️") || (cityName == "Londres 💂🏻‍♀️")) 
            {
                url = `https://api.openweathermap.org/data/3.0/onecall?lat=51.50&lon=-0.11&exclude=minutely,alerts&lang=${language}&units=metric&appid=2b86aec52c83a8cee2493754f4579d58`;
            } 
            else if(cityName == "Toronto 🍁") 
            {
                url = `https://api.openweathermap.org/data/3.0/onecall?lat=43.65&lon=-79.34&exclude=minutely,alerts&lang=${language}&units=metric&appid=2b86aec52c83a8cee2493754f4579d58`;
            } 
            else if((cityName == "Singapore 🏯") || (cityName == "Singapur 🏯")) 
            {
                url = `https://api.openweathermap.org/data/3.0/onecall?lat=1.29&lon=103.85&exclude=minutely,alerts&lang=${language}&units=metric&appid=2b86aec52c83a8cee2493754f4579d58`;
            } 

            //GET

            await fetch(url)
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

                //GET the current weather

                weather.date = (data.current.dt);
                weather.icon = (data.current.weather[0].icon);
                weather.description = (data.current.weather[0].description);
                weather.temperature = (data.current.temp);
                weather.tempMax = (data.daily[0].temp.max);
                weather.rainProb = (data.daily[0].pop)
                weather.tempMin = (data.daily[0].temp.min);
                weather.timeZone = (data.timezone);

                weather.description = (weather.description).charAt(0).toUpperCase() + (weather.description).slice(1);


                //Loop to GET the weather for the next 6 days

                for(let k = 1; k <= 6; k++)
                {
                    const copyNextDay = {...nextDay}

                    copyNextDay.date = (data.daily[k].dt)
                    copyNextDay.icon = (data.daily[k].weather[0].icon);
                    copyNextDay.temperature = (data.daily[k].temp.day);
                    copyNextDay.rainProb = (data.daily[k].pop);

                    switch(k)
                    {
                        case 1:
                            setWeatherDay1(copyNextDay);
                            break;
                        
                        case 2:
                            setWeatherDay2(copyNextDay);
                            break;
                        
                        case 3:
                            setWeatherDay3(copyNextDay);
                            break;
                        
                        case 4:
                            setWeatherDay4(copyNextDay);
                            break;
                        
                        case 5:
                            setWeatherDay5(copyNextDay);
                            break;
                        
                        case 6:
                            setWeatherDay6(copyNextDay);
                            break;
                    }
                }

                setCurrentWeather(weather);
            })
            .catch(error => {

                //Catch (in case of server or client error)

                if((error => 400) && (error <= 499))
                {
                    setClientError(true);
                    throw error;
                }
                
                else if((error => 500) && (error <= 599))
                {
                    setServerError(true);
                    throw error;
                }
            })
        }

    return(
        <>
            {serverError ? (
                <div className="server-error empty-content">
                    <img height="350px" width="400px" src="../public/assets/server_error.gif"/>
                    <h1>{(props.languageSelected).serverErrorMessage}</h1>
                    <span>{(props.languageSelected).serverErrorTip}</span>
                </div>
                ) : 
                clientError ? (
                    <div className="client-error empty-content">
                    <img height="350px" width="400px" src="../public/assets/client_error.gif"/>
                    <h1>{(props.languageSelected).clientErrorMessage}</h1>
                    <span>{(props.languageSelected).clientErrorTip}</span>
                    </div>
                ) : (
                <div className="weather-widget">
                    <div className="first-row">
                        <WeatherCard 
                            selectedCityName={selectedCityName} 
                            languageSelected={props.languageSelected}
                            weatherIcon={currentWeather.icon}
                            weatherDescription={currentWeather.description}
                            weatherTemperature={Math.round(currentWeather.temperature)}
                            weatherTempMax={Math.round(currentWeather.tempMax)}
                            weatherRainProb={(currentWeather.rainProb)*100}
                            weatherTempMin={Math.round(currentWeather.tempMin)}
                        ></WeatherCard>
                        <CityInfoWeatherCard 
                            languageSelected={props.languageSelected}
                            selectedCityName={selectedCityName}
                            date={formatDate(currentWeather.date)}
                            time={formatTime(currentWeather.date)}
                        ></CityInfoWeatherCard>
                    </div>
                    <div className="second-row">
                        <MiniWeatherCard
                            minicardPosition="first-mini-card"
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay1.icon}
                            weatherTemperature={Math.round(weatherDay1.temperature)}
                            weatherRainProb={weatherDay1.rainProb*100}
                            date={formatDate(weatherDay1.date, true)}
                        />
                        <MiniWeatherCard
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay2.icon}
                            weatherTemperature={Math.round(weatherDay2.temperature)}
                            weatherRainProb={weatherDay2.rainProb*100}
                            date={formatDate(weatherDay2.date, true)}
                        />
                        <MiniWeatherCard
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay3.icon}
                            weatherTemperature={Math.round(weatherDay3.temperature)}
                            weatherRainProb={weatherDay3.rainProb*100}
                            date={formatDate(weatherDay3.date, true)}
                        />
                        <MiniWeatherCard
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay4.icon}
                            weatherTemperature={Math.round(weatherDay4.temperature)}
                            weatherRainProb={weatherDay4.rainProb*100}
                            date={formatDate(weatherDay4.date, true)}
                        />
                        <MiniWeatherCard
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay5.icon}
                            weatherTemperature={Math.round(weatherDay5.temperature)}
                            weatherRainProb={weatherDay5.rainProb*100}
                            date={formatDate(weatherDay5.date, true)}
                        />
                        <MiniWeatherCard
                            minicardPosition="last-mini-card"
                            languageSelected={props.languageSelected}
                            weatherIcon={weatherDay6.icon}
                            weatherTemperature={Math.round(weatherDay6.temperature)}
                            weatherRainProb={weatherDay6.rainProb*100}
                            date={formatDate(weatherDay6.date, true)}
                        />
                    </div>
                </div>)
            }
        </>
    )
}

export default WeatherReport;

/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

function MiniWeatherCard(props)
{

    //Made this to make sure that the first letter of the displayed day is in upper case.
    const upperCaseDate = props.date.charAt(0).toUpperCase() + props.date.slice(1);

    return (    
    <div className={`${props.minicardPosition} mini-weather-card`}>
        <div className="first-row">
            <h1>{upperCaseDate}</h1>
            <img src={`../../public/assets/${props.weatherIcon}.png`}/>
        </div>
        <div className="second-row">
            <div className="temperature">
                <div className="first-row">
                    <img src="../../public/assets/temperature.png"/>
                </div>
                <div className="second-row">
                    <span>{props.weatherTemperature}º C</span>
                </div>
            </div>
            <div className="rain-prob">
                <div className="first-row">
                    <img src="../../public/assets/raindrop.png"/>
                </div>
                <div className="second-row">
                    <span>{props.weatherRainProb}%</span>
                </div>            
            </div>
        </div>
    </div>)
}

export default MiniWeatherCard;
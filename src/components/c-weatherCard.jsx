/* eslint-disable react/prop-types */

function WeatherCard(props)
{
        return (
            <div className="weather-card">
                <div className="first-row">
                    <div className="icon-description">
                        <div className="first-row">
                            <img src={`../assets/${props.weatherIcon}.png`} alt={props.weatherDescription}/>
                            <p>{props.weatherDescription}</p>
                        </div>
                            <h1>{props.weatherTemperature}ºC</h1>
                    </div>
                </div>
                <div className="second-row">
                    <div className="max-temp">
                        <div className="first-row">
                            <span>{(props.languageSelected).maxTempSpan}</span>
                        </div>
                        <div className="second-row">
                            <img src="../../public/assets/temp-max.png"/>
                            <span>{props.weatherTempMax}ºC</span>
                        </div>
                    </div>
                    <div className="min-temp">
                        <div className="first-row">
                            <span>{(props.languageSelected).minTempSpan}</span>
                        </div>
                        <div className="second-row">
                            <img src="../../public/assets/temp-min.png"/>
                            <span>{props.weatherTempMin}ºC</span>
                        </div>
                    </div>
                    <div className="rain-prob">
                        <div className="first-row">
                            <span>{(props.languageSelected).rainProbSpan}</span>
                        </div>  
                        <div className="second-row">
                            <img src="../../public/assets/raindrop.png"/>
                            <span>{props.weatherRainProb}%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default WeatherCard;
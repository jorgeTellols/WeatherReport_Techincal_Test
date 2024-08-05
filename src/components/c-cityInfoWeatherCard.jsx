/* eslint-disable react/prop-types */
function CityInfoWeatherCard(props){
    
    const upperCaseDate = props.date.charAt(0).toUpperCase() + props.date.slice(1);
    
    return (               
    <div className="location-date">
        <h1>{props.selectedCityName}</h1>
        <h1 className="date">{upperCaseDate}</h1>
        <h1 className="date">{props.time}</h1>
    </div>)
}

export default CityInfoWeatherCard;
import React, { useState } from 'react'
import FormattedDate from './FormattedDate'



export default function WeatherInfo(props) {

    let [temp, setTemp] = useState(props.temperature)

    function setCelsius(event) {
        event.preventDefault()
        setTemp(props.temperature)
    }

    function setFahrenheit(event) {
        event.preventDefault()
        let temperature = (props.temperature * 9 / 5) + 32
        setTemp(Math.round(temperature))
    }


    return (
        <>
            <h1>{props.currentCity}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.date} />
                </li>
                <li>
                    {props.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img className='main-icon' src={props.iconUrl} alt={props.description} />
                    <span className='temperature' >{temp}</span> <a href="#!" onClick={setCelsius} className='unit'>°C</a> | <a href="#!" onClick={setFahrenheit} className='unit'>F</a>
                </div>
                <div className="col-3">
                    <ul>
                        <li> Humidity: {props.humidity}%</li>
                        <li> Wind: {props.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
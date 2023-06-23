import React from 'react'
import FormattedDate from './FormattedDate'



export default function WeatherInfo(props) {
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
                    <img src={props.iconUrl} alt={props.description} />
                    <span className='temperature' >{props.temperature}</span> <span className='unit'>°C</span>
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
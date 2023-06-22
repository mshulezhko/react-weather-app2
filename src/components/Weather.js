import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'


export default function Weather() {
    let [isUsed, setUsed] = useState(false)
    let [temperature, setTemperature] = useState(null)
    let [currentCity, setCurrentCity] = useState('Kiev')
    let [humidity, setHumidity] = useState(null)
    let [wind, setWind] = useState(null)
    let [description, setDescription] = useState(null)
    let [iconUrl, setIconUrl] = useState(null)
    let [day, setDay] = useState(null)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const apiKey = 't676b5db7efa1d1594cf0o673c7cebc3'


    let url = `https://api.shecodes.io/weather/v1/forecast?query=${currentCity}&key=${apiKey}`

    if (!isUsed) {
        try {
            axios.get(url).then(handleResponse)
            setUsed(true)
        } catch (error) {
            console.log(error)
        }
    }

    function handleResponse(response) {
        console.log(response)
        if (response.data.message === "City not found") {
            alert('Wrong city name')
        } else {

            setTemperature(Math.round(response.data.daily[0].temperature.day))
            setCurrentCity(response.data.city)
            setHumidity(response.data.daily[0].temperature.humidity)
            setWind(response.data.daily[0].wind.speed)
            setDescription(response.data.daily[0].condition.description)
            setIconUrl(response.data.daily[0].condition.icon_url)

            let date = new Date(response.data.daily[0].time * 1000);

            setDay(date.getDay())
        }

    }

    function setData(event) {
        event.preventDefault()
        let cityNameElement = document.querySelector('#cityName')

        if (cityNameElement.value) {
            setCurrentCity(cityNameElement.value)
            setUsed(false)
        }

    }

    return (
        <div className="Weather">
            <form onSubmit={setData}>
                <div className="row">
                    <div className="col-6">
                        <input autoFocus="on" type="search" id='cityName' placeholder='City name' className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value='Search' className="btn btn-primary w-100" />
                    </div>
                </div>

            </form>
            <h1>{currentCity}</h1>
            <ul>
                <li>
                    {days[day]}
                </li>
                <li>
                    {description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={iconUrl} alt={description} />
                    <span className='temperature' >{temperature}</span> <span className='unit'>°C</span>
                </div>
                <div className="col-3">
                    <ul>
                        <li> Humidity: {humidity}%</li>
                        <li> Wind: {wind} km/h</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
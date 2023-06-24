import React, { useState } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import './Weather.css'


export default function Weather() {
    let [temperature, setTemperature] = useState(null)
    let [currentCity, setCurrentCity] = useState('Kiev')
    let [humidity, setHumidity] = useState(null)
    let [wind, setWind] = useState(null)
    let [description, setDescription] = useState(null)
    let [iconUrl, setIconUrl] = useState(null)
    let [date, setDate] = useState(null)
    let [ready, setReady] = useState(false)

    function search() {
        const apiKey = 't676b5db7efa1d1594cf0o673c7cebc3'
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${currentCity}&key=${apiKey}`
        console.log('currentCityfunction search()')
        console.log(currentCity)

        try {
            axios.get(url).then(handleResponse)
        } catch (error) {
            console.log(`${error} uyuyuyhjj`)
        }
    }

    if (!ready) {
        search()
    }

    function handleResponse(response) {
        console.log(response.data)
        setTemperature(Math.round(response.data.daily[0].temperature.day))
        setHumidity(response.data.daily[0].temperature.humidity)
        setWind(response.data.daily[0].wind.speed)
        setDescription(response.data.daily[0].condition.description)
        setIconUrl(response.data.daily[0].condition.icon_url)
        let date = new Date(response.data.daily[0].time * 1000);
        setDate(date)
        setCurrentCity(response.data.city)
        setReady(true)


    }

    function setData(event) {
        event.preventDefault()
        let cityNameElement = document.querySelector('#cityName')

        if (cityNameElement.value) {
            setCurrentCity(cityNameElement.value)
            console.log('cityNameElement.value')
            console.log(cityNameElement.value)
            setReady(false)
        }
    }

    if (ready) {
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
                <WeatherInfo currentCity={currentCity} date={date} description={description} iconUrl={iconUrl}
                    temperature={temperature}
                    humidity={humidity}
                    wind={wind}
                />
            </div>
        )
    }
}
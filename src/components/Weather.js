import React from 'react'
import './Weather.css'


export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-6">
                        <input type="search" placeholder='City name' className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value='Search' className="btn btn-primary w-100" />
                    </div>
                </div>

            </form>
            <h1>Oslo</h1>
            <ul>
                <li>
                    Wednesday
                </li>
                <li>
                    Mostly cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" />
                    24 °C
                </div>
                <div className="col-3">
                    <ul>
                        <li>Осади: 0%</li>
                        <li> Вологість: 40%</li>
                        <li> Вітер: 5 м/с</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
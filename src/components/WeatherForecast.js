import React from 'react'
import FormattedDate from './FormattedDate'


export default function WeatherForecast(props) {

    console.log(props.daily)
    return (<div className='row forecast WeatherForecast'>
        {
            props.daily.map((day, key) => {
                console.log(typeof day)
                console.log(day)


                if (key > 0) {
                    let date = new Date(day.time * 1000);
                    let maximum = Math.round(day.temperature.maximum)
                    let minimum = Math.round(day.temperature.minimum)

                    return <div className='col'>
                        <div className='WeatherForecastPreview'>
                            <div className='forecast-time'><h4><FormattedDate date={date} conditions='day' /></h4></div>
                            <div><img className='icon-forecast' src={day.condition.icon_url} alt={day.condition.description} /></div>
                            <div className="forecast-temperature">
                                <span className="forecast-temperature-max">{maximum}°</span>
                                <span className="forecast-temperature-min"> {minimum}°</span>
                            </div>
                        </div>
                    </div>
                }

                return true
            })
        }
    </div>)
}
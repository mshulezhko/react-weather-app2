import React from 'react'
import FormattedDate from './FormattedDate'


export default function WeatherForecast(props) {

    console.log(props.daily)
    return (<div className='row forecast'>
        {
            props.daily.map((day, key) => {
                console.log(typeof day)
                console.log(day)


                if (key > 0) {
                    let date = new Date(day.time * 1000);
                    let maximum = Math.round(day.temperature.maximum)
                    let minimum = Math.round(day.temperature.minimum)

                    return <div className='col WeatherForecastPreview'>
                        <h4><FormattedDate date={date} conditions='day' /></h4>
                        <div><img className='icon-forecast' src={day.condition.icon_url} alt={day.condition.description} /></div>
                        <span>{maximum}° {minimum}°</span>
                    </div>
                }

                return true
            })
        }
    </div>)
}
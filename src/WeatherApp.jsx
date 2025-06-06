 import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import NewsBox from './NewsBox';
import "./Weather.css"
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
         city:"Delhi",
        feels_like:24.84,
        temp:25.08,
        tempMin:25.05,
        tempMax:27.58,
        humidity:47,
        weather:"haze",
    });
    const [NewsInfo,setnewsInfo]=useState("");

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    };
    let addinfo=(news)=>{
        setnewsInfo(news);
    }
    return(
        <div className='Weather'>
        
            <h1 style={{color:"rgb(60, 35, 3)"}}><b><u>Weather & News App </u></b> </h1>
            <SearchBox 
            updateInfo={updateInfo} 
            addinfo={addinfo} />
            <div className='card'>
                 <InfoBox info={weatherInfo}/>
            <NewsBox info2={NewsInfo}/>

            </div>
           
        </div>
        
    )
}
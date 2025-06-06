import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo,addinfo}){
    let [city,setCity]=useState("");
    let[data,setData]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0b4196d7a858429c143d92c47d8160cf";
    const NEWS_URL="https://newsapi.org/v2/everything";
    const NEWS_KEY="1e8d846cc762474091f87b0d410c595b";
    let getWeatherInfo= async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        //  console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }};
    let getNewsInfo=async()=>{
        try{
        let response=await fetch(`${NEWS_URL}?q=${data}&apikey=${NEWS_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let news= {
            Author:jsonResponse.articles[0].author,
            Title:jsonResponse.articles[0].title,
            // Content:jsonResponse.articles[0].content,
            Description:jsonResponse.articles[0].description,
            PublishedAt:jsonResponse.articles[0].publishedAt,
            Source:jsonResponse.articles[0].source.name,
            url:jsonResponse.articles[0].url
        }
         console.log(news);
        return news;
        
    }catch(err){
        throw err;
    }};
    let handleChange=(evt)=>{
        setCity(evt.target.value);
       };
    let handleInputChange=(evt)=>{
        setData(evt.target.value);
       }
    let handleSubmit= async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        console.log(data);
        setCity("");
        setData("");
        let newdata=await getNewsInfo();
        addinfo(newdata);
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
        setError(true);
        
    }};
    return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit} >
        
                <TextField  required 
                id="City"
                // className='City'
                label="City Name" 
                variant="outlined" 
                value={city}
                onChange={handleChange} />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <TextField  required
                id="News" 
                // className='News'
                label="KeyWord" 
                variant="outlined" 
                value={data}
                onChange={handleInputChange} />
                <br></br>
                <br></br>
              <Button 
               variant="contained"
               type="submit"
               >Search</Button>
            {error && <p>Please enter a valid Input</p>}
        </form>
            </div>
    )
}
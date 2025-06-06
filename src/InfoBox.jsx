import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import DehazeIcon from '@mui/icons-material/Dehaze';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL=
    "https://plus.unsplash.com/premium_photo-1667926192316-5e4e421475ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
       

    return(
        <div className="InfoBox">
            {/* <h2>Weather Info:{info.weather}</h2> */}
        
        <div className="cardCont" >
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? 
            RAIN_URL
            :info.temp>15
            ? HOT_URL:info.temp<15
            ?COLD_URL:INIT_URL}
        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <u>{info.city}</u>{
            info.humidity>80? 
            <UmbrellaIcon/>
            :info.temp>15
            ? <SunnyIcon/>:info.temp<15
            ?<AcUnitIcon/>:<DehazeIcon/>
          }
        </Typography>
        <Typography variant="body1"  color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The Weather feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    )
}
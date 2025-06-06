import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./NewsBox.css";


export default function NewsBox({info2}){
    return(
        <div className="NewsBox">
        
        <div className="cardCont2">
        <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
         <u> News Articles</u> :&nbsp;
          {info2.Title}
          
        </Typography>
        <Typography variant="body1"  color="text.secondary" component={"span"}>
          <p>Author={info2.Author}</p>
          {/* <p>Content={info2.Content}</p> */}
          <p>Description={info2.Description}</p>
          <p>Source={info2.Source}</p>
          <p>For More Info= <a href={info2.url}>Click</a></p>
           <p>Published at={info2.PublishedAt}</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    )
    
}
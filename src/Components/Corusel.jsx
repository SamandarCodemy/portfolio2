import Button from "@mui/material/Button";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css"

const card = (
  <div>
    <React.Fragment >
    <CardContent sx={{ width: "50%", marginLeft: "20%", height: "350px"   }} >
      <Typography variant="h2" component="div">
        Develop <b>Strategies</b> for <br /> your business
      </Typography>
      <Typography sx={{ mb: 5 }}>
        <hr
          style={{
            width: "20%",
            float: "left",
            marginBottom: "10%",
          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ float: "left" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
        dignissimos iste, praesentium fuga sed id repellendus mollitia enim eum
        maxime temporibus quas dolores aut impedit asperiores tempora magnam
        ipsa ipsam!ndus moll
        <br /> 
      </Typography>
    </CardContent>
    <CardActions sx={{ width: "50%", marginLeft: "20%" }}>
        <div>
          <Button
            variant="outlined"
            size="large"
            sx={{
              padding: "5px 40px 5px 40px ",
              fontSize: "40px",
              borderRadius: "2230px",
            }}
          >
            Large
          </Button>
        </div>
    </CardActions>
  </React.Fragment>
  </div>
  
);

export default function OutlinedCard() {
  return (
      <div>
        {card}
      </div>
    
  );
}
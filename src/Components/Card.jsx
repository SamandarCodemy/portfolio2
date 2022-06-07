import Box from "@mui/material/Box";
import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RedeemIcon from "@mui/icons-material/Redeem";

const card = (
  <React.Fragment>
    <CardContent sx={{ textAlign: "center", fontSize: "65px" }}>
      Services
    </CardContent>

    <CardContent sx={{ width: "40%", marginLeft: "25%", height: "200px" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ position: "relative", right: "38px" }}
      >
        <RedeemIcon
          sx={{
            fontSize: "36px",
            position: "relative",
            right: "25px",
            top: "5px",
          }}
        />
        Make Succes for future
      </Typography>
      <Typography  color="text.secondary">
        <hr
          style={{
            border: "3px #250f8d solid",
            width: "20%",
            float: "left",

          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ float: "left"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
        dignissimos iste, praesentium fuga sed id repellendus mollitia enim eum
        maxime temporibus quas dolores aut impedit asperiores tempora
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard2() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
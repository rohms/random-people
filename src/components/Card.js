import React from "react";
import { CardContent, Typography, Avatar, Box } from "@mui/material";
import "../styles.css";

const Card = ({ img, first, email, city, last, country }) => {
  return (
    <div>
      <CardContent className="card">
        <Avatar className="avatar">
          <img src={img} alt="user pictures" />
        </Avatar>
        <Box>
          <Typography variant="h6" fontWeight={"bold"}>
            {first} {last}
          </Typography>
          <Typography variant="subtitle2">{email}</Typography>
          <Typography variant="subtitle1">
            {city}, {country}
          </Typography>
        </Box>
      </CardContent>
    </div>
  );
};

export default Card;

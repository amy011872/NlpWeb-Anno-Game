import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
export default function Score({currentScore}) {

  return (
    <div className="row">
        <div className="col-3"></div>
        <div className="score center col-6">
            <Typography variant="h7" gutterBottom>目前得分: 
            {currentScore === 0 ? (
            <Typography variant="h7">You have no score now, keep fighting!</Typography>
            ) : <Typography variant="h7">{currentScore}</Typography>}
            </Typography>
        </div>
        <div className="col-3"></div>
    </div>
  );
}
Score.propTypes = {
  currentScore: PropTypes.number.isRequired
};

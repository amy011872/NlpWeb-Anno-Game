import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function Score({currentScore}) {

  return (
    <aside className="block col-1 favor-page">
      <div className="row">
        <Typography variant="h4" gutterBottom>目前得分</Typography>
      </div>
      <div>
        {currentScore === 0 ? (
          <div>You have no score now, keep fighting!</div>
        ) : currentScore}
      </div>
    </aside>
  );
}
Score.propTypes = {
  currentScore: PropTypes.number.isRequired
};

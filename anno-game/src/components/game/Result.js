import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Result({
    currentScore,
    questions,
    nextLevel,
    restartGame,
    congrats
}) {
    return (
        <>
            <div className="res-card">
                <div className="container">
                    <Typography variant="h3" className="center">累計得分</Typography>
                </div>
                <div className="container">
                    <Typography variant="h5" className="center pad">Your score: {currentScore} ({currentScore/questions.length*100}%)</Typography>
                </div>
                <div className="container">
                    {currentScore > 3 ? <Typography variant="h5" className="center pad">{congrats}</Typography> 
                    : <Typography variant="h5" className="center pad">你的分數太低了，不能進到下一關。再次挑戰？</Typography>}
                </div>
                <div className="container center">
                    {currentScore > 3 ? (
                        <button 
                        className="btn btn-secondary"
                        onClick={nextLevel}
                      >
                          挑戰下一關
                      </button>
                    ):(
                        <button 
                        className="btn btn-secondary"
                        onClick={restartGame}
                      >
                          再次挑戰
                      </button>
                    )
                }
                    
                </div>
            </div>
        </>
    )
};

Result.propTypes = {
    nextLevel: PropTypes.func.isRequired,
    reStart: PropTypes.func.isRequired,
    currentScore: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
}
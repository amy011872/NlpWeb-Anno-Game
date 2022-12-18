import Video from "./Video";
import TTSbutton from "./Text2Speech";
import Score from "./Score";
import { Typography } from "@mui/material";
import { useState } from "react";
import QuestionList from "../../skeleton_videos/QuestionList";

export default function Game({title, setShowResult}){
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = QuestionList;
    const optionClicked = (isCorrect) => {
        console.log('clicked');
        console.log(isCorrect);
        console.log(questions.length);
        if (isCorrect) {
            setScore(score + 1);
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        } 
    };
    return(
        <>
            <div className="container-xl">
                <div className="row">
                    <div className="col-10">
                        <Typography className="center" gutterBottom>{title}</Typography>
                        <Typography className="center" gutterBottom>第{currentQuestion+1}題</Typography>
                        <div className="container-lg center gutter">
                            <Video />
                        </div>
                        <div className="container-sm pad">
                            <div className="row">
                                {questions[currentQuestion].options.map((option) => {
                                    return (
                                        <div className="col-4">
                                            <TTSbutton 
                                                key={option.option_id}
                                                optionClicked={optionClicked} 
                                                correctness={option.isCorrect}
                                                optionText={option.text} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <Score currentScore={score} />
                    </div>
                </div>
            </div>
        </>      
    )
}
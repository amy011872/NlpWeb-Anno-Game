import Video from "./Video";
import TTSbutton from "./Text2Speech";
import Score from "./Score";
import { Typography } from "@mui/material";

export default function Game({
    title,
    score, 
    currentQuestion,
    optionClicked,
    questions,
    isAlertVisible,
    Correctness,
    needTTS
}){
    return(
        <>
            <div className="container-xl">
                <div className="row">
                    <div className="col-11">
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
                                                optionText={option.text}
                                                needTTS={needTTS}
                                            />
                                        </div>
                                       )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <Score currentScore={score} />
                        {isAlertVisible && (Correctness ? "答對了！" : "答錯了！")}
                    </div>
                </div>
            </div>
        </>      
    )
}
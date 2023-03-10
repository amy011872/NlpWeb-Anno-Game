import Video from "./Video";
import Score from "./Score";
import Hint from "./Hint";
import TTSButton from "./TTSButton";
import AOS from 'aos';
import { Typography } from "@mui/material";

export default function Game({
    title,
    score,
    currentQuestion,
    optionClicked,
    questions,
    isAlertVisible,
    Correctness,
    needTTS,
    isHintVisible,
    handleSkip,
    nCol,
    closePopup
}){
    AOS.init();
    return(
        <>
            <div className="container-xl">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col">
                        <Typography variant="h5" className="center" gutterBottom>{title}</Typography>
                        <Typography variant="h6" className="center" gutterBottom>—第{currentQuestion + 1}題—</Typography>
                        <Score currentScore={score} />
                        <div className="container-xl center">
                            <Video
                              filename={questions[currentQuestion].video}
                            />
                        </div>
                        <div className="container-xl pad">
                            <div className="row">
                                {questions[currentQuestion].options.map((option) => {
                                    return (
                                        <div 
                                          className={nCol}
                                          data-aos="fade-up"
                                          data-aos-once="true"
                                          data-aos-delay="1500"
                                          key={option.option_id}
                                        >
                                            <div className="center pad">
                                                <button onClick={() => optionClicked(option.isCorrect)} className='btn btn-outline-secondary'>
                                                    {option.text}
                                                </button>
                                            </div>
                                            {needTTS && <TTSButton optionText={option.text}/>}
                                        </div>
                                    )
                                })}
                            </div>
                            {isAlertVisible && (Correctness ? <Typography variant="h5" className="center" gutterBottom>答對了！</Typography>
                            : <Typography variant="h5" className="center" gutterBottom>答錯了！</Typography>)}
                        </div>
                    </div>
                    <div>
                        {isHintVisible && 
                            <Hint
                                data-aos="fade-up"
                                text={questions[currentQuestion].text}
                                handleSkip={handleSkip}
                                closePopup={closePopup}
                            />}
                    </div>
                </div>
            </div>
        </>      
    )
}
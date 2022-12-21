import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Game from "./components/game/Game";
import About from "./components/About";
import Result from './components/game/Result';
import QuestionList from "./skeleton_videos/QuestionList";
import QuestionList2 from "./skeleton_videos/QuestionList2";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAlertVisible, setIsAlertVisible ] = useState(false);
  const [Correctness, setCorrectness] = useState(true);
  const [isHintVisible, setHintVisible] = useState(false);

  let navigate = useNavigate(); 
  const questions = QuestionList;
  const questions2 = QuestionList2;
  const optionClicked = (isCorrect) => {
      console.log('clicked');
      console.log(isCorrect);
      console.log(questions[currentQuestion].video);
      if (isCorrect) {
          setScore(score + 1);
          setCorrectness(true);
      } else {
        setCorrectness(false);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
       } else {
        setShowResult(true);
    }
    setIsAlertVisible(true);
    setTimeout(() => {
            setIsAlertVisible(false);
          }, 500);
  };

  const optionClickedHint = (isCorrect) => {
      console.log('clicked');
      console.log(isCorrect);
      console.log(currentQuestion);
      // If correct, score + 1 and go to the next question
      if (isCorrect) {
          setScore(score + 1);
          setCorrectness(true);
          setHintVisible(false);
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
           } else {
            setShowResult(true);
        }
      // If incorrect, ask if the player wants a hint
      } else {
        setCorrectness(false);
        setHintVisible(true);
      }
    setIsAlertVisible(true);
    setTimeout(() => {
            setIsAlertVisible(false);
          }, 500);
  };

  const handleSkip = () => {
    setHintVisible(false);
    setCurrentQuestion(currentQuestion + 1);
}

  const nextLevel = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    console.log('To the next level!');
    let path = `/Game2`; 
    navigate(path);
  }

  const restartGame = () => {
    console.log('restart');
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <>
      <Nav />
      <div className='container-lg'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/Game"
            element={
              <>
                { showResult ? (
                  <div>
                    <Result
                      congrats={'恭喜完成第一關挑戰！'}
                      currentScore={score}
                      questions={questions}
                      nextLevel={nextLevel}
                      restartGame={restartGame}
                    />
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-10'>
                      <Game 
                        title={' 第一關(warmup)：猜猜我在說什麼？ '}
                        optionClicked={optionClicked}
                        score={score}
                        currentQuestion={currentQuestion}
                        questions={questions}
                        Correctness={Correctness}
                        isAlertVisible={isAlertVisible}
                        needTTS={true}
                        nCol={"col-4"}
                      />
                    </div>
                  </div>
                )
                }
              </>
            }
          />
          <Route 
            path="/Game2"
            element={
              <>
                { showResult ? (
                  <div>
                    <Result
                      congrats={'恭喜完成第二關挑戰！'}
                      currentScore={score}
                      questions={questions2}
                      nextLevel={nextLevel}
                      restartGame={restartGame}
                    />
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-10'>
                      <Game 
                        title={' 第二關：猜猜我是誰？ '}
                        optionClicked={optionClickedHint}
                        score={score}
                        currentQuestion={currentQuestion}
                        questions={questions2}
                        Correctness={Correctness}
                        isAlertVisible={isAlertVisible}
                        isHintVisible={isHintVisible}
                        needTTS={false}
                        handleSkip={handleSkip}
                        nCol={"col-3"}
                        closePopup={()=>setHintVisible(false)}
                      />
                    </div>
                  </div>
                )
                }
              </>
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
     </div>
   </>
  );
}

export default App;

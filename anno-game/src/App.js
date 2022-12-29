import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Game from "./components/game/Game";
import About from "./components/About";
import Result from './components/game/Result';
import End from "./components/game/End";
import QuestionList from "./skeleton_videos/QuestionList";
import QuestionList2 from "./skeleton_videos/QuestionList2";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [isAlertVisible, setIsAlertVisible ] = useState(false); // Whether players answer correctly
  const [Correctness, setCorrectness] = useState(true);
  const [isHintVisible, setHintVisible] = useState(false);

  let navigate = useNavigate(); 
  const questions = QuestionList;
  const questions2 = QuestionList2;

  // For the first question
  const optionClicked = (isCorrect) => {
      console.log('clicked');
      console.log(isCorrect);
      console.log(questions[currentQuestion].video);

      // If correct, score + 1
      if (isCorrect) {
          setScore(score + 1);
          setCorrectness(true);
      } else {
        // If incorrect, score + 0 
        setCorrectness(false);
      }
      if (currentQuestion + 1 < questions.length) {
        // If not the last question, go to the next question
        setCurrentQuestion(currentQuestion + 1);
       } else {
         // If the last question, go to the Result page
        setShowResult(true);
    }
    // After each click, show 1.5 sec whether the answer is correct or incorrect
    setIsAlertVisible(true);
    setTimeout(() => {
            setIsAlertVisible(false);
          }, 1500);
  };

  // For the second question, if clicked the wrong answer 
  const optionClickedHint = (isCorrect) => {
      console.log('clicked');
      console.log(isCorrect);
      console.log(currentQuestion);

      if (isCorrect) {
          setScore(score + 1);
          setCorrectness(true);
          setHintVisible(false);
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
           } else {
            setShowResult(true);
        }
      // If incorrect, ask if players want a hint
      } else {
        setCorrectness(false);
        setHintVisible(true);
      }
    setIsAlertVisible(true);
    setTimeout(() => {
            setIsAlertVisible(false);
          }, 1500);
  };

  // If click "skip" button, close the hint and go to the next question
  const handleSkip = () => {
    setHintVisible(false);
    setCurrentQuestion(currentQuestion + 1);
}

  // If click "next" button, set score and current question back to zero
  const nextLevel = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    console.log('To the next level!');

    // Navigate to the second game
    let path = `/Game2`; 
    navigate(path);
  }

  // If all games are over, go to the End page showing original videos
  const showVideos = () => {
    console.log('End and show videos');
    let path = `/End`; 
    navigate(path);
  }

  // If the score is lower than 50%, click "restart" button 
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
                      levelup={'前進下一關'}
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
                      nextLevel={showVideos}
                      restartGame={restartGame}
                      levelup={'揭曉影片原檔'}
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
          <Route path="/End" element={
                                <End 
                                  currentQuestion={currentQuestion}
                                  questions={questions}
                                />} />
          <Route path="/About" element={<About />} />
        </Routes>
     </div>
   </>
  );
}

export default App;

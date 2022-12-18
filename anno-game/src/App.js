import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Game from "./components/game/Game";
import About from "./components/About";
import Result from './components/game/Result';

function App() {
  const [showResult, setShowResult] = useState(false);

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
                    <Result />
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-10'>
                      <Game 
                        title={'＿＿＿＿＿ 第一關：猜猜我說了什麼？ ＿＿＿＿＿'}
                        setShowResult={setShowResult}
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

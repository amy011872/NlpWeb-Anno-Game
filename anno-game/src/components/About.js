import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutPage from "../skeleton_videos/about-2.png";
import AOS from 'aos';

export default function About(){
    AOS.init();
    return(
        <Box
        sx={{
          width: "90vw",
          height: "120vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>關於本遊戲</Typography>
        <div className="container-md center gutter">
          <p >
          This is a MOCO challenge!!! 
          什麼是MOCO？MOCO是取自台大語言所近期釋出的多模態語料庫：<a href="https://multimoco.linguistics.ntu.edu.tw/index.html#content-stat"> MultiMoco NTU corpus</a><br/>
          本遊戲擷取一些立委及政治人物的質詢影片，做成去識別化的影片，讓玩家可以專注在說話者手勢的運用——<br/>
          你對不同模態的語言訊息夠敏銳嗎？是否有信心可以完成挑戰呢？<br/>
          （創作者：台大語言所 周昕妤、王伯雅）<br/>
         React project - <a href="https://github.com/amy011872/NlpWeb-Anno-Game">github</a>
          </p>
        </div>
        <div className="container-lg center">
          <div className="row">
            <img
              src={aboutPage}
              alt="The about page"
              className="about-page"
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </div>
        </div>
    </Box>
    )
}
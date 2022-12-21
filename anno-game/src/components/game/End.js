import { Typography } from "@mui/material";
import Video from "./Video";

export default function End({
    questions
}) {
    return (
        <>
            <div className="container-xl center">
                <div className="row">
                <Typography variant="h4">本遊戲影片素材：</Typography>
                {questions.map((quest) => (
                    <>
                        <div className="col-10">
                            <Video filename={quest.origin} key={quest.id} />
                            <Typography>{quest.speaker}：{quest.text}</Typography>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </>
    )
};

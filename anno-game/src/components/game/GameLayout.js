import Game from "./Game";
import { Typography } from "@mui/material";

export default function GameLayout() {

    return (
        <>
            <Typography variant="h3" color="#52796f" className="center" gutterBottom>
                MOCO Game
            </Typography>
            <Game title={'＿＿＿＿＿ 第一關：猜猜我說了什麼？ ＿＿＿＿＿'} />
            <Game title={'＿＿＿＿＿ 第二關：猜猜我是誰？ ＿＿＿＿＿'} />
        </>
    )
};
import { Typography } from "@mui/material";
import { useState } from "react";
import TTSButton from "./TTSButton";

export default function Hint({text, handleSkip, closePopup}) {
    const [hint, setHint] = useState([]);
    const [showHint, setShowHint] = useState(false);

    const handleShowHint = () => {
        setHint(text);
        setShowHint(true);
    };

    return (
        <div className="container center popup-container">
            <div className="col-2"></div>
            <div className="hint-box popup-body">
                <div>
                    <Typography variant="h5" className="center pad">Do you want a hint?</Typography>
                </div>
                <div className="center pad-little">
                    <button onClick={handleShowHint} className="pad-little btn btn-secondary">Sure</button>
                    <button onClick={handleSkip} className="pad-little btn btn-outline-secondary">Skip</button>
                </div>
                <div className="pad">
                    {showHint && (
                    <>
                        <div className="hint">
                            <Typography variant="h6">以下是轉寫他所說的內容轉寫成文字：</Typography>
                            <Typography variant="h7">{hint}</Typography>
                            <TTSButton optionText={hint}/>
                        </div>
                    </>
                    )}
                </div>
                <button className="btn btn-dark" onClick={closePopup}>Close X</button>
            </div>
        </div>
    )
};
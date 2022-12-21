export default function OptionBtn({
    optionText,
    speakMsg,
    optionClicked,
    correctness,
    needTTS
}){
    
    return(
        <>
            <div className="pad">
                <button onClick={() => optionClicked(correctness)} className='btn btn-outline-secondary'>
                    {optionText}
                </button>
            </div>
            {needTTS && (
                <div className="center">
                    <button onClick={() => speakMsg(optionText)} className="btn btn-outline-primary">
                        聽聽看
                    </button>
                </div>
            )}
        </>
    )
};
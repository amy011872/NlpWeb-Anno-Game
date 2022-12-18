export default function TTSbutton({
    optionText,
    optionClicked,
    correctness,
    needTTS
}){

    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.lang = 'zh';
    
    const speakMsg = (msg) => {
        msg.text = optionText;
        console.log(optionText);
        window.speechSynthesis.speak(msg);
    };
    

    return(
        <>
            <div className="pad">
                <button onClick={() => optionClicked(correctness)} className='btn btn-outline-secondary'>
                    {optionText}
                </button>
            </div>
            {needTTS && (
                <div className="center">
                <button onClick={() => speakMsg(msg)} className="btn btn-outline-primary">
                    聽聽看
                </button>
            </div>
            )}
        </>
    )
};
export default function TTSbutton({optionText, optionClicked, correctness}){

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
            <button onClick={() => optionClicked(correctness)} className='btn btn-outline-secondary pad'>
                {optionText}
            </button>
            <button onClick={() => speakMsg(msg)} className="btn btn-outline-primary pad">
                聽聽看
            </button>
        </>
    )
};
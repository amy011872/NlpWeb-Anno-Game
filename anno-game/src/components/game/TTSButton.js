export default function TTSButton({optionText}) {

    const speak = (optionText) => {
        const synth = window.speechSynthesis;
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10]; 
        /*
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 2; // From 0 to 2
        */
        msg.lang = 'zh';
        msg.text = optionText;
        console.log(optionText);
        synth.speak(msg);
      };
/*
    function speakNow() {
        const message = new SpeechSynthesisUtterance(optionText);
        let voices = window.speechSynthesis.getVoices();
        message.voice = voices[10]; 
        message.lang = "zh";
        speechSynthesis.speak(message);
        console.log('wrong again qq')
       }
*/
    
    return(
        <>
            <div className="center">
                <button onClick={() => speak(optionText)} className="btn btn-dark">
                    聽聽看
                </button>
            </div>
        </>
    )
};
import ma from "./ma.mp4";
import fei_01 from "./fei_01.mp4";
import fei_02 from "./fei_02.mp4";

const QuestionList = [
    {
        id: 1,
        text: '我希望，我們共同的台灣夢，能夠在我的第二任全部完成。讓我蓄積更大的勇氣跟能量帶領台灣人民。',
        speaker: '馬英九',
        video: ma,
        options: [
            { option_id: 1, text:'我希望，我們共同的台灣夢，能夠在我的第二任全部完成。讓我蓄積更大的勇氣跟能量帶領台灣人民。', isCorrect: true },
            { option_id: 2, text:'在愈來愈艱難的情況下，我們要共同努力，把前人留下的使命發揚光大。', isCorrect: false },
            { option_id: 3, text:'面對嚴峻疫情，我們更要堅守國土，不能讓外來病毒入侵。', isCorrect: false },
            
        ]
    },
    {
        id: 2,
        text: '我跟你講吼,你不講實話,今年一年時間我一定會拜託曾名中委員等等。',
        speaker: '費鴻泰',
        video: fei_01,
        options: [
            { option_id: 1, text:'帶領台灣人民。', isCorrect: false },
            { option_id: 2, text:'我跟你講吼,你不講實話,今年一年時間我一定會拜託曾名中委員等等。', isCorrect: true },
            { option_id: 3, text:'我蓄積更大的領台灣人民。', isCorrect: false },
            
        ]
    },
    {
        id: 3,
        text: '我們開秘密會議都給你查清楚!不要在這邊給我混!混!混了今天也混不到下個禮拜。再要請教一下...',
        speaker:  '費鴻泰',
        video: fei_02,
        options: [
            { option_id: 1, text:'蓄積更大人民。', isCorrect: false },
            { option_id: 2, text:'我們開秘密會議都給你查清楚!不要在這邊給我混!混!混了今天也混不到下個禮拜。再要請教一下...', isCorrect: true },
            { option_id: 3, text:'我蓄積領台灣人民。', isCorrect: false },
            
        ]
    }
]

export default QuestionList;
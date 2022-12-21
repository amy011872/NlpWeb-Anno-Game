import ma from "./ma.mp4";
import fei_01 from "./fei_01.mp4";
import fei_02 from "./fei_02.mp4";
import ma_origin from "./ma_original.mp4"
import fei01_origin from "./fei_01_original.mp4"
import fei02_origin from "./fei_02_original.mp4"

const QuestionList = [
    {
        id: 1,
        text: '我希望，我們共同的台灣夢，能夠在我的第二任全部完成。讓我蓄積更大的勇氣跟能量帶領台灣人民。',
        speaker: '馬英九',
        video: ma,
        origin: ma_origin,
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
        origin: fei01_origin,
        options: [
            { option_id: 1, text:'我承諾大家，我一定會做到，在我的任期四年內一定讓大家看到成果。', isCorrect: false },
            { option_id: 2, text:'我跟你講吼，你不講實話，今年一年時間我一定會拜託委員等等來處理。', isCorrect: true },
            { option_id: 3, text:'大家都給我注意一點，尤其是你吼，不要再讓我抓到小把柄。', isCorrect: false },
            
        ]
    },
    {
        id: 3,
        text: '我們開秘密會議都給你查清楚!不要在這邊給我混!混!混了今天也混不到下個禮拜。再要請教一下...',
        speaker:  '費鴻泰',
        video: fei_02,
        origin: fei02_origin,
        options: [
            { option_id: 1, text:'那邊那位太太，不要想插隊！我們在文明的都市裡日常採購，不要壞了這份共識。', isCorrect: false },
            { option_id: 2, text:'我們開秘密會議都給你查清楚！不要在這邊給我混！混！混了今天也混不到下個禮拜。', isCorrect: true },
            { option_id: 3, text:'街道上充滿了快樂的人群，大家都出來曬曬冬天的暖陽，終於揮別了台北綿綿的陰雨天。', isCorrect: false },
            
        ]
    }
]

export default QuestionList;
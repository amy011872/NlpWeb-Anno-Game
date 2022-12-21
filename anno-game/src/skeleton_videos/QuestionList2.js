import ma from "./ma.mp4";
import fei_01 from "./fei_01.mp4";
import fei_02 from "./fei_02.mp4";
import kao_02 from "./kao_02.mp4";
import jiang_02 from "./jiang_02.mp4";

const QuestionList2 = [
    {
        id: 1,
        text: '我希望，我們共同的台灣夢，能夠在我的第二任全部完成。讓我蓄積更大的勇氣跟能量帶領台灣人民。',
        speaker: '馬英九',
        video: ma,
        options: [
            { option_id: 1, text:'馬英九', isCorrect: true },
            { option_id: 2, text:'蔡英文', isCorrect: false },
            { option_id: 3, text:'王伯雅', isCorrect: false },
            { option_id: 4, text:'陳水扁', isCorrect: false },
            
        ]
    },
    {
        id: 2,
        text: '我跟你講吼,你不講實話,今年一年時間我一定會拜託曾名中委員等等。',
        speaker: '費鴻泰',
        video: fei_01,
        options: [
            { option_id: 1, text:'費鴻泰', isCorrect: true },
            { option_id: 2, text:'蘇貞昌', isCorrect: false },
            { option_id: 3, text:'馬英十', isCorrect: false },
            { option_id: 4, text:'林昶佐', isCorrect: false },
            
        ]
    },
    {
        id: 3,
        text: '我們開秘密會議都給你查清楚!不要在這邊給我混!混!混了今天也混不到下個禮拜。再要請教一下...',
        speaker: '費鴻泰',
        video: fei_02,
        options: [
            { option_id: 1, text:'謝舒凱', isCorrect: false },
            { option_id: 2, text:'蔡英文', isCorrect: false },
            { option_id: 3, text:'馬英文', isCorrect: false },
            { option_id: 4, text:'費鴻泰', isCorrect: true },
            
        ]
    },
    {
        id: 4,
        text: '還卡在第二年的進度，那我想請教一下未來三年我們是要飛的，才能夠快速地飛完這所有後面的時程嗎?請教一下主委。',
        speaker: '高虹安',
        video: kao_02,
        options: [
            { option_id: 1, text:'吳怡農', isCorrect: false },
            { option_id: 2, text:'高虹安', isCorrect: true },
            { option_id: 3, text:'陳時中', isCorrect: false },
            { option_id: 4, text:'蔣萬安', isCorrect: false },
            
        ]
    },
    {
        id: 5,
        text: '四次大停電，台電要了多少錢，納稅人的辛苦錢，為什麼？用到哪邊去？一事無成！',
        speaker: '蔣萬安',
        video: jiang_02,
        options: [
            { option_id: 1, text:'陳時中', isCorrect: false },
            { option_id: 2, text:'郭台銘', isCorrect: false },
            { option_id: 3, text:'黃偉哲', isCorrect: false },
            { option_id: 4, text:'蔣萬安', isCorrect: true },
            
        ]
    }
]

export default QuestionList2;
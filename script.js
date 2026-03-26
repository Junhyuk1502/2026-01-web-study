// 데이터 베이스
const kanaData = [
    { jp: 'あ', kr: '아' }, { jp: 'い', kr: '이' }, { jp: 'う', kr: '우' }, { jp: 'え', kr: '에' }, { jp: 'お', kr: '오' },
    { jp: 'か', kr: '카' }, { jp: 'き', kr: '키' }, { jp: 'く', kr: '쿠' }, { jp: 'け', kr: '케' }, { jp: 'こ', kr: '코' },
    { jp: 'さ', kr: '사' }, { jp: 'し', kr: '시' }, { jp: 'す', kr: '스' }, { jp: 'せ', kr: '세' }, { jp: 'そ', kr: '소' },
    { jp: 'た', kr: '타' }, { jp: 'ち', kr: '치' }, { jp: 'つ', kr: '츠' }, { jp: 'て', kr: '테' }, { jp: 'と', kr: '토' },
    { jp: 'な', kr: '나' }, { jp: 'に', kr: '니' }, { jp: 'ぬ', kr: '누' }, { jp: 'ね', kr: '네' }, { jp: 'の', kr: '노' },
    { jp: 'は', kr: '하' }, { jp: 'ひ', kr: '히' }, { jp: 'ふ', kr: '후' }, { jp: 'へ', kr: '헤' }, { jp: 'ほ', kr: '호' },
    { jp: 'ま', kr: '마' }, { jp: 'み', kr: '미' }, { jp: 'む', kr: '무' }, { jp: 'め', kr: '메' }, { jp: 'も', kr: '모' },
    { jp: 'や', kr: '야' }, { jp: 'ゆ', kr: '유' }, { jp: 'よ', kr: '요' },
    { jp: 'ら', kr: '라' }, { jp: '리', kr: '리' }, { jp: 'る', kr: '루' }, { jp: 'れ', kr: '레' }, { jp: 'ろ', kr: '로' },
    { jp: 'わ', kr: '와' }, { jp: 'を', kr: '오' }, { jp: 'ん', kr: '응' }
];

const gataData = [
    { jp: 'ア', kr: '아' }, { jp: 'イ', kr: '이' }, { jp: 'ウ', kr: '우' }, { jp: 'エ', kr: '에' }, { jp: 'オ', kr: '오' },
    { jp: 'カ', kr: '카' }, { jp: 'キ', kr: '키' }, { jp: 'ク', kr: '쿠' }, { jp: 'ケ', kr: '케' }, { jp: 'コ', kr: '코' },
    { jp: 'サ', kr: '사' }, { jp: 'シ', kr: '시' }, { jp: 'ス', kr: '스' }, { jp: 'セ', kr: '세' }, { jp: 'ソ', kr: '소' },
    { jp: 'タ', kr: '타' }, { jp: 'チ', kr: '치' }, { jp: 'ツ', kr: '츠' }, { jp: 'テ', kr: '테' }, { jp: 'ト', kr: '토' },
    { jp: 'ナ', kr: '나' }, { jp: 'ニ', kr: '니' }, { jp: 'ヌ', kr: '누' }, { jp: 'ネ', kr: '네' }, { jp: 'ノ', kr: '노' },
    { jp: 'ハ', kr: '하' }, { jp: 'ヒ', kr: '히' }, { jp: 'フ', kr: '후' }, { jp: 'ヘ', kr: '헤' }, { jp: 'ホ', kr: '호' },
    { jp: 'マ', kr: '마' }, { jp: 'ミ', kr: '미' }, { jp: 'ム', kr: '무' }, { jp: 'メ', kr: '메' }, { jp: 'モ', kr: '모' },
    { jp: 'ヤ', kr: '야' }, { jp: 'ユ', kr: '유' }, { jp: 'ヨ', kr: '요' },
    { jp: 'ラ', kr: '라' }, { jp: 'リ', kr: '리' }, { jp: 'ル', kr: '루' }, { jp: 'レ', kr: '레' }, { jp: 'ロ', kr: '로' },
    { jp: 'ワ', kr: '와' }, { jp: 'ヲ', kr: '오' }, { jp: 'ン', kr: '응' }
];

const wordData = [
    { jp: 'さくら', kr: '벚꽃' }, { jp: 'ねこ', kr: '고양이' }, { jp: 'いぬ', kr: '개' },
    { jp: 'あさ', kr: '아침' }, { jp: 'すし', kr: '초밥' }, { jp: 'まんが', kr: '만화' }
    { jp: 'せんせい', kr: '선생님' }, { jp: 'がくせい', kr: '학생' }, { jp: 'みず', kr: '물' },
    { jp: 'ごはん', kr: '밥' }, { jp: 'ともだ치', kr: '친구' }, { jp: 'かぞく', kr: '가족' },
    { jp: 'あめ', kr: '비' }, { jp: 'ゆき', kr: '눈' }, { jp: 'はな', kr: '꽃' },
    { jp: 'とり', kr: '새' }, { jp: 'さかな', kr: '물고기' }, { jp: 'にく', kr: '고기' },
    { jp: 'やさい', kr: '야채' }, { jp: 'くだもの', kr: '과일' }, { jp: 'がっこう', kr: '학교' },
    { jp: 'ほん', kr: '책' }, { jp: 'くるま', kr: '차' }, { jp: 'でんしゃ', kr: '기차' },
    { jp: 'ひこうき', kr: '비행기' }, { jp: 'うみ', kr: '바다' }, { jp: 'やま', kr: '산' },
    { jp: 'そら', kr: '하늘' }, { jp: 'たいよう', kr: '태양' }, { jp: 'つき', kr: '달' },
    { jp: 'ほし', kr: '별' }, { jp: 'かぜ', kr: '바람' }, { jp: 'はし', kr: '젓가락' },
    { jp: 'くつ', kr: '신발' }, { jp: 'とけい', kr: '시계' }, { jp: 'でんわ', kr: '전화' }
];

let score = 0;
let lives = 3;
let gameInterval;
let fallingWords = [];

// 화면 전환 함수
function showView(viewId) {
    ['menu', 'quiz-area', 'game-area', 'result-area', 'stats'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    if (viewId === 'game-area' || viewId === 'quiz-area') {
        document.getElementById('stats').classList.remove('hidden');
    }
}

// --- [게임 1: 발음 맞추기] ---
function startQuiz() {
    score = 0;
    lives = 3;
    updateStats();
    showView('quiz-area');
    nextQuizQuestion();
}

function nextQuizQuestion() {
    const quizPool = [...kanaData, ...gataData];
    const correct = quizPool[Math.floor(Math.random() * quizPool.length)];
    document.getElementById('char-display').innerText = correct.jp;
    
    let options = [correct.kr];
    while(options.length < 4) {
        const randomItem = quizPool[Math.floor(Math.random() * quizPool.length)];
        const randomKr = randomItem.kr;
        if(!options.includes(randomKr)) options.push(randomKr);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.style.width = "100%"; // 그리드 레이아웃에 맞춤
        btn.onclick = () => {
            if(opt === correct.kr) {
                score += 10;
                updateStats();
                nextQuizQuestion();
            } else {
                lives--;
                updateStats();
                if(lives <= 0) endGame();
            }
        };
        optionsDiv.appendChild(btn);
    });
}

// --- [게임 2: 단어 폭탄] ---
function startGame() {
    score = 0;
    lives = 3;
    fallingWords = [];
    document.getElementById('falling-container').innerHTML = '';
    updateStats();
    showView('game-area');
    document.getElementById('word-input').value = '';
    document.getElementById('word-input').focus();
    gameInterval = setInterval(createFallingWord, 2000);
    requestAnimationFrame(updateFallingWords);
}

function createFallingWord() {
    if (lives <= 0) return;
    const word = wordData[Math.floor(Math.random() * wordData.length)];
    const element = document.createElement('div');
    element.className = 'falling-word';
    element.innerText = word.jp;
    element.style.left = Math.random() * 70 + 5 + '%';
    element.style.top = '-20px';
    
    const wordObj = { el: element, kr: word.kr, top: -20 };
    document.getElementById('falling-container').appendChild(element);
    fallingWords.push(wordObj);
}

function updateFallingWords() {
    if (lives <= 0) return;

    for (let i = fallingWords.length - 1; i >= 0; i--) {
        const word = fallingWords[i];
        word.top += 1.0; // 떨어지는 속도 조절
        word.el.style.top = word.top + 'px';

        if (word.top > 270) { // 바닥 접촉 판정 (컨테이너 높이 고려)
            word.el.remove();
            fallingWords.splice(i, 1);
            lives--;
            updateStats();
            if (lives <= 0) {
                endGame();
                return;
            }
        }
    }

    if (lives > 0) requestAnimationFrame(updateFallingWords);
}

// 입력 확인
document.getElementById('word-input').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const foundIndex = fallingWords.findIndex(w => w.kr === val);
    
    if (foundIndex !== -1) {
        fallingWords[foundIndex].el.style.background = '#ff94ab';
        fallingWords[foundIndex].el.style.color = 'white';
        
        const targetWord = fallingWords[foundIndex];
        setTimeout(() => {
            if (targetWord.el.parentNode) targetWord.el.remove();
        }, 150);
        
        fallingWords.splice(foundIndex, 1);
        score += 1;
        updateStats();
        e.target.value = '';
    }
});

// --- [공통 로직] ---
function updateStats() {
    document.getElementById('score').innerText = score;
    document.getElementById('lives').innerText = lives;
}

function endGame() {
    clearInterval(gameInterval);
    showView('result-area');
    document.getElementById('final-score').innerText = score;
}
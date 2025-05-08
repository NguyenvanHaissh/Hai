const DanhSach = [
    {
        cauhoi: "Bài hát bạn yêu thích nhất ?",
        listDapan : [
            {text : "Thẩm viên ngoại", ketqua: true},
            {text : "Chúc chúng ta lần sau khóc", ketqua : false},
            {text : "Track06 x Nơi này có anh", ketqua : false},
            {text : "Hiểu ta", ketqua : false}
        ]
    },
    {
        cauhoi : "Phim hhtq3d bạn yêu thích nhất là?",
        listDapan : [
            {text : "Tiên nghịch", ketqua : false},
            {text : "phàm nhân tu tiêntiên", ketqua : true},
            {text : "Đấu phá thương khung", ketqua : false},
            {text : "Mục thần ký", ketqua : false}
        ]
    },
    {
        cauhoi : "Bạn thích ngôn ngữ lập trình nào nhất?",
        listDapan : [
            {text : "Java", ketqua : false},
            {text : "python", ketqua : false},
            {text : "JavaScript", ketqua : true},
            {text : "html", ketqua : false}
        ]
    },
    {
        cauhoi : "Bạn thành thục ngôn ngữ nào nhất?",
        listDapan : [
            {text : "java", ketqua : false},
            {text : "Html", ketqua : false},
            {text : "JavaScript", ketqua : false},
            {text : "cả 3 đáp án trên.", ketqua : true}
        ]
    }
];
let questIndex = document.getElementById("question");
let answerBlock = document.getElementById("answer-buttons");
let nextBtn = document.querySelector(".nextBtn");
let effec = document.querySelector(".effect");

let currentQuestIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestIndex = 0;
    score = 0;
    showQuestion();
}
function showQuestion(){
    resetElement();
    let currentIndex = DanhSach[currentQuestIndex];
    let dem = currentQuestIndex + 1;
    questIndex.innerHTML = dem +". "+ currentIndex.cauhoi;

    currentIndex.listDapan.forEach((value,index,arrays)=>{
        const button = document.createElement("button");
        button.innerHTML = value.text;
        button.classList.add("btn");
        answerBlock.appendChild(button);
        if(value.ketqua){
            button.dataset.ketqua = value.ketqua;
        }
        button.addEventListener("click", kiemTraKQ);
    })
}
function resetElement(){
    nextBtn.style.display = "none";
    while(answerBlock.firstChild){
        answerBlock.removeChild(answerBlock.firstChild);
    }
}
function kiemTraKQ(e){
    let ele = e.target;
    let ptChon = ele.dataset.ketqua === "true";
    if(ptChon){
        ele.classList.add("eleTrue");
        score++;
    }else{
        ele.classList.add("eleFalse");
    }

    Array.from(answerBlock.children).forEach(value =>{
        if(value.dataset.ketqua){
            value.classList.add("eleTrue");
        }
        value.disabled = "true";
    })
    nextBtn.style.display = "block";
}
function ketThuc(){
    resetElement();
    questIndex.innerHTML = `Số điểm của bạn là ${score}`;
    nextBtn.style.display ="block";
    nextBtn.innerHTML = "<span></span><span></span><span></span><span></span> Kết Thúc";
}
function chuyenTiep(){
    currentQuestIndex++;
    if(currentQuestIndex < DanhSach.length){
        showQuestion();
    }else{
        ketThuc();
    }

}
nextBtn.addEventListener("click",()=>{
    if(currentQuestIndex < DanhSach.length){
        chuyenTiep();
    }else{
        startQuiz();
    }
})
startQuiz();

function snowEffect(){
    let snow = document.createElement("span");
    snow.innerHTML = '*';
    snow.classList.add("snow");
    snow.style.left = `${Math.random()*99}vw`;
    snow.style.fontSize = `${Math.random()*10 + 35}px`;
    snow.style.opacity = Math.random();
    snow.style.animationDuration = `${Math.random()*3 + 5}s`;
    snow.style.transform = `translateZ(${Math.random()*600}px)`;
    snow.style.transform = `rotate3D(10,50,40,180deg)`;
    effec.appendChild(snow);
    setTimeout(()=>{
        snow.remove();
    },4000);
}
setInterval(snowEffect,50);
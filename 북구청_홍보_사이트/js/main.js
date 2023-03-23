// main.html 전용 JS - main.js //

// index.html에서 넘어온 데이터 변수에 담기
let pm = location.href;
// console.log(pm.indexOf("?"));
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다~!");
    location.href = "index.html";
    // 클릭해서 들어오는 메인으로 돌려보냄!
}
pm = pm.split("?")[1];
pm = pm.split("=")[1];
pm = decodeURIComponent(pm);
// console.log(pm);

window.addEventListener("DOMContentLoaded", function () {
    // gnb 목록을 뭘 누르냐에 따라 동영상 정보와 배경색 변경하기
    const vd = document.querySelector("video");
    // console.log(vd);
    const movie = document.querySelector(".video");
    // console.log(movie);
    const movie_name = document.querySelector(".video>span");
    console.log(movie_name);
    const mainBg = document.querySelector("body.on");
    // console.log(mainBg);

    vd.src = sdata[pm]["동영상"];
    movie_name.innerText = pm;
    mainBg.style.background = `url(./img/${sdata[pm]["배경색"]}.jpg) no-repeat fixed right/cover`;

    // 좌측 서브 메뉴에 목록 생성하기
    const gnbL = document.querySelector(".gnbL");
    let hcode = "";
    for (let tm in sdata[pm]["사이드메뉴"]) {
        hcode += `
        <div class="m_name"><span>${tm}</span>
        <ul>
        `;
        for (let sm in sdata[pm]["사이드메뉴"][tm]) {
            hcode += `<li><a class="lA" href="#">${sm}</a></li>`;
        }
        hcode += `</ul></div>`;
    }
    gnbL.innerHTML = hcode;

    // 좌측 서브 메뉴 높이값 설정하기
    const mName = document.querySelectorAll(".m_name");
    // console.log(mName);

    for (let x of mName) {
        const Y = x.querySelector("span");
        // console.log(Y);
        const Z = x.querySelector("ul");
        // console.log(Z);
        const L = Z.querySelectorAll("li").length;
        // console.log(L);
        Z.style.height = L * 34 + 18 + "px";

        // 좌측 서브 메뉴 열고 닫는 기능 추가하기
        let num = 1;
        Y.onclick = () => {
            if (num === 1) {
                Y.style.borderBottom = "5px solid #3769aa";
                Z.style.height = "0";
                // Z.style.cssText = 'height :0; overflow: hidden';
            } else {
                Y.style.borderBottom = "5px solid #339e67";
                Z.style.height = L * 34 + 18 + "px";
                // Z.style.cssText = 'height :auto; overflow: hidden';
            }
            num = num * -1;
        };
    }

    // 좌측 서브 메뉴 클릭시 확인하기 쉽게 표시 남겨두기
    var lA = document.getElementsByClassName("lA");
    function handleClick(event) {
        // console.log(event.target);
        // console.log(this);
        // 콘솔창을 보면 둘다 동일한 값이 나온다

        // console.log(event.target.classList.contains("change_color"));
        if (event.target.classList.contains("change_color")) return;

        if (event.target.classList[1] === "change_color") {
            event.target.classList.remove("change_color");
        } else {
            for (var i = 0; i < lA.length; i++) {
                lA[i].classList.remove("change_color");
            }
            event.target.classList.add("change_color");
        }

        if (event.target.innerText === "효동초등학교") {
            console.log("성공05");
        } else if (event.target.innerText === "용주초등학교") {
            console.log("성공06");
        } else if (event.target.innerText === "마을활동가 토크쇼") {
            console.log("성공07");
        } else if (event.target.innerText === "탄소중립 그린마을 동행") {
            console.log("성공08");
        }
    }
    function init() {
        for (var i = 0; i < lA.length; i++) {
            lA[i].addEventListener("click", handleClick);
        }
    }
    init();

    // 각 좌측 서브메뉴 클릭시 동영상 정보 변경하기
    const lmA = document.querySelectorAll(".m_name a");
    // console.log(lmA);

    const setCd = (btxt,mv) => {
        
        vd.src = "./video/"+mv+".mp4";
        vd.muted = false;
        movie_name.innerText = btxt;

    }; ////////// setCd ////////////////

    for (let x of lmA) {
        let btxt = x.innerText;
        console.log(btxt);
        x.onclick = () => {
            event.preventDefault();
            switch (btxt) {
                // mdata01 //
                case "중흥3동주민자치위원회":
                    setCd(btxt,"1A01");
                    break;
                case "신안동주민자치위원회":
                    vd.src = "./video/1A02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동주민자치회":
                    vd.src = "./video/1A03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암3동주민자치회(1)":
                    vd.src = "./video/1A04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암3동주민자치회(2)":
                    vd.src = "./video/1A05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문화동주민자치회":
                    vd.src = "./video/1A06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문흥1동주민자치회(1)":
                    vd.src = "./video/1A07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문흥1동주민자치회(2)":
                    vd.src = "./video/1A08.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암3동주민자치위원회":
                    vd.src = "./video/1A09.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "석곡동주민자치위원회":
                    vd.src = "./video/1A10.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "양산동주민자치회":
                    vd.src = "./video/1A11.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "중흥2동_몸맘살림":
                    vd.src = "./video/1A12.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "중흥2동_쓰담쓰담 예술나눔":
                    vd.src = "./video/1A13.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "신안동_빛고을공예협동조합":
                    vd.src = "./video/1A14.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동_용봉마을연극단":
                    vd.src = "./video/1A15.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암1동_벽산블루밍 운암메가씨티3단지":
                    vd.src = "./video/1A16.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암1동_벽산블루밍1단지 마을여성회":
                    vd.src = "./video/1A17.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암2동_운암2동 365민생행복지원단":
                    vd.src = "./video/1A18.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동_행복한공동체 모다":
                    vd.src = "./video/1A19.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동_동림동지역사회보장협의체":
                    vd.src = "./video/1A20.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "우산동_기마전아트공동체":
                    vd.src = "./video/1A21.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "우산동_꿈나무사회복지관":
                    vd.src = "./video/1A22.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "풍향동_코리아문화예술단":
                    vd.src = "./video/1A23.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문화동_각화종합사회복지관":
                    vd.src = "./video/1A24.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문흥2동_문흥골목대장":
                    vd.src = "./video/1A25.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암3동_두암종합사회복지관":
                    vd.src = "./video/1A26.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암3동_무등종합사회복지관":
                    vd.src = "./video/1A27.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동_오치종합사회복지관":
                    vd.src = "./video/1A28.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동_대금연주단 여울림":
                    vd.src = "./video/1A29.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "석곡동_원시인마을":
                    vd.src = "./video/1A30.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "석곡동_월산마을번영회":
                    vd.src = "./video/1A31.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "양산동_교육네트워크희망팩토리":
                    vd.src = "./video/1A32.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "양산동_연제주공아파트관리소":
                    vd.src = "./video/1A33.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "양산동_JS뮤지션스그룹":
                    vd.src = "./video/1A34.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "신용동_신용동지역사회보장협의체":
                    vd.src = "./video/1A35.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "신용동_꿈틀어린이작은도서관":
                    vd.src = "./video/1A36.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "북구_동운마을기후환경연합공동체'이음'":
                    vd.src = "./video/1A37.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "북구_광주북구문화예술연합":
                    vd.src = "./video/1A38.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "북구_북구마을네트워크":
                    vd.src = "./video/1A39.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;

                case "중흥2동_광주역다사로움아파트":
                    vd.src = "./video/1B01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동_비건어게인":
                    vd.src = "./video/1B02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동_광주5·18청소년오케스트라":
                    vd.src = "./video/1B03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암1동_대주아파트입주자대표회의":
                    vd.src = "./video/1B04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암1동_운암 빛고을 봉사단":
                    vd.src = "./video/1B05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암2동_글로벌노르딕워킹협회":
                    vd.src = "./video/1B06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동_그린뉴딜 공동체 우아미":
                    vd.src = "./video/1B07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동_친수마을사랑수레":
                    vd.src = "./video/1B08.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동_동림주공2차경로당":
                    vd.src = "./video/1B09.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "우산동_우산3사랑회":
                    vd.src = "./video/1B10.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문화동_각화사랑회":
                    vd.src = "./video/1B11.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문흥1동_문흥1동아파트자치회연합회":
                    vd.src = "./video/1B12.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암2동 두암동무등파크":
                    vd.src = "./video/1B13.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암2동_해성숲사랑":
                    vd.src = "./video/1B14.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동_자연드러와":
                    vd.src = "./video/1B15.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동_국제공예문화총연합회 광주지부":
                    vd.src = "./video/1B16.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치2동_올치오치":
                    vd.src = "./video/1B17.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "양산동_광주샛별마을공동체":
                    vd.src = "./video/1B18.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;

                case "운암1동해오름마을공동체":
                    vd.src = "./video/1C01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동주민협의체":
                    vd.src = "./video/1C02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치2동주민자치위원회":
                    vd.src = "./video/1C03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "석곡무등산마을협의회":
                    vd.src = "./video/1C04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;

                // mdata02 //
                case "운암권역":
                    vd.src = "./video/2A01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문화권역":
                    vd.src = "./video/2A02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "일곡권역":
                    vd.src = "./video/2A03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉권역":
                    vd.src = "./video/2A04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "두암권역":
                    vd.src = "./video/2A05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "중흥권역":
                    vd.src = "./video/2A06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을복지":
                    vd.src = "./video/2A07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "기후환경":
                    vd.src = "./video/2A08.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "문화예술·도시재생":
                    vd.src = "./video/2A09.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "사회적 경제 이해":
                    vd.src = "./video/2B01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "정부 사업에 대한 이해":
                    vd.src = "./video/2B02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을 자원 발굴":
                    vd.src = "./video/2B03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을 자원 연계 사회적 경제 모델 구축":
                    vd.src = "./video/2B04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을 내 경제 조직 구성":
                    vd.src = "./video/2B05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "서류 작성 및 준비 Ⅰ":
                    vd.src = "./video/2B06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "서류 작성 및 준비 Ⅱ":
                    vd.src = "./video/2B07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "생활 속 탄소중립 실천마을":
                    vd.src = "./video/2C01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "자원순환 마을 만들기":
                    vd.src = "./video/2C02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "환경기초시설 견학":
                    vd.src = "./video/2C03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "생활 속 업사이클링 아트마을":
                    vd.src = "./video/2C04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을 속 도시농업":
                    vd.src = "./video/2C05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "수료식":
                    vd.src = "./video/2C06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "마을미디어 콘텐츠 이해":
                    vd.src = "./video/2C07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "기획 및 촬연":
                    vd.src = "./video/2C08.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "녹화 및 편집":
                    vd.src = "./video/2C09.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "편집 및 업로드":
                    vd.src = "./video/2C10.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "360 VR 사진촬영을 활용한 마을 아카이브":
                    vd.src = "./video/2C11.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "3D 사진촬영을 활용한 마을 아카이브":
                    vd.src = "./video/2C12.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "메타버스를 활용한 마을 아카이브":
                    vd.src = "./video/2C13.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;

                // mdata03 //
                case "북구마을 분쟁해결 지원센터":
                    vd.src = "./video/3A01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "임동 세대공감":
                    vd.src = "./video/3B01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "신안동 징검다리":
                    vd.src = "./video/3B02.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동 두루모아":
                    vd.src = "./video/3B03.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "용봉동 아름다운 화해":
                    vd.src = "./video/3B04.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "운암1동 이심(⼼)전심(⼼)":
                    vd.src = "./video/3B05.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "동림동 오손도손 사랑방":
                    vd.src = "./video/3B06.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "삼각동 들樂날樂":
                    vd.src = "./video/3B07.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "일곡동 행복나눔 사랑방":
                    vd.src = "./video/3B08.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치1동 한울타리":
                    vd.src = "./video/3B09.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "오치2동 오치골":
                    vd.src = "./video/3B10.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;

                // mdata04 //
                case "효동초등학교":
                    // vd.src = "./video/1A01.mp4";
                    // vd.muted = false;
                    movie_name.innerText = btxt;
                    console.log(movie_name);
                    break;
                case "용주초등학교":
                    vd.src = "./video/1A01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    console.log(movie_name.parentElement);
                    break;
                case "마을활동가 토크쇼":
                    vd.src = "./video/1A01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
                case "탄소중립 그린마을 동행":
                    vd.src = "./video/1A01.mp4";
                    vd.muted = false;
                    movie_name.innerText = btxt;
                    break;
            }
        };
    }
    // 부록 목록에는 별도의 정보 삽입하기
    const makeCode = (hcd) => `
        <div class="abc">
            <span><p class="ddd">▶</p>  설명 제목</span>
            <div class="def">
                ${hcd}
            </div>
        </div>
    `;

    if (pm === "부록") {
        console.log("성공01");
        movie.querySelector(".tspan").innerHTML += makeCode(`
            <span>
                찾아가는 어린이 환경리더 교육<br />
                <br />
                "학교 안 탄소중립 실천" 찾아가는 어린이 환경리더 교육<br />
                지구를 살리는 자원순환 교육 및 올바른 분리배출 실습과 환경캠페인 활동<br />
                <br />
                ● 효동초등학교<br />
                - 일시 : 22. 10. 5.(수) ~ 10. 19.(수)<br />
                - 대상 : 효동초등학교 3학년
            </span>
        `);
    } else if (pm === "찾아가는어린이환경리더교육") {
        console.log("성공02");
        movie.innerHTML += makeCode(`찾아가는어린이환경리더교육`);
    } else if (pm === "마을활동가토크쇼") {
        console.log("성공03");
        movie.innerHTML += makeCode(`마을활동가토크쇼`);
    } else if (pm === "탄소중립그린마을동행") {
        console.log("성공04");
        movie.innerHTML += makeCode(`탄소중립그린마을동행`);
    }

    const abc = document.querySelector(".abc span");
    if(abc){
        const ddd = document.querySelector(".ddd");
        const def = document.querySelector(".def");
        let onoff = -1;
        abc.onclick = () => {
            if (onoff === 1) {
                ddd.style.transform = "rotate(0)";
                def.style.height = "0";
                def.style.border = "0px solid #fff";
            } else {
                ddd.style.transform = "rotate(90deg)";
                def.style.height = "500px";
                def.style.border = "2px solid #fff";
            }
            onoff = onoff * -1;
            // console.log(onoff);
        };
    }
});

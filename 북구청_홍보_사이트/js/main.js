// main.html 전용 JS - main.js //

///// 0. index.html에서 넘어온 데이터 변수에 담기
let pm = location.href;
// console.log(pm.indexOf("?"));
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다~!");
    location.href = "index.html";
    // 메인으로 돌려보냄!
}
pm = pm.split("?")[1];
pm = pm.split("=")[1];
pm = decodeURIComponent(pm);
// console.log(pm);

window.addEventListener("DOMContentLoaded", function () {   

    ///// 1. main.html의 빈곳을 채워준다. (#top은 common.js에서 채워준다.)
    const main_cont = document.querySelector("#cont");
    // console.log(main_cont);

    main_cont.innerHTML = `
        <!-- 2-1. 좌측 서브 메뉴 -->
        <nav class="gnbL scbar"></nav>
        <!-- 2-2. 동영상 -->
        <div class="movie">
            <span></span>
            <video src="" autoplay controls muted></video>
            <div class="exp"></div>
        </div>
    `;

    ///// 2. 상단 메뉴를 무엇을 눌렀는지에 따라 좌측 서브 메뉴 내용물 채우기
    const gnb_left = document.querySelector(".gnbL");
    // console.log(gnb_left);
    let aa = pm;
    if((aa === "마을공동체 활성화 지원사업")||(aa === "마을모임 지원사업")||(aa === "광주형 협치마을 모델사업")){aa="마을 공동체";}
    if((aa === "洞 마을의제 실행력 제고 워크숍")||(aa === "분야별 성장지원 워크숍")||(aa === "사회적 경제기반 교육")||(aa === "마을환경 실천활동가 양성교육")||(aa === "마을미디어 주민활동가 양성교육")){aa="미래 학교";}
    if((aa === "북구마을 분쟁해결 지원센터")||(aa === "소통방")){aa="마을 분쟁 해결 지원센터";}
    if((aa === "찾아가는 어린이 환경리더 교육")||(aa === "마을활동가 토크쇼")||(aa === "탄소중립 그린마을 동행")){aa="부록";}
    // console.log(aa);
    let codeL = "";
    for (let tm in click_data[aa][0]) {
        // console.log(tm);
        codeL += `
        <div class="l_menu"><span>${tm}</span>
        <ul>
        `;
        for (let sm in click_data[aa][0][tm]) {
            // console.log(sm);
            codeL += `<li><a class="a_click" href="#">${click_data[aa][0][tm][sm]}</a></li>`;
        }
        codeL += `</ul></div>`;
    }
    gnb_left.innerHTML = codeL;

    ///// 3. 좌측 서브 메뉴 높이값 설정하기
    const menuL = document.querySelectorAll(".l_menu");
    // console.log(menuL);

    for (let x of menuL) {
        const spanL = x.querySelector("span");
        // console.log(spanL);
        const ulL = x.querySelector("ul");
        // console.log(ulL);
        const liLen = ulL.querySelectorAll("li").length;
        // console.log(liLen);
        ulL.style.height = liLen * 34 + 18 + "px";

        ///// 5. 좌측 서브 메뉴 열고 닫는 기능 추가하기
        let num = 1;
        spanL.onclick = () => {
            if (num === 1) {
                spanL.style.borderBottom = "5px solid #3769aa";
                ulL.style.height = "0";
                // ulL.style.cssText = 'height :0; overflow: hidden';
            } else {
                spanL.style.borderBottom = "5px solid #339e67";
                ulL.style.height = liLen * 34 + 18 + "px";
                // ulL.style.cssText = 'height :auto; overflow: hidden';
            }
            num = num * -1;
        };
    }

    ///// 6. 좌측 서브 메뉴 클릭시 확인하기 쉽게 표시 남겨두기
    let clickA = document.getElementsByClassName("a_click");
    function handleClick(event) {
        // console.log(event.target);
        // console.log(this);
        // 콘솔창을 보면 둘다 동일한 값이 나온다

        // 2번 클릭시 표시가 사라지지 않게 return하기
        if (event.target.classList.contains("change_color")) return;

        if (event.target.classList[1] === "change_color") {
            event.target.classList.remove("change_color");
        } else {
            for (var i = 0; i < clickA.length; i++) {
                clickA[i].classList.remove("change_color");
            }
            event.target.classList.add("change_color");
        }
    }
    function init() {
        for (var i = 0; i < clickA.length; i++) {
            clickA[i].addEventListener("click", handleClick);
        }
    }
    init();

    ///// 7. 상단 메뉴중 어떤 것을 누르는지에 따라 각종 정보 변경하기
    const mainBody = document.querySelector("body");
    // console.log(mainBody);
    const movie = document.querySelector(".movie");
    // console.log(movie);
    const movie_name = document.querySelector(".movie>span");
    // console.log(movie_name);
    const vd = document.querySelector("video");
    // console.log(vd);

    mainBody.style.background = `url(./img/${click_data[aa][1]}.jpg) no-repeat fixed right/cover`;
    if(pm === "마을 공동체"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "마을공동체 활성화 지원사업"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "마을모임 지원사업"){
        vd.src = click_data[aa][3];
    }
    else if(pm === "광주형 협치마을 모델사업"){
        vd.src = click_data[aa][4];
    }
    else if(pm === "미래 학교"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "洞 마을의제 실행력 제고 워크숍"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "분야별 성장지원 워크숍"){
        vd.src = click_data[aa][3];
    }
    else if(pm === "사회적 경제기반 교육"){
        vd.src = click_data[aa][4];
    }
    else if(pm === "마을환경 실천활동가 양성교육"){
        vd.src = click_data[aa][5];
    }
    else if(pm === "마을미디어 주민활동가 양성교육"){
        vd.src = click_data[aa][6];
    }
    else if(pm === "마을 분쟁 해결 지원센터"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "북구마을 분쟁해결 지원센터"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "소통방"){
        vd.src = click_data[aa][3];
    }
    else if(pm === "부록"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "찾아가는 어린이 환경리더 교육"){
        vd.src = click_data[aa][2];
    }
    else if(pm === "마을활동가 토크쇼"){
        vd.src = click_data[aa][3];
    }
    else if(pm === "탄소중립 그린마을 동행"){
        vd.src = click_data[aa][4];
    }
    movie_name.innerText = pm;

    ///// 8. 좌측 서브 메뉴 클릭시 동영상 정보 변경하기
    const lmA = document.querySelectorAll(".l_menu a");
    // console.log(lmA);
    const setCd = (txt,mv) => {
        vd.src = "./video/"+mv+".mp4";
        vd.muted = false;
        movie_name.innerText = txt;
    }; // setCd //
    
    for (let x of lmA) {
        let ltxt = x.innerText;
        // console.log(ltxt);
        x.onclick = () => {
            event.preventDefault();
            switch (ltxt) {
                // mdata01 //
                case "중흥3동 주민자치위원회":
                    setCd(ltxt,"1A01");
                    break;
                case "신안동 주민자치위원회":
                    setCd(ltxt,"1A02");
                    break;
                case "용봉동 주민자치회":
                    setCd(ltxt,"1A03");
                    break;
                case "운암3동 주민자치회(1)":
                    setCd(ltxt,"1A04");
                    break;
                case "운암3동 주민자치회(2)":
                    setCd(ltxt,"1A05");
                    break;
                case "문화동 주민자치회":
                    setCd(ltxt,"1A06");
                    break;
                case "문흥1동 주민자치회(1)":
                    setCd(ltxt,"1A07");
                    break;
                case "문흥1동 주민자치회(2)":
                    setCd(ltxt,"1A08");
                    break;
                case "두암3동 주민자치위원회":
                    setCd(ltxt,"1A09");
                    break;
                case "석곡동 주민자치위원회":
                    setCd(ltxt,"1A10");
                    break;
                case "양산동 주민자치회":
                    setCd(ltxt,"1A11");
                    break;
                case "중흥2동 몸맘살림":
                    setCd(ltxt,"1A12");
                    break;
                case "중흥2동 쓰담쓰담 예술나눔":
                    setCd(ltxt,"1A13");
                    break;
                case "신안동 빛고을 공예 협동조합":
                    setCd(ltxt,"1A14");
                    break;
                case "용봉동 용봉마을 연극단":
                    setCd(ltxt,"1A15");
                    break;
                case "운암1동 벽산블루밍 운암메가씨티3단지":
                    setCd(ltxt,"1A16");
                    break;
                case "운암1동 벽산블루밍1단지 마을여성회":
                    setCd(ltxt,"1A17");
                    break;
                case "운암2동 365민생행복지원단":
                    setCd(ltxt,"1A18");
                    break;
                case "동림동 행복한 공동체 모다":
                    setCd(ltxt,"1A19");
                    break;
                case "동림동 동림동 지역사회 보장협의체":
                    setCd(ltxt,"1A20");
                    break;
                case "우산동 기마전 아트공동체":
                    setCd(ltxt,"1A21");
                    break;
                case "우산동 꿈나무 사회복지관":
                    setCd(ltxt,"1A22");
                    break;
                case "풍향동 코리아 문화예술단":
                    setCd(ltxt,"1A23");
                    break;
                case "문화동 각화 종합사회복지관":
                    setCd(ltxt,"1A24");
                    break;
                case "문흥2동 문흥 골목대장":
                    setCd(ltxt,"1A25");
                    break;
                case "두암3동 두암 종합사회복지관":
                    setCd(ltxt,"1A26");
                    break;
                case "두암3동 무등 종합사회복지관":
                    setCd(ltxt,"1A27");
                    break;
                case "오치1동 오치 종합사회복지관":
                    setCd(ltxt,"1A28");
                    break;
                case "오치1동 대금연주단 여울림":
                    setCd(ltxt,"1A29");
                    break;
                case "석곡동 원시인마을":
                    setCd(ltxt,"1A30");
                    break;
                case "석곡동 월산 마을번영회":
                    setCd(ltxt,"1A31");
                    break;
                case "양산동 교육네트워크 희망팩토리":
                    setCd(ltxt,"1A32");
                    break;
                case "양산동 연제 주공아파트관리소":
                    setCd(ltxt,"1A33");
                    break;
                case "양산동 JS뮤지션스그룹":
                    setCd(ltxt,"1A34");
                    break;
                case "신용동 신용동 지역사회 보장협의체":
                    setCd(ltxt,"1A35");
                    break;
                case "신용동 꿈틀어린이 작은도서관":
                    setCd(ltxt,"1A36");
                    break;
                case "북구 동운마을 기후환경 연합공동체'이음'":
                    setCd(ltxt,"1A37");
                    break;
                case "북구 광주북구 문화예술연합":
                    setCd(ltxt,"1A38");
                    break;
                case "북구 북구 마을네트워크":
                    setCd(ltxt,"1A39");
                    break;

                case "중흥2동 광주역 다사로움 아파트":
                    setCd(ltxt,"1B01");
                    break;
                case "용봉동 비건 어게인":
                    setCd(ltxt,"1B02");
                    break;
                case "용봉동 광주5·18 청소년 오케스트라":
                    setCd(ltxt,"1B03");
                    break;
                case "운암1동 대주아파트 입주자 대표회의":
                    setCd(ltxt,"1B04");
                    break;
                case "운암1동 운암 빛고을 봉사단":
                    setCd(ltxt,"1B05");
                    break;
                case "운암2동 글로벌 노르딕 워킹협회":
                    setCd(ltxt,"1B06");
                    break;
                case "동림동 그린뉴딜 공동체 우아미":
                    setCd(ltxt,"1B07");
                    break;
                case "동림동 친수마을 사랑수레":
                    setCd(ltxt,"1B08");
                    break;
                case "동림동 동림주공2차 경로당":
                    setCd(ltxt,"1B09");
                    break;
                case "우산동 우산3사랑회":
                    setCd(ltxt,"1B10");
                    break;
                case "문화동 각화사랑회":
                    setCd(ltxt,"1B11");
                    break;
                case "문흥1동 아파트 자치회연합회":
                    setCd(ltxt,"1B12");
                    break;
                case "두암2동 두암동무등파크":
                    setCd(ltxt,"1B13");
                    break;
                case "두암2동 해성숲사랑":
                    setCd(ltxt,"1B14");
                    break;
                case "오치1동 자연드러와":
                    setCd(ltxt,"1B15");
                    break;
                case "오치1동 국제공예문화 총연합회 광주지부":
                    setCd(ltxt,"1B16");
                    break;
                case "오치2동 올치오치":
                    setCd(ltxt,"1B17");
                    break;
                case "양산동 광주샛별마을 공동체":
                    setCd(ltxt,"1B18");
                    break;

                case "운암1동 해오름 마을공동체":
                    setCd(ltxt,"1C01");
                    break;
                case "오치1동 주민협의체":
                    setCd(ltxt,"1C02");
                    break;
                case "오치2동 주민자치위원회":
                    setCd(ltxt,"1C03");
                    break;
                case "석곡무등산 마을협의회":
                    setCd(ltxt,"1C04");
                    break;

                // mdata02 //
                case "운암권역":
                    setCd(ltxt,"2A01");
                    break;
                case "문화권역":
                    setCd(ltxt,"2A02");
                    break;
                case "일곡권역":
                    setCd(ltxt,"2A03");
                    break;
                case "용봉권역":
                    setCd(ltxt,"2A04");
                    break;
                case "두암권역":
                    setCd(ltxt,"2A05");
                    break;
                case "중흥권역":
                    setCd(ltxt,"2A06");
                    break;
                case "마을복지":
                    setCd(ltxt,"2A07");
                    break;
                case "기후환경":
                    setCd(ltxt,"2A08");
                    break;
                case "문화예술·도시재생":
                    setCd(ltxt,"2A09");
                    break;
                case "사회적 경제 이해":
                    setCd(ltxt,"2B01");
                    break;
                case "정부 사업에 대한 이해":
                    setCd(ltxt,"2B02");
                    break;
                case "마을 자원 발굴":
                    setCd(ltxt,"2B03");
                    break;
                case "마을 자원 연계 사회적 경제 모델 구축":
                    setCd(ltxt,"2B04");
                    break;
                case "마을 내 경제 조직 구성":
                    setCd(ltxt,"2B05");
                    break;
                case "서류 작성 및 준비 Ⅰ":
                    setCd(ltxt,"2B06");
                    break;
                case "서류 작성 및 준비 Ⅱ":
                    setCd(ltxt,"2B07");
                    break;
                case "생활 속 탄소중립 실천마을":
                    setCd(ltxt,"2C01");
                    break;
                case "자원순환 마을 만들기":
                    setCd(ltxt,"2C02");
                    break;
                case "환경기초시설 견학":
                    setCd(ltxt,"2C03");
                    break;
                case "생활 속 업사이클링 아트마을":
                    setCd(ltxt,"2C04");
                    break;
                case "마을 속 도시농업":
                    setCd(ltxt,"2C05");
                    break;
                case "수료식":
                    setCd(ltxt,"2C06");
                    break;
                case "마을미디어 콘텐츠 이해":
                    setCd(ltxt,"2C07");
                    break;
                case "기획 및 촬연":
                    setCd(ltxt,"2C08");
                    break;
                case "녹화 및 편집":
                    setCd(ltxt,"2C09");
                    break;
                case "편집 및 업로드":
                    setCd(ltxt,"2C10");
                    break;
                case "360 VR 사진촬영을 활용한 마을 아카이브":
                    setCd(ltxt,"2C11");
                    break;
                case "3D 사진촬영을 활용한 마을 아카이브":
                    setCd(ltxt,"2C12");
                    break;
                case "메타버스를 활용한 마을 아카이브":
                    setCd(ltxt,"2C13");
                    break;

                // mdata03 //
                case "북구마을 분쟁해결 지원센터":
                    setCd(ltxt,"3A01");
                    break;
                case "임동 세대공감":
                    setCd(ltxt,"3B01");
                    break;
                case "신안동 징검다리":
                    setCd(ltxt,"3B02");
                    break;
                case "용봉동 두루모아":
                    setCd(ltxt,"3B03");
                    break;
                case "용봉동 아름다운 화해":
                    setCd(ltxt,"3B04");
                    break;
                case "운암1동 이심(⼼)전심(⼼)":
                    setCd(ltxt,"3B05");
                    break;
                case "동림동 오손도손 사랑방":
                    setCd(ltxt,"3B06");
                    break;
                case "삼각동 들樂날樂":
                    setCd(ltxt,"3B07");
                    break;
                case "일곡동 행복나눔 사랑방":
                    setCd(ltxt,"3B08");
                    break;
                case "오치1동 한울타리":
                    setCd(ltxt,"3B09");
                    break;
                case "오치2동 오치골":
                    setCd(ltxt,"3B10");
                    break;

                // mdata04 //
                case "효동 초등학교":
                    setCd(ltxt,"4A01");
                    break;
                case "용주 초등학교":
                    setCd(ltxt,"4A02");
                    break;
                case "마을활동가 토크쇼":
                    setCd(ltxt,"4B01");
                    break;
                case "탄소중립 그린마을 동행":
                    setCd(ltxt,"4C01");
                    break;
            }
        };
    }
});

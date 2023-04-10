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
            <div class="exp">
                <div class="exp01">
                    <ul>
                        <li>A. 마을공동체 활성화 지원사업</li>
                        <li>마을공동체 사업 경험이 있는 5인 이상 주민 모임, 협동조합, 주민협의체, 주민자치(위원)회, 아파트 입주자대표회의 등의 마을공동체 지원</li>
                        <li>공동체 스스로 마을 현안 문제를 발굴하고 해결하는 과정을 통해 마을공동체 활성화 및 역량 강화를 할 수 있도록 지원하는 사업</li>
                        <li>마을의 특성을 살린 다양한 공동체 활동을 지원하여 주민이 주도하는 마을자치 실현</li>
                    </ul>
                    <ul>
                        <li>B. 마을모임 지원사업</li>
                        <li>마을주민 5명 이상의 모임 및 동아리 지원</li>
                        <li>마을과 지역사회에 공헌하는 공익적인 성격의 모임에 지원</li>
                        <li>다양한 주제로 마을을 알아보며 주민 간 네트워크 형성 및 공동체 활동계획을 논의할 수 있도록 지원하는 사업</li>
                    </ul>
                    <ul>
                        <li>C. 광주형 협치마을 모델사업</li>
                        <li>마을 내 다양한 조직 간 네트워크를 구축하여 주민자치회로 전환할 수 있는 기반을 마련할 수 있도록 지원</li>
                        <li>주민협치를 기반으로 주민총회와 마을계획이 수립된 마을에 마을 계획을 실행할 수 있도록 지원</li>
                        <li>마을네트워크 구축 및 운영, 마을미래계획 수립, 마을의제 발굴, 주민총회 개최를 거쳐 마을의제를 실행하는 사업</li>
                    </ul>
                </div>
                <div class="exp02">
                    <div>주민자치(위원)회, 마을공동체, 마을활동가, 일반 주민을 위한 마을교육</div>
                    <div>역량 있는 마을활동가 양성 및 주민자치 역량 강화를 위한 체계적이고 지속적인 마을 교육</div>
                    <ul>
                        <li>A. 기본과정</li>
                        <li>洞 마을의제 실행력 제고 워크숍</li>
                        <li>의제 워크북을 활용한 실현 가능한 의제 재점검 및 우리 마을 의제 수정해보기</li>
                        <li>사업 확장성을 위한 권역별 컨설팅</li>
                        <li>분야별 성장지원 워크숍</li>
                        <li>마을복지 - 사례 중심의 우리 마을의 복지 의제 활성화 하기</li>
                        <li>기후환경 - 주민이 주도하는 탄소 중립 마을 중장기 로드맵 설정</li>
                        <li>문화예술·도시재생 - 마을공동체 주도의 문화예술을 통한 도시재생 성공사례</li>
                    </ul>
                    <ul>
                        <li>B. 심화과정</li>
                        <li>사회적 경제 기반 교육</li>
                        <li>마을과 사회적 경제에 대한 이해</li>
                        <li>동 의제에 기반한 마을 자원 발굴 및 비즈니스 모델 개발</li>
                        <li>우리 마을의 사회적 경제 모델 사업계획서 작성해보기 실제 워크숍</li>
                    </ul>
                    <ul>
                        <li>C. 전문과정</li>
                        <li>마을환경실천활동가 양성교육</li>
                        <li>기후위기에 대응하는 생활 속 탄소중립 이론 및 실천사례 교육</li>
                        <li>자원순환에 대한 이해 및 올바른 분리배출 실습</li>
                        <li>정크아트(폐가죽, 폐의류 등) 및 업사이클 프로젝트</li>
                        <li>토종작물 교육 및 도시유기물로 퇴비 만들기</li>
                        <li>마을미디어 주민활동가 양성교육</li>
                        <li>마을미디어 콘텐츠 기획 및 촬영</li>
                        <li>스마트폰을 활용한 영상 편집 및 업로드</li>
                        <li>360 VR, 3D 사진촬영 및 메타버스를 활용한 마을 아카이브</li>
                    </ul>
                </div>
                <div class="exp03">
                    <ul>
                        <li>A. 북구마을분쟁해결지원센터</li>
                        <li>북구마을분쟁해결지원센터는 주민 간 갈등이 있을 때 갈등 당사자 간 대화와 소통을 통해 갈등을 해결할 수 있도록 지원하고, 이웃 간 소통을 통해 서로를 이해하고 갈등을 사전에 예방하여 함께 더불어 사는 행복한 마을살이를 지원하고 있습니다.</li>
                    </ul>
                    <ul>
                        <li>B. 소통방</li>
                        <li>북구마을에서는 2022년 “대화, 소통, 공감, 치유”를 바탕으로 열정이 가득한 소통방장님들과 함께하는 10개소의 소통방이 운영되었습니다. 소통방에서는 주민화해지원인 양성교육을 이수한 주민화해지원인과 함께 마을에서 이웃 간 갈등이 발생했을 때 대화와 소통을 통해 갈등을 해결할 수 있도록 지원하고 있습니다. 또한 마을 주민들이 모여 교류할 수 있는 장을 마련하고 관계를 형성하기 위해 만들기, 교육 등 다양한 갈등 예방 프로그램을 운영하고 있습니다.</li>
                    </ul>
                </div>
                <div class="exp04">
                    <ul>
                        <li>A. 찾아가는 어린이 환경리더 교육</li>
                        <li>「학교 안 탄소중립 실천」 찾아가는 어린이 환경리더 교육</li>
                        <li>지구를 살리는 자원순환 교육 및 올바른 분리배출 실습과 환경캠페인 활동</li>
                        <li>효동초등학교</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;- 일시 : 22. 10. 5.(수) ~ 10. 19.(수)</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;- 대상 : 효동초등학교 3학년</li>
                        <li>용주초등학교</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;- 일시 : 22. 10. 26.(수) ~ 11. 9.(수)</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;- 대상 : 용주초등학교 3학년</li>
                    </ul>
                    <img src="./img/poster.jpg" alt="마을 포스터">
                    <ul>
                        <li>B. 마을활동가 토크쇼</li>
                        <li>기후변화 대책모색을 위한 마을활동가 토크쇼</li>
                        <li>주제 : 북구마을 기후위기 실천 활동 논의 및 기후변화 대책 모색</li>
                        <li>좌장 : 허승희, 광주전남녹색소비자연대 대표</li>
                        <li>토론 : 장현규, 용봉마을발전소 사무국장</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;윤경화, 한새봉두레 활동가</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정 희, 오치·문흥전환마을네트워크 에너지컨설턴트</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;양정훈, 동운마을기후환경연합공동체 “이음” 감사</li>
                    </ul>
                    <ul>
                        <li>C. 탄소중립 그린마을 동행</li>
                        <li>북구 「기후환경·문화예술」 연합공동체와 함께하는 탄소중립 그린마을 동행</li>
                        <li>일시 : 22. 11. 7.(월) 15:00 ~ 18:00</li>
                        <li>장소 : 북구행복어울림센터 광장 일대</li>
                        <li>내용 : 광주북구문화예술연합 공연, 기후환경연합 전시 및 체험</li>
                        <li>주관 : 동운마을기후환경연합공동체 “이음” / 북구마을네트워크 / 광주북구문화예술연합</li>
                    </ul>
                </div>
            </div>
            <div class="svg">
                <ul><li>디지털 컨텐츠 <br /> 제작 및 배포</li></ul>
                <a href="http://webppt.co.kr" target='_blank'><img src="./img/logo_W.svg"></a>
            </div>
        </div>
    `;

    ///// 2. 상단 메뉴를 무엇을 눌렀는지에 따라 좌측 서브 메뉴 내용물 채우기
    const gnb_left = document.querySelector(".gnbL");
    // console.log(gnb_left);
    let combine_pm = pm;
    if((combine_pm === "마을공동체 활성화 지원사업")||(combine_pm === "마을모임 지원사업")||(combine_pm === "광주형 협치마을 모델사업")){combine_pm=bigList[0];}
    if((combine_pm === "洞 마을의제 실행력 제고 워크숍")||(combine_pm === "분야별 성장지원 워크숍")||(combine_pm === "사회적 경제기반 교육")||(combine_pm === "마을환경 실천활동가 양성교육")||(combine_pm === "마을미디어 주민활동가 양성교육")){combine_pm=bigList[1];}
    if((combine_pm === "북구마을 분쟁해결 지원센터")||(combine_pm === "소통방")){combine_pm=bigList[2];}
    if((combine_pm === "찾아가는 어린이 환경리더 교육")||(combine_pm === "마을활동가 토크쇼")||(combine_pm === "탄소중립 그린마을 동행")){combine_pm=bigList[3];}
    // console.log(combine_pm);
    let codeL = "";
    for (let tm in click_data[combine_pm][0]) {
        // console.log(tm);
        codeL += `
        <div class="l_menu"><span>${tm}</span>
        <ul>
        `;
        for (let sm of click_data[combine_pm][0][tm]) {
            // console.log(sm);
            codeL += `<li><a class="a_click" href="#">${[sm]}</a></li>`;
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

        ///// 4. 좌측 서브 메뉴 열고 닫는 기능 추가하기
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

    ///// 5. 좌측 서브 메뉴 클릭시 확인하기 쉽게 표시 남겨두기
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

    ///// 6. 상단 메뉴중 어떤 것을 누르는지에 따라 각종 정보 변경하기
    const mainBody = document.querySelector("body");
    // console.log(mainBody);
    const movie = document.querySelector(".movie");
    // console.log(movie);
    const movie_name = document.querySelector(".movie>span");
    // console.log(movie_name);
    const vd = document.querySelector("video");
    // console.log(vd);

    mainBody.style.background = `url(./img/${click_data[combine_pm][1]}.jpg) no-repeat fixed right/cover`;

    for(i=0;i<13;i++){
        if(pm === middleList[i]){
            vd.src = videoList[i];
        }
    }
    for(i=0;i<4;i++){
        if(pm === bigList[i]){
            vd.style.display = "none";
            document.querySelector(`.exp0${i+1}`).style.display = "block";
        }
        if(pm === "미래 학교"){
            movie.style.height = "1200px";
        }
        if(pm === "부록"){
            movie.style.height = "2300px";
        }
    }
    movie_name.innerText = pm;

    ///// 7. 좌측 서브 메뉴 클릭시 동영상 정보 변경하기
    const lmA = document.querySelectorAll(".l_menu a");
    // console.log(lmA);
    const setCd = (txt,mv) => {
        vd.style.display = "inline";
        vd.src = "./video/"+mv+".mp4";
        vd.muted = false;
        movie_name.innerText = txt;
        document.querySelector(".exp").style.display = "none";
        movie.style.height = "840px";
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
                case "기획 및 촬영":
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

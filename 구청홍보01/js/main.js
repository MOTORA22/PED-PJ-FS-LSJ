let pm = location.href;
console.log(pm.indexOf("?"));
if(pm.indexOf("?")===-1){
    alert("비정상적인 접근입니다~!");
    location.href = "index.html";
    // 클릭해서 들어오는 메인으로 돌려보냄!
}

pm = pm.split("?")[1];
pm = pm.split("=")[1];
pm = decodeURIComponent(pm);
console.log(pm);

window.addEventListener("DOMContentLoaded", function () {

    const vd = document.querySelector("video");
    console.log(vd);
    vd.src = sdata[pm]["동영상"];

    const gnbL = document.querySelector(".gnbL");
    let hcode = "";
    for (let tm in sdata[pm]["사이드메뉴"]) {
        hcode += `
        <div class="m_name"><span>${tm}</span>
        <ul>
        `;
        for (let sm in sdata[pm]["사이드메뉴"][tm]) {
            hcode += `<li><a href="#">${sm}</a></li>`
        }
        hcode += `</ul></div>`
    }
    gnbL.innerHTML = hcode;
    
    const mName = document.querySelectorAll(".m_name");
    console.log(mName);

    for (let x of mName) {
        const Y = x.querySelector("span");
        console.log(Y);
        let num = 1;
        Y.onclick = () => {
            const Z = x.querySelector("ul");
            console.log(Z);
            if (num === 1) {
                Z.style.display = "none";
            } else {
                Z.style.display = "block";
            }
            num = num * -1;
        };
    }

    const lmA = document.querySelectorAll(".m_name a");
    // console.log(lmA);
    const movie = document.querySelector("video");
    // console.log(movie);
    

    for (let x of lmA) {
        
        let btxt = x.innerText;

        x.onclick = () => {
            switch (btxt) {
                // mdata01 //
                case "중흥3동주민자치위원회":
                    movie.src = "./video/1A01.mp4";
                    movie.muted = false;
                    break;
                case "신안동주민자치위원회":
                    movie.src = "./video/1A02.mp4";
                    movie.muted = false;
                    break;
                case "용봉동주민자치회":
                    movie.src = "./video/1A03.mp4";
                    movie.muted = false;
                    break;
                case "운암3동주민자치회(1)":
                    movie.src = "./video/1A04.mp4";
                    movie.muted = false;
                    break;
                case "운암3동주민자치회(2)":
                    movie.src = "./video/1A05.mp4";
                    movie.muted = false;
                    break;
                case "문화동주민자치회":
                    movie.src = "./video/1A06.mp4";
                    movie.muted = false;
                    break;
                case "문흥1동주민자치회(1)":
                    movie.src = "./video/1A07.mp4";
                    movie.muted = false;
                    break;
                case "문흥1동주민자치회(2)":
                    movie.src = "./video/1A08.mp4";
                    movie.muted = false;
                    break;
                case "두암3동주민자치위원회":
                    movie.src = "./video/1A09.mp4";
                    movie.muted = false;
                    break;
                case "석곡동주민자치위원회":
                    movie.src = "./video/1A10.mp4";
                    movie.muted = false;
                    break;
                case "양산동주민자치회":
                    movie.src = "./video/1A11.mp4";
                    movie.muted = false;
                    break;
                case "중흥2동_몸맘살림":
                    movie.src = "./video/1A12.mp4";
                    movie.muted = false;
                    break;
                case "중흥2동_쓰담쓰담 예술나눔":
                    movie.src = "./video/1A13.mp4";
                    movie.muted = false;
                    break;
                case "신안동_빛고을공예협동조합":
                    movie.src = "./video/1A14.mp4";
                    movie.muted = false;
                    break;
                case "용봉동_용봉마을연극단":
                    movie.src = "./video/1A15.mp4";
                    movie.muted = false;
                    break;
                case "운암1동_벽산블루밍 운암메가씨티3단지":
                    movie.src = "./video/1A16.mp4";
                    movie.muted = false;
                    break;
                case "운암1동_벽산블루밍1단지 마을여성회":
                    movie.src = "./video/1A17.mp4";
                    movie.muted = false;
                    break;
                case "운암2동_운암2동 365민생행복지원단":
                    movie.src = "./video/1A18.mp4";
                    movie.muted = false;
                    break;
                case "동림동_행복한공동체 모다":
                    movie.src = "./video/1A19.mp4";
                    movie.muted = false;
                    break;
                case "동림동_동림동지역사회보장협의체":
                    movie.src = "./video/1A20.mp4";
                    movie.muted = false;
                    break;
                case "우산동_기마전아트공동체":
                    movie.src = "./video/1A21.mp4";
                    movie.muted = false;
                    break;
                case "우산동_꿈나무사회복지관":
                    movie.src = "./video/1A22.mp4";
                    movie.muted = false;
                    break;
                case "풍향동_코리아문화예술단":
                    movie.src = "./video/1A23.mp4";
                    movie.muted = false;
                    break;
                case "문화동_각화종합사회복지관":
                    movie.src = "./video/1A24.mp4";
                    movie.muted = false;
                    break;
                case "문흥2동_문흥골목대장":
                    movie.src = "./video/1A25.mp4";
                    movie.muted = false;
                    break;
                case "두암3동_두암종합사회복지관":
                    movie.src = "./video/1A26.mp4";
                    movie.muted = false;
                    break;
                case "두암3동_무등종합사회복지관":
                    movie.src = "./video/1A27.mp4";
                    movie.muted = false;
                    break;
                case "오치1동_오치종합사회복지관":
                    movie.src = "./video/1A28.mp4";
                    movie.muted = false;
                    break;
                case "오치1동_대금연주단 여울림":
                    movie.src = "./video/1A29.mp4";
                    movie.muted = false;
                    break;
                case "석곡동_원시인마을":
                    movie.src = "./video/1A30.mp4";
                    movie.muted = false;
                    break;
                case "석곡동_월산마을번영회":
                    movie.src = "./video/1A31.mp4";
                    movie.muted = false;
                    break;
                case "양산동_교육네트워크희망팩토리":
                    movie.src = "./video/1A32.mp4";
                    movie.muted = false;
                    break;
                case "양산동_연제주공아파트관리소":
                    movie.src = "./video/1A33.mp4";
                    movie.muted = false;
                    break;
                case "양산동_JS뮤지션스그룹":
                    movie.src = "./video/1A34.mp4";
                    movie.muted = false;
                    break;
                case "신용동_신용동지역사회보장협의체":
                    movie.src = "./video/1A35.mp4";
                    movie.muted = false;
                    break;
                case "신용동_꿈틀어린이작은도서관":
                    movie.src = "./video/1A36.mp4";
                    movie.muted = false;
                    break;
                case "북구_동운마을기후환경연합공동체'이음'":
                    movie.src = "./video/1A37.mp4";
                    movie.muted = false;
                    break;
                case "북구_광주북구문화예술연합":
                    movie.src = "./video/1A38.mp4";
                    movie.muted = false;
                    break;
                case "북구_북구마을네트워크":
                    movie.src = "./video/1A39.mp4";
                    movie.muted = false;
                    break;

                case "중흥2동_광주역다사로움아파트":
                    movie.src = "./video/1B01.mp4";
                    movie.muted = false;
                    break;
                case "용봉동_비건어게인":
                    movie.src = "./video/1B02.mp4";
                    movie.muted = false;
                    break;
                case "용봉동_광주5·18청소년오케스트라":
                    movie.src = "./video/1B03.mp4";
                    movie.muted = false;
                    break;
                case "운암1동_대주아파트입주자대표회의":
                    movie.src = "./video/1B04.mp4";
                    movie.muted = false;
                    break;
                case "운암1동_운암 빛고을 봉사단":
                    movie.src = "./video/1B05.mp4";
                    movie.muted = false;
                    break;
                case "운암2동_글로벌노르딕워킹협회":
                    movie.src = "./video/1B06.mp4";
                    movie.muted = false;
                    break;
                case "동림동_그린뉴딜 공동체 우아미":
                    movie.src = "./video/1B07.mp4";
                    movie.muted = false;
                    break;
                case "동림동_친수마을사랑수레":
                    movie.src = "./video/1B08.mp4";
                    movie.muted = false;
                    break;
                case "동림동_동림주공2차경로당":
                    movie.src = "./video/1B09.mp4";
                    movie.muted = false;
                    break;
                case "우산동_우산3사랑회":
                    movie.src = "./video/1B10.mp4";
                    movie.muted = false;
                    break;
                case "문화동_각화사랑회":
                    movie.src = "./video/1B11.mp4";
                    movie.muted = false;
                    break;
                case "문흥1동_문흥1동아파트자치회연합회":
                    movie.src = "./video/1B12.mp4";
                    movie.muted = false;
                    break;
                case "두암2동 두암동무등파크":
                    movie.src = "./video/1B13.mp4";
                    movie.muted = false;
                    break;
                case "두암2동_해성숲사랑":
                    movie.src = "./video/1B14.mp4";
                    movie.muted = false;
                    break;
                case "오치1동_자연드러와":
                    movie.src = "./video/1B15.mp4";
                    movie.muted = false;
                    break;
                case "오치1동_국제공예문화총연합회 광주지부":
                    movie.src = "./video/1B16.mp4";
                    movie.muted = false;
                    break;
                case "오치2동_올치오치":
                    movie.src = "./video/1B17.mp4";
                    movie.muted = false;
                    break;
                case "양산동_광주샛별마을공동체":
                    movie.src = "./video/1B18.mp4";
                    movie.muted = false;
                    break;

                case "운암1동해오름마을공동체":
                    movie.src = "./video/1C01.mp4";
                    movie.muted = false;
                    break;
                case "오치1동주민협의체":
                    movie.src = "./video/1C02.mp4";
                    movie.muted = false;
                    break;
                case "오치2동주민자치위원회":
                    movie.src = "./video/1C03.mp4";
                    movie.muted = false;
                    break;
                case "석곡무등산마을협의회":
                    movie.src = "./video/1C04.mp4";
                    movie.muted = false;
                    break;

                // mdata02 //
                case "운암권역":
                    movie.src = "./video/2A01.mp4";
                    movie.muted = false;
                    break;
                case "문화권역":
                    movie.src = "./video/2A02.mp4";
                    movie.muted = false;
                    break;
                case "일곡권역":
                    movie.src = "./video/2A03.mp4";
                    movie.muted = false;
                    break;
                case "용봉권역":
                    movie.src = "./video/2A04.mp4";
                    movie.muted = false;
                    break;
                case "두암권역":
                    movie.src = "./video/2A05.mp4";
                    movie.muted = false;
                    break;
                case "중흥권역":
                    movie.src = "./video/2A06.mp4";
                    movie.muted = false;
                    break;
                case "마을복지":
                    movie.src = "./video/2A07.mp4";
                    movie.muted = false;
                    break;
                case "기후환경":
                    movie.src = "./video/2A08.mp4";
                    movie.muted = false;
                    break;
                case "문화예술·도시재생":
                    movie.src = "./video/2A09.mp4";
                    movie.muted = false;
                    break;
                case "사회적 경제 이해":
                    movie.src = "./video/2B01.mp4";
                    movie.muted = false;
                    break;
                case "정부 사업에 대한 이해":
                    movie.src = "./video/2B02.mp4";
                    movie.muted = false;
                    break;
                case "마을 자원 발굴":
                    movie.src = "./video/2B03.mp4";
                    movie.muted = false;
                    break;
                case "마을 자원 연계 사회적 경제 모델 구축":
                    movie.src = "./video/2B04.mp4";
                    movie.muted = false;
                    break;
                case "마을 내 경제 조직 구성":
                    movie.src = "./video/2B05.mp4";
                    movie.muted = false;
                    break;
                case "서류 작성 및 준비 Ⅰ":
                    movie.src = "./video/2B06.mp4";
                    movie.muted = false;
                    break;
                case "서류 작성 및 준비 Ⅱ":
                    movie.src = "./video/2B07.mp4";
                    movie.muted = false;
                    break;
                case "생활 속 탄소중립 실천마을":
                    movie.src = "./video/2C01.mp4";
                    movie.muted = false;
                    break;
                case "자원순환 마을 만들기":
                    movie.src = "./video/2C02.mp4";
                    movie.muted = false;
                    break;
                case "환경기초시설 견학":
                    movie.src = "./video/2C03.mp4";
                    movie.muted = false;
                    break;
                case "생활 속 업사이클링 아트마을":
                    movie.src = "./video/2C04.mp4";
                    movie.muted = false;
                    break;
                case "마을 속 도시농업":
                    movie.src = "./video/2C05.mp4";
                    movie.muted = false;
                    break;
                case "수료식":
                    movie.src = "./video/2C06.mp4";
                    movie.muted = false;
                    break;
                case "마을미디어 콘텐츠 이해":
                    movie.src = "./video/2C07.mp4";
                    movie.muted = false;
                    break;
                case "기획 및 촬연":
                    movie.src = "./video/2C08.mp4";
                    movie.muted = false;
                    break;
                case "녹화 및 편집":
                    movie.src = "./video/2C09.mp4";
                    movie.muted = false;
                    break;
                case "편집 및 업로드":
                    movie.src = "./video/2C10.mp4";
                    movie.muted = false;
                    break;
                case "360 VR 사진촬영을 활용한 마을 아카이브":
                    movie.src = "./video/2C11.mp4";
                    movie.muted = false;
                    break;
                case "3D 사진촬영을 활용한 마을 아카이브":
                    movie.src = "./video/2C12.mp4";
                    movie.muted = false;
                    break;
                case "메타버스를 활용한 마을 아카이브":
                    movie.src = "./video/2C13.mp4";
                    movie.muted = false;
                    break;

                // mdata03 //
                case "북구마을 분쟁해결 지원센터":
                    movie.src = "./video/3A01.mp4";
                    movie.muted = false;
                    break;
                case "임동 세대공감":
                    movie.src = "./video/3B01.mp4";
                    movie.muted = false;
                    break;
                case "신안동 징검다리":
                    movie.src = "./video/3B02.mp4";
                    movie.muted = false;
                    break;
                case "용봉동 두루모아":
                    movie.src = "./video/3B03.mp4";
                    movie.muted = false;
                    break;
                case "용봉동 아름다운 화해":
                    movie.src = "./video/3B04.mp4";
                    movie.muted = false;
                    break;
                case "운암1동 이심(⼼)전심(⼼)":
                    movie.src = "./video/3B05.mp4";
                    movie.muted = false;
                    break;
                case "동림동 오손도손 사랑방":
                    movie.src = "./video/3B06.mp4";
                    movie.muted = false;
                    break;
                case "삼각동 들樂날樂":
                    movie.src = "./video/3B07.mp4";
                    movie.muted = false;
                    break;
                case "일곡동 행복나눔 사랑방":
                    movie.src = "./video/3B08.mp4";
                    movie.muted = false;
                    break;
                case "오치1동 한울타리":
                    movie.src = "./video/3B09.mp4";
                    movie.muted = false;
                    break;
                case "오치2동 오치골":
                    movie.src = "./video/3B10.mp4";
                    movie.muted = false;
                    break;
                
                // mdata04 //
                case "효동초등학교":
                    movie.src = "./video/4A01.mp4";
                    movie.muted = false;
                    break;
                case "용주초등학교":
                    movie.src = "./video/4A02.mp4";
                    movie.muted = false;
                    break;
                case "마을활동가 토크쇼":
                    movie.src = "./video/4B01.mp4";
                    movie.muted = false;
                    break;
                case "탄소중립 그린마을 동행":
                    movie.src = "./video/4C01.mp4";
                    movie.muted = false;
                    break;
            }
        };
    }

});
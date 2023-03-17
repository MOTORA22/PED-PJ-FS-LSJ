// 구청 홍보 사이트 공통 JS - common.js //
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    const mName = document.querySelectorAll(".m_name");
    console.log(mName);

    for (let x of mName) {
        const Y = x.querySelector("a");
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

    const aName = document.querySelectorAll(".m_name a");
    console.log(aName);
    for (let x of aName) {
        x.onclick = () => {
            let a_txt = x.innerText;
            console.log(a_txt);

            const changeM = document.querySelector("video");

            switch (a_txt) {
                case "마을공동체 활성화 지원사업":
                    changeM.src = "./video/1A01.mp4";
                    break;
                case "중흥3동주민자치위원회":
                    changeM.src = "./video/1A01.mp4";
                    break;
                case "신안동주민자치위원회":
                    changeM.src = "./video/1A02.mp4";
                    break;
                case "용봉동주민자치회":
                    changeM.src = "./video/1A03.mp4";
                    break;
                case "운암3동주민자치회(1)":
                    changeM.src = "./video/1A04.mp4";
                    break;
                case "운암3동주민자치회(2)":
                    changeM.src = "./video/1A05.mp4";
                    break;
                case "문화동주민자치회":
                    changeM.src = "./video/1A06.mp4";
                    break;
                case "문흥1동주민자치회(1)":
                    changeM.src = "./video/1A07.mp4";
                    break;
                case "문흥1동주민자치회(2)":
                    changeM.src = "./video/1A08.mp4";
                    break;
                case "두암3동주민자치위원회":
                    changeM.src = "./video/1A09.mp4";
                    break;
                case "석곡동주민자치위원회":
                    changeM.src = "./video/1A10.mp4";
                    break;
                case "양산동주민자치회":
                    changeM.src = "./video/1A11.mp4";
                    break;
                case "중흥2동_몸맘살림":
                    changeM.src = "./video/1A12.mp4";
                    break;
                case "중흥2동_쓰담쓰담 예술나눔":
                    changeM.src = "./video/1A13.mp4";
                    break;
                case "신안동_빛고을공예협동조합":
                    changeM.src = "./video/1A14.mp4";
                    break;
                case "용봉동_용봉마을연극단":
                    changeM.src = "./video/1A15.mp4";
                    break;
                case "운암1동_벽산블루밍 운암메가씨티3단지":
                    changeM.src = "./video/1A16.mp4";
                    break;
                case "운암1동_벽산블루밍1단지 마을여성회":
                    changeM.src = "./video/1A17.mp4";
                    break;
                case "운암2동_운암2동 365민생행복지원단":
                    changeM.src = "./video/1A18.mp4";
                    break;
                case "동림동_행복한공동체 모다":
                    changeM.src = "./video/1A19.mp4";
                    break;
                case "동림동_동림동지역사회보장협의체":
                    changeM.src = "./video/1A20.mp4";
                    break;
                case "우산동_기마전아트공동체":
                    changeM.src = "./video/1A21.mp4";
                    break;
                case "우산동_꿈나무사회복지관":
                    changeM.src = "./video/1A22.mp4";
                    break;
                case "풍향동_코리아문화예술단":
                    changeM.src = "./video/1A23.mp4";
                    break;
                case "문화동_각화종합사회복지관":
                    changeM.src = "./video/1A24.mp4";
                    break;
                case "문흥2동_문흥골목대장":
                    changeM.src = "./video/1A25.mp4";
                    break;
                case "두암3동_두암종합사회복지관":
                    changeM.src = "./video/1A26.mp4";
                    break;
                case "두암3동_무등종합사회복지관":
                    changeM.src = "./video/1A27.mp4";
                    break;
                case "오치1동_오치종합사회복지관":
                    changeM.src = "./video/1A28.mp4";
                    break;
                case "오치1동_대금연주단 여울림":
                    changeM.src = "./video/1A29.mp4";
                    break;
                case "석곡동_원시인마을":
                    changeM.src = "./video/1A30.mp4";
                    break;
                case "석곡동_월산마을번영회":
                    changeM.src = "./video/1A31.mp4";
                    break;
                case "양산동_교육네트워크희망팩토리":
                    changeM.src = "./video/1A32.mp4";
                    break;
                case "양산동_연제주공아파트관리소":
                    changeM.src = "./video/1A33.mp4";
                    break;
                case "양산동_JS뮤지션스그룹":
                    changeM.src = "./video/1A34.mp4";
                    break;
                case "신용동_신용동지역사회보장협의체":
                    changeM.src = "./video/1A35.mp4";
                    break;
                case "신용동_꿈틀어린이작은도서관":
                    changeM.src = "./video/1A36.mp4";
                    break;
                case "북구_동운마을기후환경연합공동체'이음'":
                    changeM.src = "./video/1A37.mp4";
                    break;
                case "북구_광주북구문화예술연합":
                    changeM.src = "./video/1A38.mp4";
                    break;
                case "북구_북구마을네트워크":
                    changeM.src = "./video/1A39.mp4";
                    break;
            }
        };
    }
}

// 구청 홍보 사이트 링크 시스템 JS - linksys.js

//////////////////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded", () => {
    // console.log("로딩완료!");

    // 링크 시스템 : 메뉴의 a요소 링크를 셋업한다! //
    // 대상: .top a -> 상단영역의 모든 a요소
    const link = document.querySelectorAll(".logo a,.gnb a");
    // console.log(link);

    // 클릭 이벤트 함수 셋팅하기 //
    for (let x of link) {
        // x는 각a요소
        x.onclick = () => {
            // 1. a요소의 글자데이터
            let atxt = x.innerText;
            // console.log(atxt);

            // 만약 a요소가 img라면 atxt에 재할당하기
            // 클릭된 a요소 하위의 img요소를 가져옴
            let chk = x.querySelector("img");

            if (chk) {
                atxt = chk.alt;
                // console.log("재할당 : ", atxt);
            } // if문 //

            // 주소 할당 변수
            let url;

            // 2. 링크 분기하기
            switch (atxt) {
                case "북구청로고":
                    url = "index";
                    break;
                case "마을공동체":
                    url = "Village_community01";
                    break;
                case "마을공동체 활성화 지원사업":
                    url = "Village_community01";
                    break;
                case "마을모임 지원사업":
                    url = "Village_community02";
                    break;
                case "광주형 협치마을 모델사업":
                    url = "Village_community03";
                    break;
                case "미래학교":
                    url = "Future_school01";
                    break;
                case "洞 마을의제 실행력 제고 워크숍":
                    url = "Future_school01";
                    break;
                case "분야별 성장지원 워크숍":
                    url = "Future_school02";
                    break;
                case "사회적 경제 기반 교육":
                    url = "Future_school03";
                    break;
                case "마을환경실천활동가 양성교육":
                    url = "Future_school04";
                    break;
                case "마을미디어 주민활동가 양성교육":
                    url = "Future_school05";
                    break;
                case "마을분쟁해결지원센터":
                    url = "Village_support01";
                    break;
                case "북구 마을 분쟁 해결 지원 센터":
                    url = "Village_support01";
                    break;
                case "소통방":
                    url = "Village_support02";
                    break;
                case "부록":
                    url = "Appendix01";
                    break;
                case "찾아가는 어린이 환경리더 교육":
                    url = "Appendix01";
                    break;
                case "마을활동가 토크쇼":
                    url = "Appendix02";
                    break;
                case "탄소중립 그린마을 동행":
                    url = "Appendix03";
                    break;
                default:
                    url = "esc";
            } // switch case문 //
            // console.log(url);

            // 3. 내용에 따른 처리
            if (url === "esc") {
                alert(`
                    정검중입니다. 잠시만 기다려 주세요.
                `);
            } // if //
            else {
                // 로고를 클릭해서 메인페이지로 이동할 경우 html?code=m 을 보내주자!

                location.href = url + ".html"+ (atxt==="북구청로고"?"?code=m":"");
            } // else //
            return false;
        }; // mousedown 이벤트함수 //
    } // for of문 //
}); //////////////////// 로드구역 ////////////////////
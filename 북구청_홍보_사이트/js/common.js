// 모든 html 파일에 적용되는 공통 JS - common.js //
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

    // 1. 상단 gnb 메뉴의 빈곳을 채워준다.
    // 상단 gnb 메뉴에 목록 넣어주기
    const gnb_top = document.querySelector("#top");
    // console.log(gnb_top);
    gnb_top.innerHTML = `
        <header class="top">
            <!-- 1-1. 로고 -->
            <div class="logo">
                <a href="index.html"></a>
            </div>
            <!-- 1-2. GNB 메뉴 -->
            <nav class="gnbT">
                <ul>
                    <li>
                        <a href="#">마을공동체</a>
                        <!-- 서브 메뉴 -->
                        <div class="subBox">
                            <ol class="subMenu">
                                <li><a href="#">마을공동체활성화지원사업</a></li>
                                <li><a href="#">마을모임지원사업</a></li>
                                <li><a href="#">광주형협치마을모델사업</a></li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <a href="#">미래학교</a>
                        <!-- 서브 메뉴 -->
                        <div class="subBox">
                            <ol class="subMenu">
                                <li><a href="#">洞마을의제실행력제고워크숍</a></li>
                                <li><a href="#">분야별성장지원워크숍</a></li>
                                <li><a href="#">사회적경제기반교육</a></li>
                                <li><a href="#">마을환경실천활동가양성교육</a></li>
                                <li><a href="#">마을미디어주민활동가양성교육</a></li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <a href="#">마을분쟁해결지원센터</a>
                        <!-- 서브 메뉴 -->
                        <div class="subBox">
                            <ol class="subMenu">
                                <li><a href="#">북구마을분쟁해결지원센터</a></li>
                                <li><a href="#">소통방</a></li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <a href="#">부록</a>
                        <!-- 서브 메뉴 -->
                        <div class="subBox">
                            <ol class="subMenu">
                                <li><a href="#">찾아가는어린이환경리더교육</a></li>
                                <li><a href="#">마을활동가토크쇼</a></li>
                                <li><a href="#">탄소중립그린마을동행</a></li>
                            </ol>
                        </div>
                    </li>
                </ul>
            </nav>
            <!-- 1-3. 사이트 링크 -->
            <div class="link">
                <a href="https://bukgu.gwangju.kr/index.es?sid=b3" target="_blank"></a>
                <a href="https://bukgu.gwangju.kr/index.es?sid=a1" target="_blank"></a>
            </div>
        </header>
    `;

    // 2. index.html에서 상단 gnb 메뉴를 클릭해서 main.html로 이동할 시, 클릭한 목록 데이터 넘기기
    const gnb_click = document.querySelectorAll(".gnbT a");
    console.log(gnb_click);
    for (let x of gnb_click) {
        x.onclick = () => {
            let click_txt = x.innerText;
            // console.log(click_txt);
            location.href = "main.html?Click="+encodeURIComponent(click_txt);
        };
    }
}

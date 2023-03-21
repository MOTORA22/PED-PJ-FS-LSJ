// 구청 홍보 사이트 공통 JS - common.js //
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

    const gnbT = document.querySelector("#top");
    console.log(gnbT);
    let gcode = "";
    gcode +=`
    <header class="top ibx">
        <!-- 1-1. 로고 -->
        <div class="logo">
            <a href="index.html">
            </a>
        </div>
        <!-- 1-2. GNB 메뉴 -->
        <nav class="gnb">
            <ul>
                <li class="sm">
                    <a href="#">마을공동체</a>
                    <!-- 서브메뉴박스 -->
                    <div class="smbx">
                        <ol class="smenu">
                            <li>
                                <a href="#">마을공동체활성화지원사업</a>
                            </li>
                            <li>
                                <a href="#">마을모임지원사업</a>
                            </li>
                            <li>
                                <a href="#">광주형협치마을모델사업</a>
                            </li>
                        </ol>
                    </div>
                </li>
                <li class="sm">
                    <a href="#">미래학교</a>
                    <!-- 서브메뉴박스 -->
                    <div class="smbx">
                        <ol class="smenu">
                            <li>
                                <a href="#">洞마을의제실행력제고워크숍</a>
                            </li>
                            <li>
                                <a href="#">분야별성장지원워크숍</a>
                            </li>
                            <li>
                                <a href="#">사회적경제기반교육</a>
                            </li>
                            <li>
                                <a href="#">마을환경실천활동가양성교육</a>
                            </li>
                            <li>
                                <a href="#">마을미디어주민활동가양성교육</a>
                            </li>
                        </ol>
                    </div>
                </li>
                <li class="sm">
                    <a href="#">마을분쟁해결지원센터</a>
                    <!-- 서브메뉴박스 -->
                    <div class="smbx">
                        <ol class="smenu">
                            <li>
                                <a href="#">북구마을분쟁해결지원센터</a>
                            </li>
                            <li>
                                <a href="#">소통방</a>
                            </li>
                        </ol>
                    </div>
                </li>
                <li class="sm">
                    <a href="#">부록</a>
                    <!-- 서브메뉴박스 -->
                    <div class="smbx">
                        <ol class="smenu">
                            <li>
                                <a href="#">찾아가는어린이환경리더교육</a>
                            </li>
                            <li>
                                <a href="#">마을활동가토크쇼</a>
                            </li>
                            <li>
                                <a href="#">탄소중립그린마을동행</a>
                            </li>
                        </ol>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- 1-3. 바로가기 -->
        <div class="link00">
            <div class="link01">
                <a href="https://bukgu.gwangju.kr/index.es?sid=b3" target="_blank">
                </a>
            </div>
            <div class="link02">
                <a href="https://bukgu.gwangju.kr/index.es?sid=a1" target="_blank">
                </a>
            </div>
        </div>
    </header>
    `;
    gnbT.innerHTML=gcode;


    
    const gnbA = document.querySelectorAll(".sm a");
    console.log(gnbA);
    for (let x of gnbA) {
        x.onclick = () => {
            let atxt = x.innerText;
            console.log(atxt);
            location.href = "main.html?A="+encodeURIComponent(atxt);
        };
    }
}

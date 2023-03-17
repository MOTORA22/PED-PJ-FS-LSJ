// 구청 홍보 사이트 공통 JS - common.js //
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

    const gnbT = document.querySelector("#top");
    console.log(gnbT);
    let gcode = "";
    gcode +=`
    <header class="top ibx">
        <!-- 1-1.로고 -->
        <h1 class="logo">
            <a href="index.html">
                <img src="./img/head-logo.png" alt="북구청로고" />
            </a>
        </h1>
        <!-- 1-2.GNB메뉴 -->
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
        <!-- SNS 바로가기 -->
        <aside>
            <ol class="sns">
                <li>
                    <a href="https://pf.kakao.com/_Jxhucj" target="_blank">
                        <span class="ir"> 광주 북구청 카카오톡 채널 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://story.kakao.com/ch/gjbukgu" target="_blank">
                        <span class="ir"> 광주 북구청 카카오스토리 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://blog.naver.com/gjbukgu" target="_blank">
                        <span class="ir"> 광주 북구청 블로그 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/gjbukguofficial" target="_blank">
                        <span class="ir"> 광주 북구청 페이스북 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gjbukgu/" target="_blank">
                        <span class="ir"> 광주 북구청 인스타그램 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/gjbukgu" target="_blank">
                        <span class="ir"> 광주 북구청 트위터 바로가기 </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCOUWDDkH2m4dvJvXP-GObHw" target="_blank">
                        <span class="ir"> 광주 북구청 유투브 바로가기 </span>
                    </a>
                </li>
            </ol>
        </aside>
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

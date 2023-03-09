// 구청 홍보 사이트 공통 JS - common.js //

// console.log("테스트01");

// 햄버거버튼요소
var ham = document.querySelector(".ham");

ham.onclick = chgMenu;

/**************************************************
    함수명: chgMenu
    기능: 전체메뉴 보이기/숨기기
**************************************************/
function chgMenu(){
    // 1. 호출확인
    // console.log("테스트02");
    
    // 2. 대상선정 : .top 요소
    var tg = document.querySelector(".top");

    // 3. 변경내용 : 대상에 클래스 "on"넣기
    tg.classList.toggle("on");

} //////////////////// chgMenu 함수 ////////////////////

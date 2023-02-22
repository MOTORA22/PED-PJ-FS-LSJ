// JS 실험실 : 03.배너스타일 JS - banner.js

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -330%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 -220%으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -330%로 변경한다.
            그 후 left값을 -220%으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/

function loadFn() {
    console.log("로딩 완료!");

    // 슬라이드 li 리스트
    let slist = document.querySelectorAll("#slide>li");

    // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    slist.forEach((ele, idx) => {
        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq", idx);
    }); ////// forEach /////////////////

    // 1. 대상선정
    // 1-1. 이벤트 대상 : .abtn
    const abtn = document.querySelectorAll(".abtn");

    // 1-2. 변경 대상 : #slide
    const slide = document.querySelector("#slide");

    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");
    // console.log(indic);
    
    // 광클 금지 변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 2. 슬라이드 변경 함수 만들기
    // 호출시 seq에 들어오는 값중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        // console.log("슬고우!",seq);

        // 광클 금지 설정하기
        if(prot) return;
        prot=1 // 잠금
        setTimeout(() => {
            prot=0
        }, 400); // 해제

        // 0. 현재의 슬라이드 li 수집하기
        let clist = slide.querySelectorAll("li");
        // clist -> current list 현재 리스트

        

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽 버튼 클릭시
        if(seq){
            // console.log("오른쪽!");
            slide.style.left= "-330%";
            slide.style.transition="left .4s ease-in-out";
            setTimeout(()=>{
                slide.appendChild(clist[0]);
                slide.style.left= "-220%";
                slide.style.transition="none";
            },400); // 타임아웃 //
        }
        // 1-2. 왼쪽 버튼 클릭시
        else{
            // console.log("왼쪽!");
            // slide.insertBefore(넣을놈,넣을놈전놈);
            slide.insertBefore(clist[clist.length-1],clist[0]);
            slide.style.left= "-330%";
            slide.style.transition="none";
            setTimeout(()=>{
                slide.style.left= "-220%";
                slide.style.transition="left .4s ease-in-out";
            },0); // 타임아웃 //
        }
        
        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상: .indic li -> indic변수
        // 2-1. 현재 배너리스트 업데이트하기
        clist = slide.querySelectorAll("li");
        // 오른쪽클릭시(seq===1) 두번째슬라이드[1]
        // 왼쪽클릭시(seq===0) 첫번째 슬라이드[0]
        // seq순번과 읽어올 슬라이드 순번이 일치한다!

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        let cseq = clist[seq].getAttribute("data-seq");
        // console.log("현재순번:", cseq);

        // 2-3. 블릿초기화
        for (let x of indic) x.classList.remove("on");

        // 2-4. 읽어온 슬라이드 순번의 블릿에 클래스 "on"넣기
        indic[cseq].classList.add("on");
    }; // goSlide 함수 //

    // 3. 이동 버튼 대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            // 1. 인터벌 지우기 함수 호출!
            clearAuto();
            // 2. 슬라이드 함수 호출
            goSlide(idx);
        }; // click 함수 //
    }); // forEach //

    ////////////////////
    // 자동 넘김 설정하기
    ////////////////////

    // 일정 시간 간격으로 넘어가기
    // -> setInterval(함수, 시간)

    // [인터발함수의 함수전달값 사용예
    // (타임아웃함수도 동일함)]
    // 1. 함수에 전달값이 없으면 함수명만 사용가능
    // setInterval(goSlide,3000);
    // 2. 전달값이 있다면 익명함수구역에 코딩
    // setInterval(function(){goSlide(1)},3000);
    // 3. 화살표함수사용가능
    // setInterval(()=>{goSlide(1)},3000);
    // 4. 화살표함수에서 중괄호 생략가능
    // setInterval(()=>goSlide(1),3000);

    // 인터벌함수를 지우기 위한 변수
    let autoI;
    // 타임 아웃 함수 멈추기 위한 변수
    let autoT;

    /*******************************************************************
        함수명 : autoSlide
        기능 : 인터벌 함수로 슬라이드 함수 호출
    *******************************************************************/
    function autoSlide(){
        console.log("인터벌 시작!");
        // 인터벌 함수로 슬라이드 함수 호출하기
        autoI = setInterval(() => goSlide(1), 3000);
    } // autoSlide 함수 //

    // 자동 넘김 최초 호출!
    autoSlide();

    /*******************************************************************
        함수명 : clearAuto
        기능 : 인터벌 함수를 지우고 다시 세팅하기
    *******************************************************************/
    function clearAuto(){
        console.log("인터벌 멈추기!");
        // 1. 인터벌 지우기
        clearInterval(autoI);
        // 2. 타임아웃도 지우지 않으면 쌓여서 타임아웃이 몰려서 다중으로 발생한다.
        clearTimeout(autoT);
        // 3. 잠시 후 다시 작동하도록 타임아웃으로 인터벌함수를 호출한다.
        // 5초 후에 다시 시작하고 인터벌 3초까지 더해져서 총 8초 후에 시작한다.
        autoT = setTimeout(autoSlide,5000);
    } // clearAuto 함수 //
}
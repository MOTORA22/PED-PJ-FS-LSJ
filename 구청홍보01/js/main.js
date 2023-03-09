// 도깨비 PJ 메인 페이지 JS - main.js

//////////////////// 로드구역 ////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    // console.log("로딩완료!");

    // 구현내용 : 로고를 클릭해서 메인 페이지로 이동하면 파라미터를 구분해서 애니메이션을 중지하기

    // 1. 파라미터 읽어오기
    let pm = location.href;

    // 2. 파라미터 유무로 분기하기
    // 물음표 존재여부로 애니메이션 실행가부결정!
    if(pm.indexOf("?")!==-1){
        // 파라미터 잘라서 값만 추출!
        pm = pm.split("?")[1].split("=")[1];
        console.log("파라미터값:",pm);

        // pm값이 "m"이면 애니메이션 중지!
        if(pm==="m"){
            // body의 on 클래스를 제거함!
            document.body.classList.remove("on");
            // body에 새로운 클래스 logoCk 추가
            document.body.classList.toggle("logoCk");
        } // if //
    } // if //
}); //////////////////// 로드구역 ////////////////////
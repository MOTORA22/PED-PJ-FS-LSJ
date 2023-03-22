// index.html 배경 변경 JS - bg.js //

window.addEventListener("DOMContentLoaded", function () {

    const inBody = document.querySelector("body");
    console.log(inBody);



    // 6초 간격으로 배경의 투명도를 변경하기
    let in_bg = this.document.querySelectorAll(".in_bg");
    console.log(in_bg);

    // for(i=1;0<i<7;i++){
    // 0<i<7 이라고 하면 크롬이 렉걸린다.
    for(i=1;i<7;i++){
        console.log(in_bg[i]);
    }


    let num = 0;
    setInterval(()=>{
        in_bg[num].style.opacity = 0;
        num++;
        if(num===8)num=1;
        in_bg[num].style.opacity = 1;
    },6000);
});
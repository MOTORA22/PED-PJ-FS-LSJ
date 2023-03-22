// index.html 배경 변경 JS - bg.js //

window.addEventListener("DOMContentLoaded", function () {

    const inBody = document.querySelector("body");
    console.log(inBody);



    // 6초 간격으로 배경의 투명도를 변경하기
    let in_bg = this.document.querySelectorAll(".in_bg");
    console.log(in_bg);

    let num = 0;
    setInterval(()=>{
        in_bg[num].style.opacity = 0;
        num++;
        if(num===8)num=1;
        in_bg[num].style.opacity = 1;
    },6000);
});
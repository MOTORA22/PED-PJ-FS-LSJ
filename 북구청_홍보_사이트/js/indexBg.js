// index.html 배경 변경 JS - bg.js //

window.addEventListener("DOMContentLoaded", function () {

    const inBody = document.querySelector("body");
    console.log(inBody);



    // 6초 간격으로 배경의 투명도를 변경하기
    let in_bg = this.document.querySelectorAll("img.in_bg");
    console.log(in_bg);

    setTimeout(()=>{
        in_bg[0].style.opacity = 1;
        myTime();
    },6000);

    function myTime(){
        let num = 0;
        setInterval(()=>{
            in_bg[num].style.opacity = 0;
            num++;
            if(num===7)num=1;
            in_bg[num].style.opacity = 1;
        },6000);
    }
});
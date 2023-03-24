// index.html 전용 JS - index.js //

window.addEventListener("DOMContentLoaded", function () {

    // 1. index.html의 빈곳을 채워준다. (#top은 common.js에서 채워준다.)
    const in_bgi = document.querySelector("#bgi");
    // console.log(in_bgi);
    const in_cont = document.querySelector("#cont");
    // console.log(in_cont);

    in_bgi.innerHTML = `
        <img src="./img/bg01.png" alt="배경 이미지">
        <img src="./img/bg02.png" alt="배경 이미지">
        <img src="./img/bg03.png" alt="배경 이미지">
        <img src="./img/bg04.png" alt="배경 이미지">
        <img src="./img/bg05.png" alt="배경 이미지">
        <img src="./img/bg06.png" alt="배경 이미지">
        <img src="./img/bg07.png" alt="배경 이미지">
    `;
    in_cont.innerHTML = `
        <div class="slogan">
            <div></div>
            <div></div> 
            <div></div>
            <div></div>
        </div>
        <div class="slogan_logo"></div>
        <div class="villagers">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="fly_bird"></div>
    `;

    // 2. index.html의 배경을 순서대로 변하게 한다.
    // 6초 간격으로 배경의 투명도를 변경하기
    let bgi_change = in_bgi.querySelectorAll("img");
    // console.log(bgi_change);

    setTimeout(() => {
        bgi_change[0].style.opacity = 1;
        bgiTime();
    }, 6000);

    function bgiTime() {
        let num = 0;
        setInterval(() => {
            bgi_change[num].style.opacity = 0;
            num++;
            if (num === 7) num = 0;
            bgi_change[num].style.opacity = 1;
        }, 6000);
    }
});

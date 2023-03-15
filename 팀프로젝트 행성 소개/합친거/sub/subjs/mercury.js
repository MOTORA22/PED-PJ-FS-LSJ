// 수성 JS - mercury.js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    // console.log("로딩 테스트");

    /* 자동으로 이미지 바꾸기 */
    // const mrcy_img = document.getElementsByClassName("mercury03")[0];
    const mrcy_img = document.getElementById("mrcy_js");
    // const mrcy_img = document.querySelector(".mercury03");
    console.log(mrcy_img);
    /* js 23458 10 12 */
    // mrcy_img.style.cssText = "height: 50vh; background-image: url(../subimg/Mercury/Mercury02.jpg);background-repeat: no-repeat;background-position: center;background-size: cover;background-attachment: fixed;";
    mrcy_img.style.backgroundImage = "url(../subimg/Mercury/Mercury03.jpg)";
    // setTimeout(() => {
    //     console.log(mrcy_img);
    // }, 2000);
} ////////// loadFn 함수 //////////

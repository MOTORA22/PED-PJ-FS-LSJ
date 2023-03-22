// index.html 배경 변경 JS - bg.js //

window.addEventListener("DOMContentLoaded", function () {

    const bgC = this.document.querySelector(".on");
    console.log(bgC);

    // let num = 2;
    // setInterval(()=>{
    //     bgC.style.background = `url(./img/abstract_bg${num<10 ? "0"+num:num}.jpg) no-repeat fixed center/cover`;
    //     num++;
    //     if(num === 19) num = 1;
    // },6000);

    // let num = 2;
    // setInterval(()=>{
    //     bgC.style.background = `url(./img/bg0${num}.png) no-repeat fixed center/cover`;
    //     num++;
    //     if(num === 8) num = 1;
    // },6000);

    let aa = this.document.querySelectorAll(".aa");
    console.log(aa);

    let num = 0;
    setInterval(()=>{
        aa[num+1].style.opacity = 1;
        aa[num].style.opacity = 0;
        num++;
        if(num === 7){
            setTimeout(()=>{
                console.log(num);
                // aa[num].style.opacity = 0;
                aa[7].style.opacity = 0;
            },2000);
            num = 0;
        }
    },2000);
});
window.addEventListener("DOMContentLoaded", function () {

    const bgC = this.document.querySelector(".on");
    console.log(bgC);

    // let num = 2;
    // setInterval(()=>{
    //     bgC.style.background = `url(./img/abstract_bg${num<10 ? "0"+num:num}.jpg) no-repeat fixed center/cover`;
    //     num++;
    //     if(num === 19) num = 1;
    // },6000);

    let num = 2;
    setInterval(()=>{
        bgC.style.background = `url(./img/bg0${num}.png) no-repeat fixed center/cover`;
        num++;
        if(num === 8) num = 1;
    },6000);
});
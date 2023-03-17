window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    const gnb_L = document.querySelector(".gnb_L");
    console.log(gnb_L);

    let hcode = "";

    for (let tm in mdata) {
        // tm은 mdata의 속성명
        hcode += `
        <div class="m_name"><a href="#">${tm}</a>
        <ul>
        `;
        for (let sm in mdata[tm]) {
            hcode += `<li><a href="#">${sm}</a></li>`
        }
        hcode += `</ul></div>`
    }

    // hcode += "";
    gnb_L.innerHTML = hcode;
}
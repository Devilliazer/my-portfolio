document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector("header");
    header.addEventListener("click", ()=>{
        alert("\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0448\u0443, Dmytro!");
    });
    const avatar = document.querySelector("section img");
    avatar.addEventListener("click", ()=>{
        alert("\u0426\u0435 \u043C\u043E\u0454 \u0444\u043E\u0442\u043E, \u0434\u044F\u043A\u0443\u044E \u0437\u0430 \u0443\u0432\u0430\u0433\u0443! \uD83D\uDE0A");
    });
});
const toggleInfo = document.getElementById("toggleInfo");
const extraInfo = document.getElementById("extraInfo");
toggleInfo.addEventListener("click", ()=>{
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        toggleInfo.textContent = "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438";
    } else {
        extraInfo.style.display = "none";
        toggleInfo.textContent = "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435";
    }
});

//# sourceMappingURL=index.44983732.js.map

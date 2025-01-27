document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector("header");
    header.addEventListener("click", ()=>{
        alert("\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0448\u0443, Dmytro!");
    });
    const avatar = document.querySelector("section img");
    avatar.addEventListener("click", ()=>{
        alert("\u0426\u0435 \u043C\u043E\u0454 \u0444\u043E\u0442\u043E, \u0434\u044F\u043A\u0443\u044E \u0437\u0430 \u0443\u0432\u0430\u0433\u0443!\uD83D\uDE0A");
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
const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault(); // Зупиняє стандартну дію форми
    // Перевіряємо, чи всі поля заповнені
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) {
        alert("\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0432\u0441\u0456 \u043F\u043E\u043B\u044F!");
        return false;
    }
    // Надсилаємо форму
    fetch(form.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    }).then((response)=>{
        if (response.ok) {
            alert("\u0412\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!");
            form.reset(); // Очищаємо форму після успішного надсилання
        } else alert("\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.");
    }).catch((error)=>{
        alert("\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0443. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0430\u0448\u0435 \u0437'\u0454\u0434\u043D\u0430\u043D\u043D\u044F.");
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    menuToggle.addEventListener("click", ()=>{
        if (mobileMenu.style.display === "block") mobileMenu.style.display = "none";
        else mobileMenu.style.display = "block";
    });
    // Закриття меню при натисканні на посилання
    document.querySelectorAll("#mobile-menu a").forEach((link)=>{
        link.addEventListener("click", ()=>{
            mobileMenu.style.display = "none";
        });
    });
});

//# sourceMappingURL=index.44983732.js.map

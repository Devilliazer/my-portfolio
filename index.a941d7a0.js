document.addEventListener("DOMContentLoaded",()=>{document.querySelector("header").addEventListener("click",()=>{alert("Ласкаво прошу, Dmytro!")}),document.querySelector("section img").addEventListener("click",()=>{alert("Це моє фото, дякую за увагу! \uD83D\uDE0A")})});const e=document.getElementById("toggleInfo"),t=document.getElementById("extraInfo");e.addEventListener("click",()=>{"none"===t.style.display?(t.style.display="block",e.textContent="Приховати"):(t.style.display="none",e.textContent="Дізнатися більше")});const n=document.querySelector("form");n.addEventListener("submit",e=>{e.preventDefault();let t=n.querySelector('[name="name"]').value.trim(),l=n.querySelector('[name="email"]').value.trim(),o=n.querySelector('[name="message"]').value.trim();if(!t||!l||!o)return alert("Будь ласка, заповніть всі поля!"),!1;fetch(n.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:l,message:o})}).then(e=>{e.ok?(alert("Ваше повідомлення успішно надіслано!"),n.reset()):alert("Сталася помилка. Будь ласка, спробуйте ще раз.")}).catch(e=>{alert("Не вдалося відправити форму. Перевірте ваше з'єднання.")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("menu-toggle"),t=document.getElementById("mobile-menu");e.addEventListener("click",()=>{"block"===t.style.display?t.style.display="none":t.style.display="block"}),document.querySelectorAll("#mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{t.style.display="none"})})});
//# sourceMappingURL=index.a941d7a0.js.map

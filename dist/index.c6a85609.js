document.addEventListener("DOMContentLoaded",()=>{document.querySelector("header").addEventListener("click",()=>{alert("Ласкаво прошу, Dmytro!")}),document.querySelector("section img").addEventListener("click",()=>{alert("Це моє фото, дякую за увагу! \uD83D\uDE0A")})});const e=document.getElementById("toggleInfo"),t=document.getElementById("extraInfo");e.addEventListener("click",()=>{"none"===t.style.display?(t.style.display="block",e.textContent="Приховати"):(t.style.display="none",e.textContent="Дізнатися більше")});const n=document.querySelector("form");n.addEventListener("submit",e=>{e.preventDefault();let t=n.querySelector('[name="name"]').value.trim(),r=n.querySelector('[name="email"]').value.trim(),a=n.querySelector('[name="message"]').value.trim();if(!t||!r||!a)return alert("Будь ласка, заповніть всі поля!"),!1;fetch(n.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:r,message:a})}).then(e=>{e.ok?(alert("Ваше повідомлення успішно надіслано!"),n.reset()):alert("Сталася помилка. Будь ласка, спробуйте ще раз.")}).catch(e=>{alert("Не вдалося відправити форму. Перевірте ваше з'єднання.")})});
//# sourceMappingURL=index.c6a85609.js.map

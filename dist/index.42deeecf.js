document.addEventListener("DOMContentLoaded",()=>{document.querySelector("header").addEventListener("click",()=>{alert("Ласкаво прошу, Dmytro!")}),document.querySelector("section img").addEventListener("click",()=>{alert("Це моє фото, дякую за увагу!\uD83D\uDE0A")})});const e=document.getElementById("toggleInfo"),t=document.getElementById("extraInfo");e.addEventListener("click",()=>{"none"===t.style.display?(t.style.display="block",e.textContent="Приховати"):(t.style.display="none",e.textContent="Дізнатися більше")});const n=document.querySelector("form");n.addEventListener("submit",e=>{e.preventDefault();let t=n.querySelector('[name="name"]').value.trim(),d=n.querySelector('[name="email"]').value.trim(),l=n.querySelector('[name="message"]').value.trim();if(!t||!d||!l)return alert("Будь ласка, заповніть всі поля!"),!1;fetch(n.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:d,message:l})}).then(e=>{e.ok?(alert("Ваше повідомлення успішно надіслано!"),n.reset()):alert("Сталася помилка. Будь ласка, спробуйте ще раз.")}).catch(e=>{alert("Не вдалося відправити форму. Перевірте ваше з'єднання.")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("menu-toggle"),t=document.getElementById("mobile-menu");e.addEventListener("click",()=>{"block"===t.style.display?t.style.display="none":t.style.display="block"}),document.querySelectorAll("#mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{t.style.display="none"})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("todo-container");function t(){return JSON.parse(localStorage.getItem("tasks"))||[]}function n(e){localStorage.setItem("tasks",JSON.stringify(e))}function d(){e.innerHTML="";let l=t();l.forEach((t,o)=>{let a=document.createElement("div");a.classList.add("todo-item");let c=document.createElement("input");c.type="text",c.value=t.text,c.addEventListener("input",()=>{l[o].text=c.value,n(l)});let i=document.createElement("button");i.textContent="×",i.addEventListener("click",()=>{l.splice(o,1),n(l),d()}),a.appendChild(c),a.appendChild(i),e.appendChild(a)})}document.getElementById("todo").insertAdjacentHTML("beforeend",`<button id="add-task">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{437}\u{430}\u{434}\u{430}\u{447}\u{443}</button>`),document.getElementById("add-task").addEventListener("click",()=>{let e=t();e.push({text:"Нова задача"}),n(e),d()}),d()});
//# sourceMappingURL=index.42deeecf.js.map

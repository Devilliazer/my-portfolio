document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    alert("Ласкаво прошу, Dmytro!");
  });

  const avatar = document.querySelector("section img");
  avatar.addEventListener("click", () => {
    alert("Це моє фото, дякую за увагу! 😊");
  });
});
const toggleInfo = document.getElementById("toggleInfo");
const extraInfo = document.getElementById("extraInfo");

toggleInfo.addEventListener("click", () => {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleInfo.textContent = "Приховати";
  } else {
    extraInfo.style.display = "none";
    toggleInfo.textContent = "Дізнатися більше";
  }
});
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Зупиняє стандартну дію форми

  // Перевіряємо, чи всі поля заповнені
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Будь ласка, заповніть всі поля!");
    return false;
  }

  // Надсилаємо форму
  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Ваше повідомлення успішно надіслано!");
        form.reset(); // Очищаємо форму після успішного надсилання
      } else {
        alert("Сталася помилка. Будь ласка, спробуйте ще раз.");
      }
    })
    .catch((error) => {
      alert("Не вдалося відправити форму. Перевірте ваше з'єднання.");
    });
});

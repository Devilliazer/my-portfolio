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

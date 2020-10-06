const btnShare = document.querySelector(".button-area");
const share = document.querySelector(".share");

btnShare.addEventListener("click", () => {
  console.log("event listener works");
  share.classList.toggle("active");
});


// JavaScript for Opening and Closing the Modal

const modal = document.getElementById("playlistModal");
const closeButton = document.querySelector(".close");

const overlays = document.querySelectorAll(".card-overlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


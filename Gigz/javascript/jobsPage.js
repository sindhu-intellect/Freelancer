const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const openDrawerButton1 = document.getElementById("open-drawer1");
const openDrawerButton2 = document.getElementById("open-drawer2");
const openDrawerButton3 = document.getElementById("open-drawer3");
const closeDrawerButton = document.getElementById("close-drawer");

openDrawerButton1.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
});

openDrawerButton2.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
});

openDrawerButton3.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
});

closeDrawerButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
});

// Close the drawer when clicking outside of it
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.add("hidden");
    popup.classList.add("hidden");
  }
});

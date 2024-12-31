import { navbar } from "../GIG_Common/com_navbar.js";
import { footer } from "../GIG_Common/com_footer.js";

// Add the navbar to the page
document.getElementById("navbar").innerHTML = navbar();
// Add the footer to the page
document.getElementById("footer").innerHTML = footer();

// profile section starts
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("profile-trigger")
    .addEventListener("click", toggleProfileMenu);

  function toggleProfileMenu() {
    const menu = document.getElementById("profile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
});

// Update profile from localStorage (sync with profile.html)
// function updateProfileHeader() {
//   const initials = localStorage.getItem("profileInitials") || "Guest";
//   const name = localStorage.getItem("profileName") || "Guest";
//   const email = localStorage.getItem("profileEmail") || "guest@example.com";

//   document.getElementById("profile-initials").textContent = initials;
//   document.getElementById("profile-name-dropdown").textContent = name;
//   document.getElementById("profile-email-dropdown").textContent = email;
// }

// Call on page load
// document.addEventListener("DOMContentLoaded", updateProfileHeader);

// Update Profile Image
// function updateProfileImage(event) {
//   const input = event.target;
//   const reader = new FileReader();

//   reader.onload = function () {
//     const displayImg = document.getElementById("display-img");
//     displayImg.src = reader.result;
//   };

//   if (input.files && input.files[0]) {
//     reader.readAsDataURL(input.files[0]);
//   }
// }

// start
// pop up js code for contact us
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  // const contactBtn2 = document.getElementById("contactBtn2");
  const popupPanel = document.getElementById("popupPanel");
  const popupOverlay = document.getElementById("popupOverlay");
  const closeBtn = document.getElementById("closeBtn");

  // Function to open sidebar
  contactBtn.onclick = function () {
    popupOverlay.style.display = "block"; // Show overlay
    popupPanel.style.right = "0"; // Slide in sidebar
  };

  // Function to close sidebar
  function closeSidebar() {
    popupOverlay.style.display = "none"; // Hide overlay
    popupPanel.style.right = "-400px"; // Slide out sidebar
  }

  closeBtn.onclick = closeSidebar;

  // Close sidebar when clicking outside
  popupOverlay.onclick = function (e) {
    if (e.target === popupOverlay) {
      closeSidebar();
    }
  };
});
//end of pop up js code

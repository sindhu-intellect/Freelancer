// Update Profile Image
function updateProfileImage(event) {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = function () {
    const displayImg = document.getElementById("display-img");
    displayImg.src = reader.result;
  };

  if (input.files && input.files[0]) {
    reader.readAsDataURL(input.files[0]);
  }
}

function toggleProfileMenu() {
  const menu = document.getElementById("profile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Update profile from localStorage (sync with profile.html)
function updateProfileHeader() {
  const initials = localStorage.getItem("profileInitials") || "Guest";
  const name = localStorage.getItem("profileName") || "Guest";
  const email = localStorage.getItem("profileEmail") || "guest@example.com";

  document.getElementById("profile-initials").textContent = initials;
  document.getElementById("profile-name-dropdown").textContent = name;
  document.getElementById("profile-email-dropdown").textContent = email;
}

// Call on page load
document.addEventListener("DOMContentLoaded", updateProfileHeader);

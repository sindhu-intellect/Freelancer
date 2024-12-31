function readMoreDetails(opportunityId) {
  const box = document.querySelector(`.project-box[data-id="${opportunityId}"]`);
  box.classList.toggle('expanded');
}

function viewOverallStatus(opportunityId) {
  window.location.href = `/project-overall-status/${opportunityId}`;
}

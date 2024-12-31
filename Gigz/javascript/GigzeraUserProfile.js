// javascript for certificate modal popup
const fileInputcert = document.getElementById('file-input-cert');
const uploadedFiles = document.getElementById('uploaded-file-cert');
const fileNameSpan = document.getElementById('file-name-cert');
const fileSizeSpan = document.getElementById('file-size-cert');
const issueDateInput = document.getElementById('issue-date');
const expiryDateInput = document.getElementById('expiry-date');
const certificationIdInput = document.getElementById('certification-id');
const certificationUrlInput = document.getElementById('certification-url');
const saveButton = document.getElementById('save-button');

// Reference to the modal element
const addCertificateModal = new bootstrap.Modal(document.getElementById('addCertificateModal'));

fileInputcert.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameSpan.textContent = file.name;
        fileSizeSpan.textContent = (file.size / 1024).toFixed(2) + ' KB';
        uploadedFiles.style.display = 'flex';
    }
});

function removeFile() {
    fileInputcert.value = '';
    uploadedFiles.style.display = 'none';
}

saveButton.addEventListener('click', (event) => {
    // Check if file is uploaded
    if (!fileInputcert.files[0]) {
        alert("Please upload a file.");
        return;
    }

    // Check if issue date is filled
    if (!issueDateInput.value) {
        alert("Please select an issue date.");
        return;
    }

    // Collect form data
    const formData = {
        fileName: fileInputcert.files[0].name,
        fileSize: (fileInputcert.files[0].size / 1024).toFixed(2) + ' KB',
        issueDate: issueDateInput.value,
        expiryDate: expiryDateInput.value,
        certificationId: certificationIdInput.value,
        certificationUrl: certificationUrlInput.value,
    };

    console.log("Certification Data Saved:", formData);

    // Reset the form fields and clear uploaded file information
    fileInputcert.value = '';
    uploadedFiles.style.display = 'none';
    issueDateInput.value = '';
    expiryDateInput.value = '';
    certificationIdInput.value = '';
    certificationUrlInput.value = '';

    // Close the modal directly
    addCertificateModal.hide();
});

// javascript for employment history popup
document.getElementById("currentlyWorking").addEventListener("change", function () {
    const workedTillField = document.getElementById("workedTill");
  
    if (this.checked) {
      workedTillField.value = ""; // Clear the "Worked Till" field
      workedTillField.disabled = true; // Disable the field
      workedTillField.removeAttribute("required"); // Remove required attribute
    } else {
      workedTillField.disabled = false; // Enable the field
      workedTillField.setAttribute("required", "true"); // Make it required
    }
  });
  
  document.getElementById("saveBtn").addEventListener("click", function () {
    const company = document.getElementById("company").value.trim();
    const title = document.getElementById("title").value.trim();
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();
    const workedFrom = document.getElementById("workedFrom").value;
    const workedTill = document.getElementById("workedTill").value;
    const currentlyWorking = document.getElementById("currentlyWorking").checked;
    const description = document.getElementById("description").value.trim();
  
    // Validation
    if (!company || !title || !city || !country || !workedFrom) {
      alert("Please fill out all required fields.");
      return;
    }
  
    // If "I currently work here" is not checked, validate the "Worked Till" field
    if (!currentlyWorking && !workedTill) {
      alert("Please specify the Worked Till date.");
      return;
    }
  
    // Gather form data
    const workHistory = {
      company,
      title,
      city,
      country,
      workedFrom,
      workedTill: currentlyWorking ? "Present" : workedTill,
      description,
    };
  
    console.log("Work History Saved:", workHistory);
  
    // Close the modal after saving (Bootstrap-specific)
    const modal = bootstrap.Modal.getInstance(document.getElementById("workHistoryModal"));
    modal.hide();
  
    const form = document.getElementById("workHistoryForm");
    form.reset();
    const workedTillField = document.getElementById("workedTill");
    workedTillField.disabled = false; // Enable the field after reset
    workedTillField.removeAttribute("required"); // Reset required attribute
  });


//    Right section for editing profile and saving
function enableEditing() {
    // Show the edit profile form
    const form = document.getElementById('edit-profile-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';

    // Debugging: Log to confirm the function is being triggered
    console.log('Editing enabled');

    // Pre-fill the form with current values from the profile card
    document.getElementById('edit-name').value = document.getElementById('profile-name').innerText;
    document.getElementById('edit-job').value = document.getElementById('profile-job').innerText;

    // Extract and set the email and phone, remove any icons or text that shouldn't be there
    const emailText = document.getElementById('profile-email').innerText.replace('📧 ', '');
    const phoneText = document.getElementById('profile-phone').innerText.replace('📱 ', '');

    document.getElementById('edit-email').value = emailText.trim();
    document.getElementById('edit-phone').value = phoneText.trim();

    // Extract LinkedIn username from the URL and set it in the input field
    const linkedinUrl = document.getElementById('profile-linkedin').innerText;
    const linkedinUsername = linkedinUrl.split('/').pop().trim();
    document.getElementById('edit-linkedin').value = linkedinUsername;
}

function saveEdit() {
    // Save the edited values to the profile card

    // Update profile name and job
    document.getElementById('profile-name').innerText = document.getElementById('edit-name').value;
    document.getElementById('profile-job').innerText = document.getElementById('edit-job').value;

    // Update email and phone with icons and links
    const email = document.getElementById('edit-email').value;
    document.getElementById('profile-email').innerHTML = `<i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a>`;

    const phone = document.getElementById('edit-phone').value;
    document.getElementById('profile-phone').innerHTML = `<i class="fa-solid fa-phone"></i> ${phone}`;

    // Update LinkedIn URL with the new username
    const linkedinUsername = document.getElementById('edit-linkedin').value;
    document.getElementById('profile-linkedin').innerHTML = `<i class="fa-brands fa-linkedin"></i> https://www.linkedin.com/in/${linkedinUsername}`;

    // Check if a new profile image is uploaded and update the profile image
    const fileInputEdit = document.getElementById('file-input-edit');
    if (fileInputEdit.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-img').src = e.target.result;
        };
        reader.readAsDataURL(fileInputEdit.files[0]);
    }

    // Hide the edit form after saving
    document.getElementById('edit-profile-form').style.display = 'none';
}

function uploadImageEdit() {
    const fileInputEdit = document.getElementById('file-input-edit');
    const file = fileInputEdit.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-img').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function deletePhoto() {
    // Set a default placeholder image if the photo is deleted
    const defaultImage = "https://via.placeholder.com/100";
    document.getElementById('profile-img').src = defaultImage;

    // Clear the file input field so no image remains selected
    document.getElementById('file-input-edit').value = "";
}

  
// java script for portfolio
// Function to handle file selection for portfolio
let uploadedFile = null;
function handleFileSelect(event) {
            const fileInput = event.target;
            const file = fileInput.files[0]; // Get the first file from the input
            if (file) {
                if (uploadedFile) {
                    alert("You can only upload one file.");
                    return;
                }
                uploadedFile = file;

                // Get the file size
                const fileSize = (file.size / 1024).toFixed(2); // Size in KB

                // Display the uploaded file name, size, and a delete button
                const fileDisplay = document.getElementById('file-display');
                const fileInfo = document.createElement('div');
                fileInfo.classList.add('file-info');
                fileInfo.innerHTML = `
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${fileSize} KB</span>
                    <span class="delete-btn" onclick="deleteFile()">❌</span>
                `;
                fileDisplay.appendChild(fileInfo);

                // Hide the browse button after file upload
                document.querySelector('.browse-btn').style.display = 'none';
            }
        }


        // Function to delete the uploaded file
        function deleteFile() {
            uploadedFile = null;
            document.getElementById('file-display').innerHTML = ''; // Clear the displayed file info
            document.querySelector('.browse-btn').style.display = 'inline-block'; // Show the browse button again
            document.getElementById('file-input').value = ''; // Reset the file input
        }

      
        // Function to edit Professional Summary section
        function editSection(sectionId) {
            const section = document.getElementById(sectionId);
            const textElement = section.querySelector('p');
            const textarea = section.querySelector('textarea');
            const saveButton = section.querySelector('#save-summary');

            // Hide the paragraph and show the textarea and save button
            textElement.style.display = 'none';
            textarea.style.display = 'block';
            saveButton.style.display = 'inline-block';
            textarea.value = textElement.innerText;
        }

        // Function to save changes in Professional Summary
        function saveSummary() {
            const summaryInput = document.getElementById('summary-input');
            const summaryText = document.getElementById('summary-text');
            const saveButton = document.getElementById('save-summary');

            // Save the new value and update the display
            summaryText.innerText = summaryInput.value;

            // Hide the textarea and save button, show the updated paragraph
            summaryInput.style.display = 'none';
            saveButton.style.display = 'none';
            summaryText.style.display = 'block';
        }

  // Skills array
const skills = [
    "Adaptability", "Analytical thinking", "Artificial Intelligence", "Attention to detail",
    "Automation", "Budget management", "Branding", "Business analysis",
    "Business intelligence", "Bilingual communication", "Collaboration", "Communication",
    "Conflict resolution", "Critical thinking", "Customer relationship management (CRM)",
    "Data analysis", "Decision-making", "Digital marketing", "Diversity and inclusion",
    "Debugging", "Emotional intelligence", "Event planning", "Editing and proofreading",
    "Entrepreneurship", "E-commerce management", "Financial planning", "Front-end development",
    "Facilitation skills", "Forecasting", "Flexibility", "Graphic design", "Goal setting",
    "Growth hacking", "GIS (Geographic Information Systems)", "Grant writing", "HTML/CSS",
    "Human resources", "Hiring and onboarding", "Help desk support", "HCI (Human-Computer Interaction)",
    "Innovation", "Interpersonal skills", "Inventory management", "IT support", "Influencing skills",
    "Java programming", "Journalism", "Job analysis", "Judgment and decision-making",
    "JIRA proficiency", "Knowledge management", "Key performance indicators (KPIs)", "Kubernetes",
    "Knowledge sharing", "Keynote presentations", "Leadership", "Logistics management", "Language proficiency",
    "LinkedIn marketing", "Listening skills", "Marketing strategy", "Machine learning", "Multitasking",
    "Mediation", "Microsoft Office skills", "Negotiation", "Networking", "Numerical analysis",
    "NLP (Natural Language Processing)", "Needs assessment", "Organizational skills", "Online research",
    "Operational efficiency", "Outreach strategies", "Optimization techniques", "Problem-solving",
    "Project management", "Programming (e.g., Python, Java)", "Public speaking", "Presentation skills",
    "Quality assurance", "Quantitative analysis", "QuickBooks proficiency", "Query handling",
    "Quality control", "Risk management", "Report writing", "Research skills", "React.js development",
    "Relationship building", "Strategic thinking", "Social media management", "Software development",
    "Sales skills", "SQL proficiency", "Teamwork", "Time management", "Training and mentoring",
    "Technical writing", "Troubleshooting", "User experience design (UX)", "Upselling techniques",
    "Understanding market trends", "Unstructured data analysis", "User interface design (UI)",
    "Video editing", "Visionary leadership", "Virtual event planning", "Vendor management",
    "Voice-over skills", "Writing skills", "Workflow optimization", "Workplace safety training",
    "Web development", "WordPress management", "XML knowledge", "XenApp expertise", "Xerox operations",
    "Cross-functional collaboration", "Youth engagement", "YouTube content creation", "Yield management",
    "Year-end reporting", "Yoga instruction", "Zero-based budgeting", "Zendesk proficiency",
    "Zoning laws knowledge", "Zoology expertise", "Zeal for learning"
];

// Filter skills based on input
function filterSkills(event) {
    const input = event.target.value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

    if (input.length < 1) return;

    const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(input));

    filteredSkills.forEach(skill => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = skill;
        suggestionItem.onclick = () => selectSkill(skill);
        suggestionsBox.appendChild(suggestionItem);
    });
}

// Add selected skill to the list
function selectSkill(skill) {
    const skillsList = document.getElementById('skills-list');
    const newSkill = document.createElement('span');
    newSkill.className = 'skill-box';

    newSkill.innerHTML = `${skill} <span class="delete-skill" onclick="removeSkill(this)">✖</span>`;

    skillsList.appendChild(newSkill);

    document.getElementById('new-skill').value = '';
    document.getElementById('suggestions').innerHTML = '';
}

// Remove skill from the list
function removeSkill(skillElement) {
    skillElement.parentElement.remove();
}


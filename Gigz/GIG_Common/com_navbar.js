export function navbar() {
  return `
    <header class="header">
      <div class="logo">
        <a href="../index.html">
          <img
          class="w-[130px] h-[50px] cursor-pointer"
          src="https://cdn.yellowmessenger.com/XzSBlvSXqsrB1735194961367.png"
          alt="Gigzera Logo"
          />
        </a>
      </div>
      <div class="hidden lg:flex relative w-96">
        <input
          type="text"
          placeholder="Search jobs by skills or category..."
          class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <i
          class="fa-solid fa-search absolute left-3 top-3 text-gray-400"
        ></i>
      </div>
      <nav class="nav">
        <a href="../index.html">Home</a>
        <a href="../html/jobspage.html">Jobs</a>
        <a href="../html/aboutus.html">About Us</a>
        <a href="javascript:void(0);" id="contactBtn">Contact Us</a>
        <a href="../html/gigzeraIndustriesPage.html">Industries</a>
        <div class="profile-dropdown">
          <div class="profile-trigger" id="profile-trigger">
            <div class="profile-avatar">
              <span id="profile-initials">Guest</span>
            </div>
            <i class="fa fa-caret-down"></i>
          </div>
          <div class="profile-menu" id="profile-menu">
            <p id="profile-name-dropdown">Guest</p>
            <p id="profile-email-dropdown">guest@example.com</p>
            <hr />
            <a href="../html/GigzeraUserProfile.html"> Profile</a>
            <hr />
            <a href="#" class="logout">Logout</a>
          </div>
        </div>
      </nav>
    </header>

     <!-- Popup Overlay -->
    <div id="popupOverlay"></div>

    <!-- Popup Container (Sidebar) -->
    <div id="popupPanel" class="popup-container">
      <div class="popup-header">
        <h2>Contact Us</h2>
        <button class="close-button" id="closeBtn">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <form id="help-form">
        <div>
          <label>Name <span class="text-red-500">*</span></label>
          <input type="text" class="form-input" placeholder="Enter your name" />
        </div>
        <div>
          <label>Phone Number <span class="text-red-500">*</span></label>
          <input
            type="number"
            class="form-input"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label>Reason <span class="text-red-500">*</span></label>
          <select class="form-input">
            <option value="">Select a reason</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing Issue</option>
            <option value="account">Account Management</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Description <span class="text-red-500">*</span></label>
          <textarea
            rows="4"
            class="form-input"
            placeholder="Describe your concern in detail"
          ></textarea>
        </div>
        <button type="submit" class="send-button">Send Message</button>
      </form>

      <img
        class="popup-image"
        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e3121a901b-e0d56f6afdbd31c149c1.png"
        alt="Contact Us Image"
        width="75%"
      />
      <div class="address">
        <p>
          006,Sprinkles, RGA Tech Park, Carmelaram, Kodathi, Sarjapur Rd,
          Bengaluru Karnataka 560035
        </p>
      </div>
    </div>
  `;
}

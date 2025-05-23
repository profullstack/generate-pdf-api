/**
 * Toggle password visibility
 */
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('password-toggle-icon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

/**
 * Show login alert message
 * @param {string} message - The message to display
 * @param {string} type - The type of alert (error, success, warning)
 */
function showLoginAlert(message, type = 'error') {
  const alertElement = document.getElementById('login-alert');
  if (alertElement) {
    alertElement.textContent = message;
    alertElement.className = `alert alert-${type}`;
    alertElement.classList.remove('hidden');
    
    // Auto-dismiss success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        alertElement.classList.add('hidden');
      }, 5000);
    }
  } else {
    // Fallback to alert if element not found
    alert(message);
  }
}

/**
 * Initialize event listeners
 */
function initLoginEventListeners() {
  // Add event listener for password toggle
  const passwordToggle = document.getElementById('password-toggle');
  if (passwordToggle) {
    passwordToggle.addEventListener('click', togglePasswordVisibility);
  }
}

// Also initialize on spa-transition-end event for SPA router
document.addEventListener('spa-transition-end', initLoginEventListeners);

// Make showLoginAlert globally accessible for other scripts
window.showLoginAlert = showLoginAlert;

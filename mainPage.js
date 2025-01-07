// Get elements
const feedbackButton = document.getElementById('feedback-button');
const feedbackModal = document.getElementById('feedback-modal');
const closeModal = document.getElementById('close-modal');
const thumbUpRadio = document.getElementById('thumb-up-radio');
const thumbDownRadio = document.getElementById('thumb-down-radio');
const thumbUpFeedback = document.getElementById('thumb-up-feedback');
const thumbDownFeedback = document.getElementById('thumb-down-feedback');
const feedbackForm = document.getElementById('feedback-form');
const feedbackFormContainer = document.getElementById('feedback-form-container');
const thankYouMessage = document.getElementById('thank-you-message');

// Show modal and prevent scrolling
feedbackButton.addEventListener('click', () => {
    feedbackModal.style.display = 'flex';
    document.body.classList.add('modal-open'); // Disable page scroll
});

// Hide modal on close button click
closeModal.addEventListener('click', () => {
    feedbackModal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Re-enable page scroll
});

// Close modal if clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === feedbackModal) {
        feedbackModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Show thumbs-up feedback options when "thumb-up" is selected
thumbUpRadio.addEventListener('change', () => {
    if (thumbUpRadio.checked) {
        thumbUpFeedback.style.display = 'block';  // Show thumbs-up feedback options
        thumbDownFeedback.style.display = 'none';  // Hide thumbs-down feedback options
    }
});

// Show thumbs-down feedback options when "thumb-down" is selected
thumbDownRadio.addEventListener('change', () => {
    if (thumbDownRadio.checked) {
        thumbDownFeedback.style.display = 'block';  // Show thumbs-down feedback options
        thumbUpFeedback.style.display = 'none';  // Hide thumbs-up feedback options
    }
});

// Handle form submission
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Hide the form and display the thank-you message
    feedbackFormContainer.style.display = 'none';
    thankYouMessage.style.display = 'block';
});

// Close thank-you message
function closeFeedback() {
    thankYouMessage.style.display = 'none';
    feedbackFormContainer.style.display = 'block'; // Show feedback form again
}
document.querySelectorAll('.show-location').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action (e.g., following the link)
    
    // Get the location from the clicked element's data-location attribute
    const location = element.getAttribute('data-location');
    
    // Display the location in the modal
    document.getElementById('locationText').innerText = location;
    
    // Show the modal
    document.getElementById('locationModal').style.display = 'flex';
  });
});

// Close the modal when clicking the close button
document.querySelector('.modal .close').addEventListener('click', function () {
  document.getElementById('locationModal').style.display = 'none';
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function (event) {
  const modal = document.getElementById('locationModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
document.querySelectorAll('.show-location').forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action (e.g., following the link)
      
      // Get the location from the clicked element's data-location attribute
      const location = element.getAttribute('data-location');
      // Get the link from the clicked element's data-link attribute
      const locationLink = element.getAttribute('data-link');
      
      // Display the location in the modal
      document.getElementById('locationText').innerText = location;
      
      // Set the link to the "View on Map" button
      document.getElementById('locationLink').setAttribute('href', locationLink);
      
      // Show the modal
      document.getElementById('locationModal').style.display = 'flex';
    });
  });
  
  // Close the modal when clicking the close button
  document.querySelector('.modal .close').addEventListener('click', function () {
    document.getElementById('locationModal').style.display = 'none';
  });
  
  // Close the modal if the user clicks outside of the modal content
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('locationModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
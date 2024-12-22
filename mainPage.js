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

// Show modal on button click
feedbackButton.addEventListener('click', () => {
  feedbackModal.style.display = 'flex';
});

// Hide modal on close button click
closeModal.addEventListener('click', () => {
  feedbackModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none';
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
document.querySelector('.learn-more-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
  });
  

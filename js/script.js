var feedbackOpenButton = document.querySelector('.feedback-button');
var feedbackOverlay = document.querySelector('.feedback-overlay');
var feedbackCloseButton = document.querySelector('.feedback-close');

function openFeedbackWindow(event) {
  event.preventDefault();
  feedbackOverlay.classList.remove('feedback-hidden');
}

function closeFeedbackWindow(event) {
  event.preventDefault();
  feedbackOverlay.classList.add('feedback-hidden');
}

feedbackOpenButton.addEventListener('click', this.openFeedbackWindow);
feedbackCloseButton.addEventListener('click', this.closeFeedbackWindow);

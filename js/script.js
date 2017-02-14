const feedbackOpenButton = document.querySelector('.feedback-button');
const feedbackPopUp = document.querySelector('.feedback');
const feedbackCloseButton = document.querySelector('.feedback-close');

function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function openFeedbackWindow(event) {
  event.preventDefault();
  feedbackPopUp.classList.remove('feedback-hidden');
}

function closeFeedbackWindow(event) {
  event.preventDefault();
  feedbackPopUp.classList.add('feedback-hidden');
}

feedbackOpenButton.addEventListener('click', this.openFeedbackWindow);
feedbackCloseButton.addEventListener('click', this.closeFeedbackWindow);

feedbackPopUp.style.top = getCoords(feedbackPopUp).top + 'px';
feedbackPopUp.style.left = getCoords(feedbackPopUp).left + 'px';

// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark-active"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer--active");

  if (answerText.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

const form = document.querySelector('[data-js="new-card-form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  createCard(data);
  event.target.reset();
  event.target.elements.question.focus();
});

function createCard(cardData) {
  const cardArticle = document.createElement("article");
  cardArticle.classList.add("card");

  const question = document.createElement("h2");
  question.classList.add("card__question");
  question.textContent = cardData.question;

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.textContent = cardData.answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagItem = document.createElement("li");
  tagItem.classList.add("card__tag-list-item");
  tagItem.textContent = cardData.tag;
  tagList.append(tagItem);

  const button = document.createElement("button");
  button.classList.add("card__button-answer");
  button.type = "button";
  button.textContent = "Show Answer";

  // umschalten
  button.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
    button.textContent = answer.classList.contains("card__answer--active")
      ? "Hide answer"
      : "Show answer";
  });

  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.type = "button";
  // moderne alternative zu setAttribute
  //bookmarkButton.ariaLabel = "bookmark";
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.innerHTML = `
  <svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>`;
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });

  cardArticle.append(question, button, answer, tagList, bookmarkContainer);

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");
  cardListItem.append(cardArticle);
  const cardList = document.querySelector('[data-js="card-list"]');
  cardList.append(cardListItem);
}

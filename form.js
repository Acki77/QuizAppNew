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

  const tag = document.createElement("span");
  tag.classList.add("card__tag");
  tag.textContent = cardData.tag;

  cardArticle.append(question, answer, tag);

  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.append(cardArticle);
}

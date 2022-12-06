const ratings = document.querySelector(".card-1__rating");
const optionSelectedClass = "rating__option--selected";
const ratingOptions = [];
let value;

/* Add options for rating control */
for (let i = 0; i < 5; i++) {
  const ratingOption = document.createElement("div");
  const optionNum = document.createTextNode(i + 1);

  ratingOption.setAttribute("value", i + 1);
  ratingOption.appendChild(optionNum);
  ratingOption.classList.add("rating__option");
  ratingOption.addEventListener("click", handleOptionClick);

  ratings.appendChild(ratingOption);
}

/* Handle submit */
const submitBtn = document.querySelector(".card-1__button");
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  if (!value) return;

  const card1 = document.querySelector(".card-1");
  card1.style.cssText = "display: none;";

  const card2 = document.querySelector(".card-2");
  card2.style.cssText = "display: flex";

  const ratingFeedback = document.querySelector(".card-2__secondary-text");
  const feedback = document.createTextNode(`You selected ${value} out of 5`);
  ratingFeedback.innerHTML = "";
  ratingFeedback.appendChild(feedback);
}

function handleOptionClick(e) {
  const option = e.target;
  value = option.getAttribute("value");
  removeSelectedOption();

  option.classList.add(optionSelectedClass);
}

function removeSelectedOption() {
  const ratingOptions = document.querySelector(".card-1__rating").children;

  for (let option of ratingOptions) {
    option.classList.remove(optionSelectedClass);
  }
}

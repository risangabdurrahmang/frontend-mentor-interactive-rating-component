const form = document.querySelector(".submit-btn");
const rateCard = document.querySelector(".rate-card");
const submitCard = document.querySelector(".submitted-card");
const rating = document.querySelector("#rating");

form.addEventListener("click", (event) => {
  event.preventDefault();
  const rates = document.querySelector('input[name="rate"]:checked');
  if (rates != null) {
    rateCard.style.display = "none";
    submitCard.style.display = "block";
    rating.innerHTML = rates.value;
  } else {
    alert("Ops, please select a number !");
  }
});

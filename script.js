const cardForm = document.getElementById("card-form");
const confirmBtn = document.getElementById("confirm-btn");
const contentModal = document.getElementById("content-modal");

// confirmBtn.addEventListener("click", function () {
//   console.log("button clicked");
// });

cardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  contentModal.innerHTML = `
  <div id="thank-you-container">
    <img id="complete-icon" src="/images/icon-complete.svg" alt="" />
    <p id="thank-you">THANK YOU!</p>
    <p id="added-card">We've added your card details</p>
    <button id="continue-btn">Continue</button>
  </div>`;
  // console.log("form submitted");
  const cardFormData = new FormData(cardForm);
  console.log(cardFormData);

  const name = cardFormData.get("cardholderName");
  const cardNumber = cardFormData.get("cardNumber");
  const expMonth = cardFormData.get("expMonth");
  const expYear = cardFormData.get("expYear");
  const cvcCode = cardFormData.get("cvcCode");
  console.log(name, cardNumber, expMonth, expYear, cvcCode);

  document.getElementById("card-number").innerHTML = `${cardNumber}`;
  document.getElementById("card-holder-name").innerHTML = `${name}`;
  document.getElementById("exp-date").innerHTML = `${expMonth}/`;
  document.getElementById("exp-date-year").innerHTML = `${expYear}`;
  document.getElementById("cvc").innerHTML = `${cvcCode}`;
});

const descrError = document.querySelector('#descrError');
const nameError = document.querySelector('#nameError');

const descrInput = document.querySelector("#description");
const userInput = document.querySelector("#userTo");

const submitButton = document.querySelector(".sendForm");

descrInput.addEventListener("input", () => {
   if (descrInput.value === "") {
      descrError.innerText = "Write description!";
      submitButton.disabled = true;
   } else descrError.innerText = "";
   if (descrInput.value !== "" && userInput.value !== "") {
      submitButton.disabled = false;
   }
})

userInput.addEventListener("input", () => {
   if (userInput.value === "") {
      nameError.innerText = "Set username!";
      submitButton.disabled = true;
   } else nameError.innerText = "";
   if (descrInput.value !== "" && userInput.value !== "") {
      submitButton.disabled = false;
   }
})

function submitForm(formData) {

   let issueItem = {
      "description": formData.description.value,
      "priority": formData.priority.value,
      "user": formData.user.value,
   }
   console.log(issueItem);
}
const descrError = document.querySelector('#descrError');
const nameError = document.querySelector('#nameError');

const descrInput = document.querySelector("#description");
const userInput = document.querySelector("#userTo");

const submitButton = document.querySelector(".sendForm");

let issuesArr = [];

window.onload = function () {
   issuesArr = JSON.parse(localStorage.getItem("issue")) || []
   if(issuesArr!== null) showItems(issuesArr);
}

function showItems(itemsArray) {
   let items = itemsArray.map(item => {
      return `
      <div class="task__item col-lg-9 mb-2 p-1 ml-auto mr-auto">
      <div class="container">
         <div class="row task_header mb-2">
            <div class="id_block col">
               <span class="title">ID:</span>
               <span class=" task__id">${item.id}</span>
            </div>
            <div class="date_block col text-right">
               <span class="title">Created:</span>
               <span class=" task__date">${item.date}</span>
            </div>
         </div>
         <div class="row">
            <p class="col-3 task__left title">Status: </p>
            <p class="col task__status">Open</p>
         </div>

         <div class="row">
            <p class="col-3 task__left title">Assigned to:</p>
            <p class="col task__user">${item.user}</p>
         </div>

         <div class="row">
            <p class="col-3 task__left title">Priority:</p>
            <p class="col task__priority">${item.priority}</p>
         </div>

         <div class="row">
            <p class="col-3 task__left title">Description:</p>
            <p class="col task__text">${item.description}</p>
         </div>

         <div class="row justify-content-between">
            <div class="buttons">
               <button class="btn btn-warning done">Done</button>
               <button class="btn btn-danger ml-2 delete">Delete</button>
            </div>
         </div>
      </div>
   </div>
      `
   });
   let catalogDOM = items.join("");
   document.getElementById('list').innerHTML = catalogDOM;
}

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
   saveToStorage(modifyData(issueItem))
}

function modifyData(data) {
   return data = {
      ...data,
      "id": create_ID(),
      "date": new Date()
   }
}

function saveToStorage(data) {
   issuesArr.push(data);
   console.log(issuesArr);
   localStorage.setItem("issue", JSON.stringify(issuesArr));
   showItems(issuesArr);
}

function create_ID() {
   var dt = new Date().getTime();
   var uuid = 'xxxx-xxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
   });
   return uuid;
}
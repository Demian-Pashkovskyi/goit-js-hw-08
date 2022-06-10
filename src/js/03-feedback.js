import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const textEl = document.querySelector('.feedback-form textarea');
const KEY = "feedback-form-state";
let formData = {};

formEl.addEventListener('submit', onFormSubmit);
textEl.addEventListener('input', throttle(onTextAreaInput, 500));
formEl.addEventListener('input', throttle(savedData, 500));
populateForm();


function onFormSubmit(event) {
   event.preventDefault();
   console.log(formData);
	event.currentTarget.reset();
   localStorage.removeItem(KEY);
}

function savedData(event) {
   formData[event.target.name] = event.target.value;
   localStorage.setItem(KEY, JSON.stringify(formData));
}

function onTextAreaInput(event) {
   const message = event.target.value;
   localStorage.setItem(KEY, message);
}

function populateForm() {
   const savedInfo = JSON.parse(localStorage.getItem(KEY));
   for (const e in savedInfo) {
      if (e) {
			formEl[e].value = savedInfo[e];
         formData = savedInfo;
      }
   }
}

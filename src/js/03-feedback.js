import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name="email"]');
const messageInputEl = document.querySelector('[name="message"]');
const KEY = 'feedback-form-state';

const savedInfo = JSON.parse(localStorage.getItem(KEY));

if (savedInfo !== null) {
	emailInputEl.value = savedInfo.email;
	messageInputEl.value = savedInfo.message;
}
feedbackForm = {
	email: '',
	message: '',
	
	getFeedbackForm() {
		console.log(`Email: ${this.email} Message: ${this.message}`);
},
};

formEl.addEventListener('input',throttle(() => {
	onTextAreaInput();
}, 500),
);

function onTextAreaInput() {
	feedbackForm.email = emailInputEl.value;
	feedbackForm.message = messageInputEl.value;
	localStorage.setItem(KEY, JSON.stringify(feedbackForm));
}

formEl.addEventListener('submit', event => {
	event.preventDefault();
	feedbackForm.getFeedbackForm();
	formEl.reset();
	localStorage.removeItem(KEY);
});
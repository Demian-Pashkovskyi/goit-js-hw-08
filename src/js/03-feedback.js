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

const feedbackForm = {
	email: 'email',
	message: 'message',
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
	console.log(savedInfo);
	event.preventDefault();
	event.currentTarget.reset();
	localStorage.removeItem(KEY);
});
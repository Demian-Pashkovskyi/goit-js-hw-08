import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const mail = document.querySelector('input');
const message = document.querySelector('textarea');
const KEY = 'feedback-form-state';

const formdInfo = () => {
	const savedInfo = JSON.parse(localStorage.getItem(KEY));
	if (savedInfo === null) {
		return;
	}
	mail.value = savedInfo.mail;
	message.value = savedInfo.message;
}

const getFeedbackForm = (event) => {
	localStorage.setItem(KEY, `{"mail":"${mail.value}","message":"${message.value}"}`);
}

const onFormSubmit = (event) => {
	event.preventDefault();
	console.log({mail: mail.value, message: message.value});
	event.currentTarget.reset();
	localStorage.removeItem(KEY);
	mail.value = '';
   message.value = '';
};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(getFeedbackForm, 500));
formdInfo();

const refs = {
	form: document.querySelector('.feedback-form'),
	textarea: document.querySelector('.feedback-form textarea'),
};

// refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextereaInput);

function onTextereaInput(evt) {
	const value = evt.target.value;

	console.log(value);
}


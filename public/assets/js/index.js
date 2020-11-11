import '@babel/polyfill';
import { message } from './message';

const contacts__form = document.querySelector('.contacts__form');

if (contacts__form) {
	contacts__form.addEventListener('submit', async (event) => {
		event.preventDefault();
		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const project = document.querySelector('#project').value;
		const description = document.querySelector('#description').value;
		await message(name, email, project, description);
	});
}

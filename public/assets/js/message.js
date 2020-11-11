import axios from 'axios';

export const message = async (name, email, project, description) => {
	const res = await axios({
		method: 'POST',
		url: '/api/messages',
		data: {
			name,
			email,
			project,
			description,
		},
	});

	if (res.status == 201) {
		console.log('Message Sent', res.data);
	}
};

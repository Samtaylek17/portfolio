const Message = require('./../models/messageModel');
const factory = require('./handlerFactory');

exports.createMessage = factory.createOne(Message);

// exports.createMessage = async (req, res, next) => {
// 	const doc = await Message.create(req.body);

// 	console.log(doc);
// 	const { name, email, project, description } = req.body;
// 	sendMail(name, email, project, description, function (err, data) {
// 		if (err) {
// 			res.status(500).json({ message: 'Internal error' });
// 		} else {
// 			res.status(201).json({
// 				status: 'success',
// 				message: 'Email sent!!!',
// 				data: {
// 					data: doc,
// 				},
// 			});
// 		}
// 	});
// };

// exports.getAllMessages = factory.getAll(Message);

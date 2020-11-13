const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
const sendMail = require('./mailController');

exports.createOne = (Model) =>
	catchAsync(async (req, res, next) => {
		const doc = await Model.create(req.body);

		console.log(doc);
		const { name, email, project, description } = req.body;
		sendMail(name, email, project, description, function (err, data) {
			if (err) {
				res.status(500).json({ message: 'Internal error' });
			} else {
				res.status(201).json({
					status: 'success',
					message: 'Email sent!!!',
					data: {
						data: doc,
					},
				});
			}
		});
	});

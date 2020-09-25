const Message = require('./../models/messageModel');
const factory = require('./handlerFactory');


exports.createMessage = factory.createOne(Message);
exports.getAllMessages = factory.getAll(Message);

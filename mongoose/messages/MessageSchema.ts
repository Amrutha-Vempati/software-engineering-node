/**
 * @typedef Message represents the Message schema
 * @property {String} message the message transaction between 2 users
 * @property {Object} userSent the user who sent the message
 * @property {Object} userReceived the user who received the message
 * @property {Date} sentOn the date on which the message has been sent and received
 */
import mongoose, {Schema} from "mongoose";
import Message from "../../models/messages/Message";

const MessageSchema = new mongoose.Schema<Message>({
    message: {type: String, required: true},
    userSent: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userReceived: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}
}, {collection: "messages"});
export default MessageSchema;
import mongoose, {Schema} from "mongoose";
import Message from "../../models/messages/Message";

const MessageSchema = new mongoose.Schema<Message>({
    message: {type: String, required: true},
    userSent: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userReceived: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}
}, {collection: "messages"});
export default MessageSchema;
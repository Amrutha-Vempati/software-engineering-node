/**
 * @typedef Like represents the schema of the like collection
 * @property {Object} tuit the tuit that the user liked
 * @property {Object} likedBy the user who liked the tuit
 */
import mongoose, {Schema} from "mongoose";
import Like from "../../models/likes/Like";

const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;
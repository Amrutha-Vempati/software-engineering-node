/**
 * @typedef  Tuit represents the tuits posted by the users in the tuiter application
 * @property {String} tuit the tuit posted by the user
 * @property {String} postedBy the user who posted this tuit
 * @property {Date} postedOn the date on which the tuit is posted
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../../models/tuits/Tuit";
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;
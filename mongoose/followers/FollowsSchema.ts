/**
 * @typedef Follow represents the follows collection of the tuiter application
 * @property {Object} userFollowing the user who is following another user
 * @property {Object} userFollowed the user who is being followed
 */
import mongoose, {Schema} from "mongoose";
import Follow from "../../models/follows/Follow";

const FollowsSchema = new mongoose.Schema<Follow>({
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"}
},{collection: "follows"});

export default FollowsSchema;
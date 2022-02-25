import mongoose from "mongoose";
import FollowsSchema from "./FollowsSchema";

const FollowsModel = mongoose.model("FollowModel", FollowsSchema);
export default FollowsModel;
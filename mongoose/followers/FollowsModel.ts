/**
 * @file Implements mongoose model to CRUD
 * documents in the Follows collection
 */
import mongoose from "mongoose";
import FollowsSchema from "./FollowsSchema";

const FollowsModel = mongoose.model("FollowModel", FollowsSchema);
export default FollowsModel;
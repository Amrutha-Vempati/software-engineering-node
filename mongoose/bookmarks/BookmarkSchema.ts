/**
 * @typedef Bookmark represents the bookmarks of a particular user
 * @property {Object} bookmarkedTuit the tuit that has been bookmarked by the user
 * @property {Object} bookmarkedBy the user who bookmarked this tuit
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../../models/bookmarks/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"}
    //postedOn: {type: Date, default: Date.now}
}, {collection: "bookmarks"});
export default BookmarkSchema;
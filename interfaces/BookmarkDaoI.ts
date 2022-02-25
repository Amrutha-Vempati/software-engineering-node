
import Bookmark from "../models/bookmarks/Bookmark";

/**
 * @file Declares API for Bookmark related data access object methods
 */
export default interface BookmarkDaoI {
    findAllTuitThatUserBookmarked (uid: string): Promise<Bookmark[]>;
    userBookmarksTuit (tid: string, uid: string): Promise<Bookmark>;
    userUnBookmarksTuit (tid: string, uid: string): Promise<any>;
};
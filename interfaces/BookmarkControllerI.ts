import {Request, Response} from "express";

export default interface BookmarkControllerI {
    findAllTuitThatUserBookmarked (req: Request, res: Response): void;
    userBookmarksTuit (req: Request, res: Response): void;
    userUnBookmarksTuit (req: Request, res: Response): void
};
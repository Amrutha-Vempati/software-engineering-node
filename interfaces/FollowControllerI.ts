import {Request, Response} from "express";

export default interface FollowControllerI {
    findAllUsersFollowedByUser (req: Request, res: Response): void;
    findAllUsersFollowingUser (req: Request, res: Response): void;
    followUser (req: Request, res: Response): void;
    unfollowUser (req: Request, res: Response): void;
};
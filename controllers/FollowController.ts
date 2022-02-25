/**
 * @file Controller RESTful Web service API for follows resource
 */
import {Express, Request, Response} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

/**
 * @class TuitController Implements RESTful Web service API for follows resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/follows to retrieve all the users that the user is following
 *     </li>
 *     <li>GET /api/users/:uid/followers to retrieve all the users who are following the user
 *     </li>
 *     <li>POST /api/users/:uid1/follows/:uid2 to create a new follow between uid1(userFollowing) and uid2(UserFollowed)
 *     </li>
 *     <li>DELETE /api/users/:uid1/unfollows/:uid2 to delete an existing follow connection between uid1 and uid2</li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing likes CRUD operations
 * @property {FollowController} FollowController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return FollowController
     */
    public static getInstance = (app: Express): FollowController => {
        if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/follows", FollowController.followController.findAllUsersFollowedByUser);
            app.get("/api/users/:uid/followers", FollowController.followController.findAllUsersFollowingUser);
            app.post("/api/users/:uid1/follows/:uid2", FollowController.followController.followUser);
            app.delete("/api/users/:uid1/unfollows/:uid2", FollowController.followController.unfollowUser);
        }
        return FollowController.followController;
    }

    private constructor() {}

    /**
     * Retrieves all users who are followed by the current user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the list of followees
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the User objects
     */
    findAllUsersFollowedByUser = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersFollowedByUser(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Retrieves all the users who are following the current user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the list of followers
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the User Objects
     */
    findAllUsersFollowingUser = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersFollowingUser(req.params.uid)
            .then(followers => res.json(followers));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid1 and uid2 representing the users between whom the follow connection has to be established
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follow that was inserted in the
     * database
     */
    followUser = (req: Request, res: Response) =>
        FollowController.followDao.followUser(req.params.uid1, req.params.uid2)
            .then(follow => res.json(follow));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid1 and uid2 representing the users between whom the follow connected has to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting the like was successful or not
     */
    unfollowUser = (req: Request, res: Response) =>
        FollowController.followDao.unfollowUser(req.params.uid1, req.params.uid2)
            .then(status => res.send(status));
};
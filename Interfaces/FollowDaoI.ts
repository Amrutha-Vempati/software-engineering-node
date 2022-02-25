import User from "../models/users/User";
import Follow from "../models/follows/Follow";

export default interface FollowDaoI {
    findAllUsersFollowedByUser (uid: String): Promise<Follow[]>;
    findAllUsersFollowingUser (uid: String): Promise<Follow[]>;
    followUser (uid1: string, uid2: string): Promise<Follow>;
    unfollowUser (uid1: string, uid2: string): Promise<any>;
};
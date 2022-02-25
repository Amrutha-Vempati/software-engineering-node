import FollowDaoI from "../interfaces/FollowDaoI";
import FollowsModel from "../mongoose/followers/FollowsModel";
import Follow from "../models/follows/Follow";

export default class FollowDao implements FollowDaoI {

    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    findAllUsersFollowedByUser = async (uid: string): Promise<Follow[]> =>
        FollowsModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

    findAllUsersFollowingUser = async (uid: string): Promise<Follow[]> =>
        FollowsModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();

    followUser = async (uid1: string, uid2: string): Promise<any> =>
    FollowsModel.create({userFollowing: uid1, userFollowed: uid2});

    unfollowUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowsModel.deleteOne({userFollowing: uid1, userFollowed: uid2});
}

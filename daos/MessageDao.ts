import MessageDaoI from "../Interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

export default class MessageDao implements MessageDaoI {

    private static messageDao: MessageDao | null = null;

    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }

    private constructor() {}

    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({userSent: uid})
            .populate("message")
            .exec();

    findAllMessagesReceivedByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({userReceived: uid})
            .populate("message")
            .exec();

    userSendMessageUser = async (uid1: string, uid2: string): Promise<any> =>
        MessageModel.create({userSent: uid1, userReceived: uid2});

    userDeletesMessage = async (uid1: string, uid2: string): Promise<any> =>
        MessageModel.deleteOne({userSent: uid1, userReceived: uid2});
}

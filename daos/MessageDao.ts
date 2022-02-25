/**
 * @file Implements DAO managing data storage of Messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Message
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
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

    userSendMessageUser = async (sender: string, receiver: string): Promise<any> =>
        MessageModel.create({userSent: sender, userReceived: receiver});

    userDeletesMessage = async (sender: string, receiver: string): Promise<any> =>
        MessageModel.deleteOne({userSent: sender, userReceived: receiver});
}

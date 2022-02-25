import Message from "../models/messages/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    findAllMessagesSentByUser (uid: string): Promise<Message[]>;
    findAllMessagesReceivedByUser (uid: string): Promise<Message[]>;
    userSendMessageUser (sender: string, receiver: string): Promise<Message>;
    userDeletesMessage (sender: string, receiver: string): Promise<any>;
};
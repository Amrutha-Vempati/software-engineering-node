import User from '../users/User';

/**
 * @file Interface model for the Message
 */
export default interface Message {
    message: string,
    userSent: User,
    userReceived: User,
    sentOn?: Date
};
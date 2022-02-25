import User from '../users/User';

/**
 *
 */
export default interface Message {
    message: string,
    userSent: User,
    userReceived: User,
    sentOn?: Date
};
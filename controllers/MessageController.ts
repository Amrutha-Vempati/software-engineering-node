/**
 * @file Controller RESTful Web service API for messages resource
 */
import {Express, Request, Response} from "express";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageControllerI";

/**
 * @class TuitController Implements RESTful Web service API for messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/messagesSent to retrieve all the messages sent by a user
 *     </li>
 *     <li>GET /api/users/:uid/messagesReceived to retrieve all the messages received by a user
 *     </li>
 *     <li>POST /api/users/:uid1/message/:uid2 to send a message from uid1(user 1) to uid2(user 2)
 *     </li>
 *     <li>DELETE /api/users/:uid1/deleteMessage/:uid2 to delete messages from uid1(user 1) to uid2(user 2)
 *     no londer likes a tuit</li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing likes CRUD operations
 * @property {MessageController} MessageController Singleton controller implementing
 * RESTful Web service API
 */
export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    public static getInstance = (app: Express): MessageController => {
        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessagesSentByUser);
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessagesReceivedByUser);
            app.post("/api/users/:uid1/message/:uid2", MessageController.messageController.userSendMessageUser);
            app.delete("/api/users/:uid1/deleteMessage/:uid2", MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    }

    private constructor() {}

    /**
     * Retrieves all the messages sent by the user from messages collection
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the message sent
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesSentByUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
            .then(messages => res.json(messages));

    /**
     * Retrieves all messages recieved by the user from message collection
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the message recieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects that were received
     */
    findAllMessagesReceivedByUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesReceivedByUser(req.params.uid)
            .then(messages => res.json(messages));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid1 and uid2 representing the user(uid1) that sent a message and user(uid2) that received a
     * messages
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    userSendMessageUser = (req: Request, res: Response) =>
        MessageController.messageDao.userSendMessageUser(req.params.uid1, req.params.uid2)
            .then(message => res.json(message));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid1 and uid2 representing the sender(uid1) receiver(uid2) whose messages are being deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the like was successful or not
     */
    userDeletesMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userSendMessageUser(req.params.uid1, req.params.uid2)
            .then(status => res.send(status));
};
import {Request, Response} from "express";

export default interface MessageControllerI {
    findAllMessagesSentByUser (req: Request, res: Response): void;
    findAllMessagesReceivedByUser (req: Request, res: Response): void;
    userSendMessageUser (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
};
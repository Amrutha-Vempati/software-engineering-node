import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import mongoose from "mongoose";
import TuitController from "./controllers/TuitController";


// connect to the database
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = "mongodb://localhost:27017/tuiter"
mongoose.connect(connectionString);

const app = express();

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const PORT = 4000;
app.listen(process.env.PORT || PORT);
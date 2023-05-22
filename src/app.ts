import cors from "cors";
import express, { Request, Response } from "express";
import bookRouter from "./app/modules/books/book.route";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//basic route :

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

//import routes :
app.use("/api/v1/book", bookRouter);

export default app;

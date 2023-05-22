import { Request, Response } from "express";
import { getBooksFrDb } from "./book.service";

export const getBooks = async (req: Request, res: Response) => {
  const books = await getBooksFrDb();
  res.status(200).send(books);
};

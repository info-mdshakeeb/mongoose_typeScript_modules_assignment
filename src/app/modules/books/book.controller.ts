import { Request, Response } from "express";
import {
  getBooksByGenreAndPublisherFrDb,
  getBooksByGenreFrDb,
  getBooksByRatingFrDb,
  getBooksFrDb,
} from "./book.service";

export const getBooks = async (req: Request, res: Response) => {
  const books = await getBooksFrDb();
  res.status(200).send(books);
};
// find a book by genre :
export const getBooksByGenre = async (req: Request, res: Response) => {
  const genre = req.params.genre;
  const books = await getBooksByGenreFrDb(genre);
  res.status(200).send(books);
};

// genre “Sci-Fi” and published by “Roli Books”.

export const getBooksByGenreAndPublisher = async (
  req: Request,
  res: Response
) => {
  const genre = "Sci-Fi";
  const publisher = "Roli Books";
  const books = await getBooksByGenreAndPublisherFrDb(genre, publisher);
  res.status(200).send(books);
};

// find by rating :
export const getBooksByRating = async (req: Request, res: Response) => {
  // const rating = req.params.rating;
  const rating = 4;
  const books = await getBooksByRatingFrDb(rating);
  res.status(200).send(books);
};

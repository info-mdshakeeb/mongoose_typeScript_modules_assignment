import { Router } from "express";
import {
  getBooks,
  getBooksByGenre,
  getBooksByGenreAndPublisher,
  getBooksByRating,
} from "./book.controller";

const router: Router = Router();

router.get("/all", getBooks);

// find a book by genre :
router.get("/:genre", getBooksByGenre);

// genre “Sci-Fi” and published by “Roli Books” when need.
// router.get("/genre/:genre/publisher/:publisher", getBooksByGenreAndPublisher);

router.get("/author/fixed", getBooksByGenreAndPublisher);

// find by rating :
router.get("/rating/static", getBooksByRating);

export default router;

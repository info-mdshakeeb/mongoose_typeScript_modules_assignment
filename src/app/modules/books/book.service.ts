import { IBooks } from "./book.interface";
import book from "./book.module";

export const getBooksFrDb = async (): Promise<IBooks[]> => book.find();
// find a book by genre :
export const getBooksByGenreFrDb = async (genre: string): Promise<IBooks[]> =>
  book.find({ genre: genre });

// genre “Sci-Fi” and published by “Roli Books”.
export const getBooksByGenreAndPublisherFrDb = async (
  genre: string,
  publisherName: string
): Promise<IBooks[]> =>
  book.find({
    $and: [{ genre: genre }, { "publisher.name": publisherName }],
  });

// find by rating :
export const getBooksByRatingFrDb = async (rating: number): Promise<IBooks[]> =>
  book.find({ rating: { $gte: rating } });

export const convertPriceToNumberFrDb = async () =>
  book.updateMany(
    {
      publicationYear: { $gt: 2020 },
      price: { $type: "string" },
    },
    [
      {
        $set: {
          price: {
            $cond: {
              if: { $: ["$publicationYear", 2020] },
              then: { $toInt: "$price" },
              else: "$price",
            },
          },
        },
      },
    ]
  );

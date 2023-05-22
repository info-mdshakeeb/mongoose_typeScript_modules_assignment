import { IBooks } from "./book.interface";
import book from "./book.module";

export const getBooksFrDb = async (): Promise<IBooks[]> => book.find();

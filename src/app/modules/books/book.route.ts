import { Router } from "express";
import { getBooks } from "./book.controller";

const router: Router = Router();

router.get("/all", getBooks);

export default router;

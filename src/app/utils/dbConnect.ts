import "dotenv/config";
import mongoose from "mongoose";
import logger from "./logger";

const mongooseUrl: string | undefined = process.env.MONGOOSE_URL;

const dbConnection = async (): Promise<void> => {
  if (!mongooseUrl) {
    logger.error("MongoDB URL not found");
    process.exit(1);
  }
  try {
    await mongoose
      .connect(mongooseUrl)
      .then(() => logger.info("Connected to MongoDB"));
  } catch (error) {
    logger.error(error);
  }
};
export default dbConnection;

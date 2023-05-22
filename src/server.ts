import "dotenv/config";
import app from "./app";
import dbConnection from "./app/utils/dbConnect";
import logger from "./app/utils/logger";

const port: string | undefined = process.env.PORT;
const startServer = (): void => {
  try {
    app.listen(port, () => logger.info(`server is connected : ${port}`));
    dbConnection();
  } catch (error: any) {
    logger.error(error);
    process.exit(1);
  }
};
startServer();

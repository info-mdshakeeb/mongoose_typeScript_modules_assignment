import pino from "pino";
import PinoPretty from "pino-pretty";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
});
export default logger;

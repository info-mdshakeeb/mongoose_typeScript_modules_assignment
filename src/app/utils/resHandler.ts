import { Response } from "express";

interface IResponse {
  success: boolean;
  error?: any;
  data?: any;
}
const resHandler = (
  res: Response,
  statusCode: number,
  success: boolean,
  error?: any,
  data?: any
) => {
  const apiResponseData: IResponse = { success };
  if (data) apiResponseData.data = data;
  if (error) apiResponseData.error = error;
  return res.status(statusCode);
};
export default resHandler;

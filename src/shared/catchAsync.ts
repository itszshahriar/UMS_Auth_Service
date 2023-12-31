/* eslint-disable no-console */
import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import { IGenericErrorMessage } from "../interfaces/errorType";
import sendResponse from "./sendResponse";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error) {
      sendResponse<IGenericErrorMessage>(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Single Semester Retrieve Successfully",
      });
    }
  };
};

export default catchAsync;

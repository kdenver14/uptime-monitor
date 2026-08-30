import type { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/httpStatus";

export const getAllMonitors = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    message: "Successfully retrieved all monitors",
    data: [],
  });
};

export const getMonitor = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    message: "Successfully retrived monitor",
    data: [],
  });
};

export const createMonitor = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.CREATED).json({
    message: "Successfully created monitor",
  });
};

export const updateMonitor = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    message: `Successfully updated monitor ${req.params.id}`,
  });
};

export const deleteMonitor = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.NO_CONTENT).send();
};

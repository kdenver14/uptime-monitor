import type { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/httpStatus.js";
import * as monitorService from "../services/monitorServices.js";
import type {
  CreateMonitorInput,
  UpdateMonitorInput,
} from "../domain/monitor.js";

export const getAllMonitors = async (req: Request, res: Response) => {
  const monitors = await monitorService.getAllMonitors();
  res.status(HTTP_STATUS.OK).json({
    message: "Successfully retrieved all monitors",
    data: monitors,
  });
};

export const getMonitor = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const monitor = await monitorService.getMonitorById(id);

  if (!monitor) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: `Monitor ${id} not found`,
    });
  }

  res.status(HTTP_STATUS.OK).json({
    message: "Successfully retrived monitor",
    data: monitor,
  });
};

export const createMonitor = async (req: Request, res: Response) => {
  const input: CreateMonitorInput = req.body;
  const monitor = await monitorService.createMonitor(input);

  res.status(HTTP_STATUS.CREATED).json({
    message: "Successfully created monitor",
    data: monitor,
  });
};

export const updateMonitor = async (req: Request, res: Response) => {
  const input: UpdateMonitorInput = req.body;
  const id = Number(req.params.id);
  const updatedMonitor = await monitorService.updateMonitor(id, input);

  if (!updatedMonitor) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: `Monitor ${id} not found`,
    });
  }

  res.status(HTTP_STATUS.OK).json({
    message: `Successfully updated monitor ${req.params.id}`,
    data: updatedMonitor,
  });
};

export const deleteMonitor = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const deletedMonitor = await monitorService.deleteMonitor(id);
  // await monitorService.deleteMonitor(id); this was my idea

  if (!deletedMonitor) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: `Monitor ${id} not found`,
    });
  }
  res.status(HTTP_STATUS.NO_CONTENT).send().json({
    message: deletedMonitor,
  });
};

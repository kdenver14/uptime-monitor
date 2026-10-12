import * as monitorRepository from "../repositories/monitorRepository.js";
import type {
  UpdateMonitorInput,
  CreateMonitorInput,
} from "../domain/monitor.js";

export const getAllMonitors = async () => {
  return monitorRepository.findAllMonitors();
};

export const getMonitorById = async (id: number) => {
  return monitorRepository.findMonitorById(id);
};

export const createMonitor = async (data: CreateMonitorInput) => {
  return monitorRepository.createMonitor(data);
};

export const updateMonitor = async (id: number, data: UpdateMonitorInput) => {
  return monitorRepository.updateMonitor(id, data);
};

export const deleteMonitor = async (id: number) => {
  return monitorRepository.deleteMonitor(id);
};

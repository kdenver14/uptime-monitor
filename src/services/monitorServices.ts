import * as monitorRepository from "../repositories/monitorRepository.js";

export const getAllMonitors = async () => {
  return monitorRepository.findAllMonitors();
};

export const getMonitorById = async (id: number) => {
  return monitorRepository.findMonitor(id);
};

// export const

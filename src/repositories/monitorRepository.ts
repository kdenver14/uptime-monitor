import { db } from "../prisma/db.js";
import type {
  UpdateMonitorInput,
  CreateMonitorInput,
} from "../domain/monitor.js";

export const findAllMonitors = async () => {
  return db.orm.public.Monitor.where({}).all();
};

export const findMonitorById = async (id: number) => {
  return db.orm.public.Monitor.where({ id }).first();
};

export const createMonitor = async (data: CreateMonitorInput) => {
  return db.orm.public.Monitor.create(data);
};

export const updateMonitor = async (id: number, data: UpdateMonitorInput) => {
  return db.orm.public.Monitor.where({ id }).update(data);
};

export const deleteMonitor = async (id: number) => {
  return db.orm.public.Monitor.where({ id }).delete();
};

import { db } from "../prisma/db.js";

interface UpdateMonitorInput {
  name?: string;
  url?: string;
  interval?: number;
  isActive?: boolean;
}

interface CreateMonitor {
  name: string;
  url: string;
  interval?: number;
  isActive: boolean;
}

export const findAllMonitors = async () => {
  return db.orm.public.Monitor.where({}).all();
};

export const findMonitor = async (id: number) => {
  return db.orm.public.Monitor.where({ id }).first();
};

export const createMonitor = async (data: CreateMonitor) => {
  return db.orm.public.Monitor.create(data);
};

export const updateMonitor = async (id: number, data: UpdateMonitorInput) => {
  return db.orm.public.Monitor.where({ id }).update(data);
};

export const deleteMonitor = async (id: number) => {
  return db.orm.public.Monitor.where({ id }).delete();
};

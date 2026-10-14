import * as z from "zod";

const MIN_INTERVAL_SECONDS: number = 30;

export const createMonitorSchema = z.object({
  name: z.string().min(1),
  url: z.url({ protocol: /^https?$/ }),
  interval: z.number().int().min(MIN_INTERVAL_SECONDS).exactOptional(),
  isActive: z.boolean(),
});

export const updateMonitorSchema = z.object({
  name: z.string().min(1).exactOptional(),
  url: z.url({ protocol: /^https?$/ }).exactOptional(),
  interval: z.number().int().min(MIN_INTERVAL_SECONDS).exactOptional(),
  isActive: z.boolean().exactOptional(),
});

export const monitorIdSchema = z.object({
  id: z.coerce.number().positive(),
});

export interface UpdateMonitorInput {
  name?: string;
  url?: string;
  interval?: number;
  isActive?: boolean;
}

export interface CreateMonitorInput {
  name: string;
  url: string;
  interval?: number;
  isActive: boolean;
}

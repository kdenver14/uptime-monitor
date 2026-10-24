export interface CheckResult {
  isUp: boolean;
  statusCode: number | null;
  responseTime: number;
  errorMessage: string | null;
}

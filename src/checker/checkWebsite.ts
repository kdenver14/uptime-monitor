import type { CheckResult } from "../domain/checkResult.js";

const REQUEST_TIMEOUT_MS = 10_000;

export const checkWebsite = async (url: string): Promise<CheckResult> => {
  const start = performance.now();

  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    return {
      isUp: response.ok,
      statusCode: response.status,
      responseTime: Math.round(performance.now() - start),
      errorMessage: null,
    };
  } catch (error) {
    return {
      isUp: false,
      statusCode: null,
      responseTime: Math.round(performance.now() - start),
      errorMessage: error instanceof Error ? error.message : String(error),
    };
  }
};

console.log(await checkWebsite("https://this-site-does-not-exist-12345.com"));

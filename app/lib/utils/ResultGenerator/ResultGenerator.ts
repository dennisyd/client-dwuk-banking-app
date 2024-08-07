interface Success {
  success: true;
  data: string;
}

interface Fail {
  success: false;
  error: Error;
}

export type Result = Success | Fail;

export class ResultGenerator {
  generateSuccess(data: string) {
    const success: Success = {
      success: true,
      data: data
    };
    return success;
  }

  generateError(err: unknown) {
    let fail: Fail = {
      success: false,
      error: new Error("Unknown Error")
    };

    if (err instanceof Error) {
      fail.error = err;
    }
    return fail;
  }
}


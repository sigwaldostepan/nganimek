export class ResponseError extends Error {
  public success: boolean;
  public statusCode: number;

  constructor(statusCode: number, success: boolean, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
  }
}

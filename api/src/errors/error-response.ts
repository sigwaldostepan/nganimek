export class ResponseError extends Error {
  public success: boolean;
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
  }
}

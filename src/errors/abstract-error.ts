/**
 * Abstract base error class for all poshmark-api errors
 */
export abstract class AbstractError extends Error {
  public abstract readonly name: string;
  public readonly timestamp: Date;

  constructor(message: string) {
    super(message);
    this.timestamp = new Date();
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Returns a JSON representation of the error
   */
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      timestamp: this.timestamp.toISOString(),
      stack: this.stack,
    };
  }
}

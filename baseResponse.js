class BaseResponse {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.timestamp = new Date();
  }

  get json() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      timestamp: this.timestamp,
    };
  }
}

module.exports = BaseResponse;

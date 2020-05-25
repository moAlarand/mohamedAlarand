export class ErrorType {
  static CONNECTION_ERROR = 'CONNECTION_ERROR';
  static INVALIDE_DATA = 'INVALIDE_DATA';
  static GENERAL_SERVER_ERROR = 'GENERAL_SERVER_ERROR';
  static STORAGE_ERROR = 'STORAGE_ERROR';
  static CANCEL = 'CANCEL';
}

export class ServerError extends Error {
  constructor(type, message) {
    super(message);
    this.type = type;
  }
}

export class LocalError extends Error {
  constructor(type, message) {
    super(message);
    this.type = type;
  }
}

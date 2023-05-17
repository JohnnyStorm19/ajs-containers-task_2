export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
  }

  translate(code) {
    const check = this.repository.has(code);
    if (!check) {
      throw new Error('Unknown error');
    }
    return this.repository.get(code);
  }
}

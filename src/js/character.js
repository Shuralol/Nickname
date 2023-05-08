export class Validator {
  validateUsername(username) {
    const pattern = /^(?!.*\d{4})[a-zA-Z0-9_-]{3,25}$/;
    return !!username.match(pattern);
  }
}

export class Validator {
  validateUsername(username) {
    const myRegExp = /^(?!.*\d{4})/;
    const usernameLatinDashLowerNumbers = /^[a-zA-Z0-9_-]{3,25}$/;
    const pattern = /^(?!.*\d{4})[a-zA-Z0-9_-]{3,25}$/;
    return !!username.match(pattern);
  }
}

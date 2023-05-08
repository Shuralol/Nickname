import {Validator} from "../character.js"
 describe("Validator", () => {
  const validator = new Validator();

  it("should return true if the username is valid", () => {
    expect(validator.validateUsername("username")).toBe(true);
    expect(validator.validateUsername("4name_")).toBe(true);
    expect(validator.validateUsername("_username_")).toBe(true);
    expect(validator.validateUsername("user-name")).toBe(true);
    expect(validator.validateUsername("123_user")).toBe(true);
  });

  it("should return false if the username is invalid", () => {
    expect(validator.validateUsername("name1234")).toBe(false);
    expect(validator.validateUsername("123name")).toBe(false);
    expect(validator.validateUsername("_name-")).toBe(false);
    expect(validator.validateUsername("name_!@#$%^&*()_+-=")).toBe(false);
    expect(validator.validateUsername("na")).toBe(false);
    expect(validator.validateUsername("a_")).toBe(false);
  });
});
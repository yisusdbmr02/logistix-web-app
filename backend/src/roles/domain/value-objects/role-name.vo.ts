/**
 * @file RoleName Value Object
 * @module RoleName
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This Value Object encapsulates the logic for handling roles names, ensuring they are valid strings.
 */
export class RoleName {
/** 
 * Value Object representing a role name.
 * It ensures that the name is a valid string with a minimum length.
 */
  constructor(private readonly value: string) {
    if (!value || value.length < 3) throw new Error('Invalid name');
  }
  /**
   * Gets the name value of the RoleName.
   * @return {string} The name of the role.
   * @method getValue
   * @description This method returns the name value of the RoleName instance.
   */
  getValue() {
    return this.value;
  }
}
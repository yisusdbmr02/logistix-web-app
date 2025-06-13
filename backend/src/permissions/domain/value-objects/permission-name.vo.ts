
/**
 * @file PermissionName Value Object
 * @module PermissionName
 * @author [Jesús Díaz]
 * @description This Value Object encapsulates the logic for handling permission names, ensuring they are valid strings.
 */
export class PermissionName {
/** 
 * Value Object representing a permission name.
 * It ensures that the name is a valid string with a minimum length.
 */
  constructor(private readonly value: string) {
    if (!value || value.length < 3) throw new Error('Invalid name');
  }
  /**
   * Gets the name value of the PermissionName.
   * @return {string} The name of the permission.
   * @method getValue
   * @description This method returns the name value of the PermissionName instance.
   */
  getValue() {
    return this.value;
  }
}
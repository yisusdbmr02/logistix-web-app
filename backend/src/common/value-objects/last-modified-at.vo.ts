/**
 * @file LastModifiedAt Value Object
 * @module LastModifiedAt
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This Value Object encapsulates the logic for handling last modified timestamps, ensuring they are valid and not before CreatedAt.
 */
export class LastModifiedAt {

  /**
   * Value Object representing a last modified date.
   * It ensures that the date is a valid Date object.
   * @constructor
   * @param {Date} [value=new Date()] - The last modified date. Defaults to the current date if not provided.
   * @throws {Error} If the provided value is not a valid Date object.
   * @description This Value Object encapsulates the logic for handling last modified timestamps, ensuring they are valid dates.
   */
  constructor(private readonly value: Date = new Date()) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error('Invalid LastModifiedAt date');
    }
  }
  /**
   * Gets the last modified date value of the LastModifiedAt.
   * @return {Date} The last modified date.
   * @method getValue
   * @description This method returns the last modified date value of the LastModifiedAt instance.
   */
  getValue(): Date {
    return this.value;
  }
  /**
   * Converts the LastModifiedAt value to a string representation.
   * @return {string} The ISO string representation of the last modified date.
   * @method toString
   * @description This method returns the ISO string representation of the last modified date.
   */
  toString(): string {
    return this.value.toISOString();
  }
}

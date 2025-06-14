/**
 * @file CreatedAt Value Object
 * @module CreatedAt
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This Value Object encapsulates the logic for handling creation timestamps, ensuring they are valid dates.
 */

export class CreatedAt {
/**
 * Value Object representing a creation date.
 * It ensures that the date is a valid Date object.
 * @constructor
 * @param {Date} [value=new Date()] - The creation date. Defaults to the current date if not provided.
 * @throws {Error} If the provided value is not a valid Date object.
 * @description This Value Object encapsulates the logic for handling creation timestamps, ensuring they are valid dates.
 */
  constructor(private readonly value: Date = new Date()) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error('Invalid creation date');
    }
  }
/**
 * Gets the creation date value of the CreatedAt.
 * @return {Date} The creation date.
 * @method getValue
 * @description This method returns the creation date value of the CreatedAt instance.
 */
  getValue(): Date {
    return this.value;
  }
/**
 * Converts the CreatedAt value to a string representation.
 * @return {string} The ISO string representation of the creation date.
 * @method toString
 * @description This method returns the ISO string representation of the creation date.
 */
  toString(): string {
    return this.value.toISOString();
  }
}

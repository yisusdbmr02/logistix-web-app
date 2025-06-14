/**
 * @fileoverview AuditTrail Value Object
 * @module AuditTrail
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description Encapsulates a CreatedAt and LastModifiedAt pair, ensuring consistency.
 */
import { CreatedAt } from './created-at.vo';
import { LastModifiedAt } from './last-modified-at.vo';

export class AuditTrail {
/**
 * Value Object representing a pair of AuditTrail: CreatedAt and LastModifiedAt.
 * It ensures that LastModifiedAt is not earlier than CreatedAt.
 * @constructor
 * @param {CreatedAt} [createdAt=new CreatedAt()] - The creation timestamp. Defaults to the current date if not provided.
 * @param {LastModifiedAt} [lastModifiedAt=new LastModifiedAt()] - The last modified timestamp. Defaults to the current date if not provided.
 * @throws {Error} If LastModifiedAt is earlier than CreatedAt.
 * @description This Value Object encapsulates the logic for handling timestamps, ensuring they are valid and consistent.
 *  
 */
  constructor(
    public readonly createdAt: CreatedAt = new CreatedAt(),
    public readonly lastModifiedAt: LastModifiedAt = new LastModifiedAt()
  ) {
    if (lastModifiedAt.getValue() < createdAt.getValue()) {
      throw new Error('LastModifiedAt cannot be earlier than CreatedAt');
    }
  }
/**
 * Gets the CreatedAt and lastModifiedAt timestamp.
 * @return {CreatedAt, lastModifiedAt} The CreatedAt and lastModifiedAt timestamp.
 * @method toObject
 * @description This method returns the CreatedAt and lastModifiedAt timestamp of the Timestamps instance.
 */
  toObject() {
    return {
      createdAt: this.createdAt.toString(),
      lastModifiedAt: this.lastModifiedAt.toString(),
    };
  }
}

/**
 * @fileoverview Mapper for converting a Permission entity to its persistence representation.
 * @module PermissionToPersistence
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This mapper is used to convert a Permission domain entity into a format suitable for persistence in the database.
 * It encapsulates the logic for transforming the domain entity into a structure that can be stored in a database.
 */
import { Permission } from '../../../domain/entities/permission.entity';

/**
 * Mapper class for converting a Permission domain entity to its persistence representation.
 * @class PermissionToPersistence
 * @description This class provides a static method to convert a Permission entity into a format suitable for database storage.
 */
export class PermissionToPersistence {
  /**
   * Converts a Permission domain entity to its persistence representation.
   * @param {Permission} permission - The Permission entity to be converted.
   * @returns {object} The persistence representation of the Permission entity.
   * @description This method takes a Permission entity and returns an object that contains the ID and name of the permission,
   * formatted for storage in a database.
   */
  static toPersistence(permission: Permission): any {
    return {
      _id: permission.getId(),
      name: permission.getName(),
      createdAt: permission.getCreatedAt(),
      lastModifiedAt: permission.getLastModifiedAt(),
    };
  }
}
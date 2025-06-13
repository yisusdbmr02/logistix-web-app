/**
 * @fileoverview Mapper for converting raw permission data to a domain entity.
 * @module PermissionToDomain
 * @author [Jesús Díaz]
 * @description This mapper is used to convert raw permission data from the database into a domain entity.
 * It encapsulates the logic for transforming the raw data structure into a format that the domain layer can work with.
 */
import { Permission } from '../../../domain/entities/permission.entity';
import { PermissionId } from '../../../domain/value-objects/permission-id.vo';
import { PermissionName } from '../../../domain/value-objects/permission-name.vo';

/**
 * Mapper class for converting raw permission data to a domain entity.
 * @class PermissionToDomain
 * @description This class provides a static method to convert raw permission data into a Permission domain entity.
 */
export class PermissionToDomain {
  /**
   * Converts raw permission data to a Permission domain entity.
   * @param {any} raw - The raw permission data from the database.
   * @returns {Permission} The converted Permission domain entity.
   * @description This method takes raw permission data, extracts the necessary fields,
   * and constructs a Permission entity using the PermissionId and PermissionName value objects.
   */
  static toDomain(raw: any): Permission {
    return new Permission(
      new PermissionId(raw._id.toString()),
      new PermissionName(raw.name),
    );
  }
}
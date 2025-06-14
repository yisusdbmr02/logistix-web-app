/**
 * @fileoverview Mapper for converting raw role data to a domain entity.
 * @module RoleToDomain
 * @author [Jesús Díaz]
 * @description This mapper is used to convert raw role data from the database into a domain entity.
 * It encapsulates the logic for transforming the raw data structure into a format that the domain layer can work with.
 */
import { AuditTrail } from 'src/common/value-objects/audit-trail.vo';
import { Role } from '../../../domain/entities/role.entity';
import { RoleId } from '../../../domain/value-objects/role-id.vo';
import { RoleName } from '../../../domain/value-objects/role-name.vo';
import { CreatedAt } from 'src/common/value-objects/created-at.vo';
import { LastModifiedAt } from 'src/common/value-objects/last-modified-at.vo';

/**
 * Mapper class for converting raw role data to a domain entity.
 * @class RoleToDomain
 * @description This class provides a static method to convert raw role data into a Role domain entity.
 */
export class RoleToDomain {
  /**
   * Converts raw role data to a Role domain entity.
   * @param {any} raw - The raw role data from the database.
   * @returns {Role} The converted Role domain entity.
   * @description This method takes raw role data, extracts the necessary fields,
   * and constructs a Role entity using the RoleId and RoleName value objects.
   */
  static toDomain(raw: any): Role {
    return new Role(
      new RoleId(raw._id.toString()),
      new RoleName(raw.name),
      new AuditTrail(
        new CreatedAt(raw.createdAt),
        new LastModifiedAt(raw.lastModifiedAt)
      )
    );
  }
}
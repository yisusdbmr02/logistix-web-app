/**
 * @fileoverview Repository for updating permissions in the database.
 * @module UpdatePermissionRepository
 * @author [Jesús Díaz]
 * @description This repository provides methods to update existing permissions in the database.
 * It uses Mongoose for MongoDB interactions and maps between domain entities and persistence models.
 */
import { Injectable } from '@nestjs/common';
import { Permission } from '../../../domain/entities/permission.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionToPersistence } from '../mappers/permission-to-persistence.mapper';
import { PermissionToDomain } from '../mappers/permission-to-domain.mapper';

/**
 * Repository for updating a permission in the database.
 * @class UpdatePermissionRepository
 * @description This class provides methods to update an existing permission entity in the database.
 * It uses Mongoose to interact with the MongoDB database and maps the domain entity to a persistence model.
 */
@Injectable()
export class UpdatePermissionRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Permission entity.
   * @description This constructor injects the Mongoose model for the Permission entity,
   * allowing the repository to perform CRUD operations on the Permission collection in the database.
   */
  constructor(@InjectModel('Permission') private readonly model: Model<any>) {}
  /**
   * Updates a permission in the database.
   * @param {string} id - The ID of the permission to be updated.
   * @param {Permission} permission - The updated permission entity.
   * @returns {Promise<Permission>} A promise that resolves to the updated Permission entity.
   * @description This method updates an existing permission in the database using its ID.
   * It maps the domain entity to its persistence representation, updates it in the database,
   * and returns the updated permission mapped back to the domain format.
   */
  async update(id: string, permission: Permission): Promise<Permission> {
    await this.model.findByIdAndUpdate(id, PermissionToPersistence.toPersistence(permission));
    const updated = await this.model.findById(id);
    if (!updated) throw new Error('Permission not found after update');
    return PermissionToDomain.toDomain(updated);
  }
}


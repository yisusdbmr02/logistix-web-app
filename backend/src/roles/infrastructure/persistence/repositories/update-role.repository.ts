/**
 * @fileoverview Repository for updating roles in the database.
 * @module UpdateRoleRepository
 * @author [Jesús Díaz]
 * @description This repository provides methods to update existing roles in the database.
 * It uses Mongoose for MongoDB interactions and maps between domain entities and persistence models.
 */
import { Injectable } from '@nestjs/common';
import { Role } from '../../../domain/entities/role.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleToPersistence } from '../mappers/role-to-persistence.mapper';
import { RoleToDomain } from '../mappers/role-to-domain.mapper';

/**
 * Repository for updating a role in the database.
 * @class UpdateRoleRepository
 * @description This class provides methods to update an existing role entity in the database.
 * It uses Mongoose to interact with the MongoDB database and maps the domain entity to a persistence model.
 */
@Injectable()
export class UpdateRoleRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Role entity.
   * @description This constructor injects the Mongoose model for the Role entity,
   * allowing the repository to perform CRUD operations on the Role collection in the database.
   */
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}
  /**
   * Updates a role in the database.
   * @param {string} id - The ID of the role to be updated.
   * @param {Role} role - The updated role entity.
   * @returns {Promise<Role>} A promise that resolves to the updated Role entity.
   * @description This method updates an existing role in the database using its ID.
   * It maps the domain entity to its persistence representation, updates it in the database,
   * and returns the updated role mapped back to the domain format.
   */
  async update(id: string, role: Role): Promise<Role> {
    await this.model.findByIdAndUpdate(id, RoleToPersistence.toPersistence(role));
    const updated = await this.model.findById(id);
    if (!updated) throw new Error('Role not found after update');
    return RoleToDomain.toDomain(updated);
  }
}


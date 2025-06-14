/**
 * @fileoverview Repository for finding roles in the database.
 * @module FindRoleRepository
 * @author [Jesús Díaz]
 * @description This repository provides methods to find roles by their ID.
 * It uses Mongoose to interact with the MongoDB database and maps the found documents to domain entities.
 */
import { Injectable } from '@nestjs/common';
import { Role } from '../../../domain/entities/role.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleToDomain } from '../mappers/role-to-domain.mapper';

/**
 * Repository for finding a role by its ID in the database.
 * @class FindRoleRepository
 * @description This class provides methods to retrieve a role entity from the database by its ID.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved document to a domain entity.
 */
@Injectable()
export class FindRoleRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Role entity.
   * @description This constructor injects the Mongoose model for the Role entity,
   * allowing the repository to perform CRUD operations on the Role collection in the database.
   */
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}
  /**
   * Finds a role by its ID.
   * @param {string} id - The ID of the role to be found.
   * @returns {Promise<Role | null>} A promise that resolves to the found Role entity or null if not found.
   * @description This method retrieves a role document from the database by its ID,
   * maps it to a domain entity, and returns it. If no role is found with the given ID, it returns null.
   */
  async findById(id: string): Promise<Role | null> {
    const found = await this.model.findById(id);
    if (!found) return null;
    return RoleToDomain.toDomain(found);
  }
}

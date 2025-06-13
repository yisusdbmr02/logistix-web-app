/**
 * @fileoverview Repository for finding permissions in the database.
 * @module FindPermissionRepository
 * @author [Jesús Díaz]
 * @description This repository provides methods to find permissions by their ID.
 * It uses Mongoose to interact with the MongoDB database and maps the found documents to domain entities.
 */
import { Injectable } from '@nestjs/common';
import { Permission } from '../../../domain/entities/permission.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionToDomain } from '../mappers/permission-to-domain.mapper';

/**
 * Repository for finding a permission by its ID in the database.
 * @class FindPermissionRepository
 * @description This class provides methods to retrieve a permission entity from the database by its ID.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved document to a domain entity.
 */
@Injectable()
export class FindPermissionRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Permission entity.
   * @description This constructor injects the Mongoose model for the Permission entity,
   * allowing the repository to perform CRUD operations on the Permission collection in the database.
   */
  constructor(@InjectModel('Permission') private readonly model: Model<any>) {}
  /**
   * Finds a permission by its ID.
   * @param {string} id - The ID of the permission to be found.
   * @returns {Promise<Permission | null>} A promise that resolves to the found Permission entity or null if not found.
   * @description This method retrieves a permission document from the database by its ID,
   * maps it to a domain entity, and returns it. If no permission is found with the given ID, it returns null.
   */
  async findById(id: string): Promise<Permission | null> {
    const found = await this.model.findById(id);
    if (!found) return null;
    return PermissionToDomain.toDomain(found);
  }
}

/**
 * @fileoverview Repository for finding all permissions.
 * @module FindAllPermissionsRepository
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This repository is responsible for retrieving all permissions from the database.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved documents to domain entities.
 * The repository provides a method to find all permissions, returning an array of Permission entities.
 */
import { Injectable } from '@nestjs/common';
import { Permission } from '../../../domain/entities/permission.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionToDomain } from '../mappers/permission-to-domain.mapper';

/**
 * Repository for finding all permissions in the database.
 * @class FindAllPermissionsRepository
 * @description This class provides methods to retrieve all permission entities from the database.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved documents to domain entities.
 */
@Injectable()
export class FindAllPermissionsRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Permission entity.
   * @description This constructor injects the Mongoose model for the Permission entity,
   * allowing the repository to perform CRUD operations on the Permission collection in the database.
   */
  constructor(@InjectModel('Permissions') private readonly model: Model<any>) {}
  /**
   * Finds all permissions in the database.
   * @returns {Promise<Permission[]>} A promise that resolves to an array of Permission entities.
   * @description This method retrieves all permission documents from the database,
   * maps them to domain entities, and returns them as an array of Permission objects.
   */
  async findAll(): Promise<Permission[]> {
    const docs = await this.model.find();
    return docs.map(doc => PermissionToDomain.toDomain(doc));
  }
}

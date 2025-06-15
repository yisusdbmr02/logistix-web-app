/**
 * @fileoverview CreatePermissionRepository
 * @module CreatePermissionRepository
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This repository is responsible for creating a new permission in the database.
 * It uses Mongoose to interact with the MongoDB database.
 * The repository maps the domain entity to a persistence model and vice versa.
 */
import { Injectable } from '@nestjs/common';
import { Permission } from '../../../domain/entities/permission.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PermissionToPersistence } from '../mappers/permission-to-persistence.mapper';
import { PermissionToDomain } from '../mappers/permission-to-domain.mapper';
/**
 * Repository for creating a new permission in the database.
 * @class CreatePermissionRepository
 * @description This class provides methods to create a new permission entity in the database.
 * It uses Mongoose to interact with the MongoDB database and maps the domain entity to a persistence model.
 */
@Injectable()
export class CreatePermissionRepository {
  /** 
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Permission entity.
   * @description This constructor injects the Mongoose model for the Permission entity,
   * allowing the repository to perform CRUD operations on the Permission collection in the database.
   * It uses the `@InjectModel` decorator to inject the model, which is defined in the Mongoose schema.
   * The model is used to create, read, update, and delete permissions in the database.
  */
  constructor(@InjectModel('Permissions') private readonly model: Model<any>) {}

  /**
   * Creates a new permission in the database.
   * @param {Permission} permission - The permission entity to be created.
   * @returns {Promise<Permission>} A promise that resolves to the created permission entity.
   * @description This method takes a Permission domain entity, maps it to its persistence representation,
   * and saves it to the database. It returns the created permission entity mapped back to the domain format.
   */
  async create(permission: Permission): Promise<Permission> {
    const created = await this.model.create(PermissionToPersistence.toPersistence(permission));
    return PermissionToDomain.toDomain(created);
  }
}

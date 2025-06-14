/**
 * @fileoverview CreateRoleRepository
 * @module CreateRoleRepository
 * @author [Jesús Díaz]
 * @description This repository is responsible for creating a new role in the database.
 * It uses Mongoose to interact with the MongoDB database.
 * The repository maps the domain entity to a persistence model and vice versa.
 */
import { Injectable } from '@nestjs/common';
import { Role } from '../../../domain/entities/role.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleToPersistence } from '../mappers/role-to-persistence.mapper';
import { RoleToDomain } from '../mappers/role-to-domain.mapper';
/**
 * Repository for creating a new role in the database.
 * @class CreateRoleRepository
 * @description This class provides methods to create a new role entity in the database.
 * It uses Mongoose to interact with the MongoDB database and maps the domain entity to a persistence model.
 */
@Injectable()
export class CreateRoleRepository {
  /** 
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Role entity.
   * @description This constructor injects the Mongoose model for the Role entity,
   * allowing the repository to perform CRUD operations on the Role collection in the database.
   * It uses the `@InjectModel` decorator to inject the model, which is defined in the Mongoose schema.
   * The model is used to create, read, update, and delete roles in the database.
  */
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}

  /**
   * Creates a new role in the database.
   * @param {Role} role - The role entity to be created.
   * @returns {Promise<Role>} A promise that resolves to the created role entity.
   * @description This method takes a Role domain entity, maps it to its persistence representation,
   * and saves it to the database. It returns the created role entity mapped back to the domain format.
   */
  async create(role: Role): Promise<Role> {
    const created = await this.model.create(RoleToPersistence.toPersistence(role));
    return RoleToDomain.toDomain(created);
  }
}

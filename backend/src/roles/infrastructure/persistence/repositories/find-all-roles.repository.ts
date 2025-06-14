/**
 * @fileoverview Repository for finding all roles.
 * @module FindAllRolesRepository
 * @author [Jesús Díaz]
 * @description This repository is responsible for retrieving all roles from the database.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved documents to domain entities.
 * The repository provides a method to find all roles, returning an array of Role entities.
 */
import { Injectable } from '@nestjs/common';
import { Role } from '../../../domain/entities/role.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleToDomain } from '../mappers/role-to-domain.mapper';

/**
 * Repository for finding all roles in the database.
 * @class FindAllRolesRepository
 * @description This class provides methods to retrieve all role entities from the database.
 * It uses Mongoose to interact with the MongoDB database and maps the retrieved documents to domain entities.
 */
@Injectable()
export class FindAllRolesRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Role entity.
   * @description This constructor injects the Mongoose model for the Role entity,
   * allowing the repository to perform CRUD operations on the Role collection in the database.
   */
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}
  /**
   * Finds all roles in the database.
   * @returns {Promise<Role[]>} A promise that resolves to an array of Role entities.
   * @description This method retrieves all role documents from the database,
   * maps them to domain entities, and returns them as an array of Role objects.
   */
  async findAll(): Promise<Role[]> {
    const docs = await this.model.find();
    return docs.map(doc => RoleToDomain.toDomain(doc));
  }
}

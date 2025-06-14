/**
 * @fileoverview Repository for deleting a role.
 * @module DeleteRoleRepository
 * @author [Jesús Díaz]
 * @description This repository is responsible for deleting a role from the database.
 * It uses Mongoose to interact with the MongoDB database.
 * The repository provides a method to delete a role by its ID.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
/**
 * Repository for deleting a role from the database.
 * @class DeleteRoleRepository
 * @description This class provides methods to delete a role entity from the database.
 * It uses Mongoose to interact with the MongoDB database and provides a method to delete a role by its ID.
 */
@Injectable()
export class DeleteRoleRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Role entity.
   * @description This constructor injects the Mongoose model for the Role entity,
   * allowing the repository to perform CRUD operations on the Role collection in the database.
   * It uses the `@InjectModel` decorator to inject the model, which is defined in the Mongoose schema.
   */
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}
  /**
   * Deletes a role by its ID.
   * @param {string} id - The ID of the role to be deleted.
   * @returns {Promise<void>} A promise that resolves when the role is deleted.
   * @description This method deletes a role from the database using its ID.
   * It uses Mongoose's `findByIdAndDelete` method to remove the role from the collection.
   */
  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}

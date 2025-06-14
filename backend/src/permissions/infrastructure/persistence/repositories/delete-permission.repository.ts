/**
 * @fileoverview Repository for deleting a permission.
 * @module DeletePermissionRepository
 * @author [Jesús Díaz]
 * @description This repository is responsible for deleting a permission from the database.
 * It uses Mongoose to interact with the MongoDB database.
 * The repository provides a method to delete a permission by its ID.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
/**
 * Repository for deleting a permission from the database.
 * @class DeletePermissionRepository
 * @description This class provides methods to delete a permission entity from the database.
 * It uses Mongoose to interact with the MongoDB database and provides a method to delete a permission by its ID.
 */
@Injectable()
export class DeletePermissionRepository {
  /**
   * @constructor
   * @param {Model<any>} model - The Mongoose model for the Permission entity.
   * @description This constructor injects the Mongoose model for the Permission entity,
   * allowing the repository to perform CRUD operations on the Permission collection in the database.
   * It uses the `@InjectModel` decorator to inject the model, which is defined in the Mongoose schema.
   */
  constructor(@InjectModel('Permissions') private readonly model: Model<any>) {}
  /**
   * Deletes a permission by its ID.
   * @param {string} id - The ID of the permission to be deleted.
   * @returns {Promise<void>} A promise that resolves when the permission is deleted.
   * @description This method deletes a permission from the database using its ID.
   * It uses Mongoose's `findByIdAndDelete` method to remove the permission from the collection.
   */
  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}

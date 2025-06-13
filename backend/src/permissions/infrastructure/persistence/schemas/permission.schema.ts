/**
 * @fileoverview Schema for the Permission entity.
 * @module PermissionSchema
 * @author [Jesús Díaz]
 * @description This schema defines the structure of the Permission entity in the database.
 * It specifies the fields and their types, which are used for validation and data integrity.
 */
import { Schema } from 'mongoose';

/**
 * Schema for the Permission entity.
 * @class PermissionSchema
 * @description This schema defines the structure of the Permission entity in the database.
 * It includes fields for the permission ID and name, with validation rules.
 */
export const PermissionSchema = new Schema({
   _id: { type: String },
  name: { type: String, required: true },
});
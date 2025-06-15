/**
 * @fileoverview Schema for the Permission entity.
 * @module PermissionSchema
 * @author [Jesús Díaz]
 * @version 1.1.0
 * @description This schema defines the structure of the Permission entity in the database.
 * It specifies the fields and their types, which are used for validation and data integrity.
 */
import { Schema } from 'mongoose';

/**
 * Schema for the Permission entity.
 * @class PermissionSchema
 * @description This schema defines the structure of the Permission entity in the database.
 * It includes fields for the permission ID, name, createdAt and lastModifiedAt, with validation rules.
 */
export const PermissionSchema = new Schema({
   _id: { type: String },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastModifiedAt: { type: Date, default: Date.now },
});
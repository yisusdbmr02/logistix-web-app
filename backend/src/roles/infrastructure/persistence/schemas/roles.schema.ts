/**
 * @fileoverview Schema for the Roles entity.
 * @module RolesSchema
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This schema defines the structure of the Roles entity in the database.
 * It specifies the fields and their types, which are used for validation and data integrity.
 */
import { Schema } from 'mongoose';

/**
 * Schema for the Roles entity.
 * @class RolesSchema
 * @description This schema defines the structure of the Roles entity in the database.
 * It includes fields for the permission ID, name, createdAt, lastModifiedAt, with validation rules.
 */
export const RolesSchema = new Schema({
    _id: { type: String },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    lastModifiedAt: { type: Date, default: Date.now }
});
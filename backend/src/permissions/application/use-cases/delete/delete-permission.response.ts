/**
 * @fileoverview Response class for the delete permission use case.
 * @module DeletePermissionResponse
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This class encapsulates the response data for the delete permission operation.
 * It includes a success flag and a message indicating the result of the operation.
 */
export class DeletePermissionResponse {
/** 
 * @constructor
 * @param {boolean} success - Indicates whether the permission deletion was successful.
 * @description This constructor initializes the response with a success flag.
 * It is used to indicate if the permission was deleted successfully or if there was an error.
*/
  constructor(private readonly success: boolean) {}

  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the delete permission response.
   * @description This method returns an object containing the success status and a message.
   */
  toJSON() {
    return {
      success: this.success,
      message: this.success ? 'Permission deleted successfully.' : 'Failed to delete permission.',
    };
  }
}

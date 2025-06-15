/**
 * @fileoverview Unit tests for DeleteRoleResolver
 * @module DeleteRoleResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the DeleteRoleResolver class,
 * which handles the GraphQL mutation for deleting a role.
 * It uses Jest for testing and mocks the DeleteRoleCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteRoleResolver } from 'src/roles/presentation/graphql/resolvers/delete-role.resolver';
import { DeleteRoleCommandHandler } from 'src/roles/application/use-cases/delete/delete-role.command-handler';
/**
 * @description Unit tests for DeleteRoleResolver
 * @class DeleteRoleResolver
 */
describe('DeleteRoleResolver', () => {
  let resolver: DeleteRoleResolver;
  let commandHandler: DeleteRoleCommandHandler;
  /**
   * Setup for the DeleteRoleResolver tests
   * @function beforeEach
   * @async
   * @returns {Promise<void>}
   * @description This function initializes the testing module and provides a mock implementation of the DeleteRoleCommandHandler.
   * It is called before each test to ensure a clean state.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteRoleResolver,
        {
          provide: DeleteRoleCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<DeleteRoleResolver>(DeleteRoleResolver);
    commandHandler = module.get<DeleteRoleCommandHandler>(DeleteRoleCommandHandler);
  });
/**
 * Test to check if the resolver is defined
 * @function it
 * @description This test verifies that the DeleteRoleResolver instance is created successfully.
 */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
/**
 * Test to check if the command handler's execute method is called with the correct id
 * @function it
 * @description This test verifies that the execute method of the DeleteRoleCommandHandler is called with the correct role id
 * and that it returns a success status.
 * It mocks the execute method to return true, simulating a successful deletion.
 */

  it('should call commandHandler.execute with id and return success status', async () => {
    const mockResponse = {
      toJSON: jest.fn().mockReturnValue({ success: true }),
    };

    (commandHandler.execute as jest.Mock).mockResolvedValue(mockResponse);

    const result = await resolver.deleteRole('123');

    expect(commandHandler.execute).toHaveBeenCalledWith(expect.objectContaining({ id: '123' }));
    expect(result).toBe(true);
  });
});

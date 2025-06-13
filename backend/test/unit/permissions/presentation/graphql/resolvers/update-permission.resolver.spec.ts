/**
 * @fileoverview Unit tests for UpdatePermissionResolver
 * @module UpdatePermissionResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the UpdatePermissionResolver class,   
 * which handles the GraphQL mutation for updating a permission.
 * It uses Jest for testing and mocks the UpdatePermissionCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePermissionResolver } from '../../../../../../src/permissions/presentation/graphql/resolvers/update-permission.resolver';
import { UpdatePermissionCommandHandler } from '../../../../../../src/permissions/application/use-cases/update/update-permission.command-handler';
/**
 * @description Unit tests for UpdatePermissionResolver
 * @class UpdatePermissionResolver
 */
describe('UpdatePermissionResolver', () => {
  let resolver: UpdatePermissionResolver;
  let commandHandler: UpdatePermissionCommandHandler;
/**
 * Setup for the UpdatePermissionResolver tests
 * @function beforeEach
 * @async
 * @returns {Promise<void>}
 * @description This function initializes the testing module and provides a mock implementation of the UpdatePermissionCommandHandler.
 * It is called before each test to ensure a clean state.
 * 
 */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePermissionResolver,
        {
          provide: UpdatePermissionCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<UpdatePermissionResolver>(UpdatePermissionResolver);
    commandHandler = module.get<UpdatePermissionCommandHandler>(UpdatePermissionCommandHandler);
  });
    /**
     * Test to check if the resolver is defined
     * @function it
     * @description This test verifies that the UpdatePermissionResolver instance is created successfully.
     */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the command handler's execute method is called with the correct arguments
     * @function it
     * @description This test verifies that the execute method of the UpdatePermissionCommandHandler is called with the correct permission data
     * and that it returns the updated permission.
     */
  it('should call commandHandler.execute with correct arguments', async () => {
    const mockPermission = { id: '123', name: 'UPDATED_NAME' };
    (commandHandler.execute as jest.Mock).mockResolvedValue({
      toJSON: () => mockPermission,
    });

    const result = await resolver.updatePermission({ id: '123', name: 'UPDATED_NAME' });

    expect(commandHandler.execute).toHaveBeenCalledWith({ id: '123', name: 'UPDATED_NAME' });
    expect(result).toEqual(mockPermission);
  });
});

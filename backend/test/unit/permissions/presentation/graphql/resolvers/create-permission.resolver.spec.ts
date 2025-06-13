/**
 * @fileoverview Unit tests for CreatePermissionResolver
 * @module CreatePermissionResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the CreatePermissionResolver class,
 * which handles the GraphQL mutation for creating a permission.
 * It uses Jest for testing and mocks the CreatePermissionCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { CreatePermissionResolver } from '../../../../../../src/permissions/presentation/graphql/resolvers/create-permission.resolver';
import { CreatePermissionCommandHandler } from '../../../../../../src/permissions/application/use-cases/create/create-permission-command-handler';
/**
 * @description Unit tests for CreatePermissionResolver
 * @class CreatePermissionResolver
 */
describe('CreatePermissionResolver', () => {
  let resolver: CreatePermissionResolver;
  let commandHandler: CreatePermissionCommandHandler;
    /**
     * Setup for the CreatePermissionResolver tests
     * @function beforeEach
     * @async
     * @returns {Promise<void>}
     * @description This function initializes the testing module and provides a mock implementation of the CreatePermissionCommandHandler.
     * It is called before each test to ensure a clean state.
     */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePermissionResolver,
        {
          provide: CreatePermissionCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<CreatePermissionResolver>(CreatePermissionResolver);
    commandHandler = module.get<CreatePermissionCommandHandler>(CreatePermissionCommandHandler);
  });
    /**
     * Test to check if the resolver is defined
     * @function it
     * @description This test verifies that the CreatePermissionResolver instance is created successfully.
     */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the command handler's execute method is called with the correct arguments
     * @function it
     * @description This test verifies that the execute method of the CreatePermissionCommandHandler is called with the correct permission data
     * and that it returns the created permission.
     */
  it('should call commandHandler.execute with correct arguments', async () => {
    const mockPermission = { id: '123', name: 'READ_USERS' };
    (commandHandler.execute as jest.Mock).mockResolvedValue({
      toJSON: () => mockPermission,
    });

    const result = await resolver.createPermission({ name: 'CREATE_PERMISSION' });

    expect(commandHandler.execute).toHaveBeenCalledWith({ name: 'CREATE_PERMISSION' });
    expect(result).toEqual(mockPermission);
  });
});

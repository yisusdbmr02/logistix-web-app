/**
 * @fileoverview Unit tests for FindAllPermissionsResolver
 * @module FindAllPermissionsResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the FindAllPermissionsResolver class,
 * which handles the GraphQL query for finding all permissions.
 * It uses Jest for testing and mocks the FindAllPermissionsQueryHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPermissionsResolver } from '../../../../../../src/permissions/presentation/graphql/resolvers/find-all-permissions.resolver';
import { FindAllPermissionsQueryHandler } from '../../../../../../src/permissions/application/use-cases/find-all/find-all-permissions.query-handler';
/**
 * @description Unit tests for FindAllPermissionsResolver
 * @class FindAllPermissionsResolver
 */
describe('FindAllPermissionsResolver', () => {
  let resolver: FindAllPermissionsResolver;
  let queryHandler: FindAllPermissionsQueryHandler;
  /**
   * Setup for the FindAllPermissionsResolver tests
   * @function beforeEach
   * @async
   * @returns {Promise<void>}
   * @description This function initializes the testing module and provides a mock implementation of the FindAllPermissionsQueryHandler.
   * It is called before each test to ensure a clean state.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllPermissionsResolver,
        {
          provide: FindAllPermissionsQueryHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<FindAllPermissionsResolver>(FindAllPermissionsResolver);
    queryHandler = module.get<FindAllPermissionsQueryHandler>(FindAllPermissionsQueryHandler);
  });
  /**
   * Test to check if the resolver is defined
   * @function it
   * @description This test verifies that the FindAllPermissionsResolver instance is created successfully.
   */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  /**
   * Test to check if the query handler's execute method is called and returns permissions
   * @function it
   * @description This test verifies that the execute method of the FindAllPermissionsQueryHandler is called
   * and that it returns an array of permissions.
   */
  it('should call queryHandler.execute and return permissions array', async () => {
   const mockPermissions = {
      toJSON: jest.fn().mockReturnValue([
        { id: '1', name: 'READ_USERS' },
        { id: '2', name: 'WRITE_USERS' },
      ]),
    };
    (queryHandler.execute as jest.Mock).mockResolvedValue(mockPermissions);

    const result = await resolver.findAllPermissions();

    expect(queryHandler.execute).toHaveBeenCalled();
    expect(result).toEqual(mockPermissions.toJSON());

  });
});

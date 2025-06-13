/**
 * @fileoverview Unit tests for FindPermissionByIdResolver
 * @module FindPermissionByIdResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the FindPermissionByIdResolver class,
 * which handles the GraphQL query for finding a permission by its ID.
 * It uses Jest for testing and mocks the FindPermissionByIdQueryHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { FindPermissionByIdResolver } from '../../../../../../src/permissions/presentation/graphql/resolvers/find-by-id-permission.resolver';
import { FindPermissionByIdQueryHandler } from '../../../../../../src/permissions/application/use-cases/find-by-id/find-permission-by-id.query-handler';
import { FindPermissionByIdQuery } from 'src/permissions/application/use-cases/find-by-id/find-permission-by-id.query';
/**
 * @description Unit tests for FindPermissionByIdResolver
 * @class FindPermissionByIdResolver
 */
describe('FindPermissionByIdResolver', () => {
  let resolver: FindPermissionByIdResolver;
  let queryHandler: FindPermissionByIdQueryHandler;
    /**
     * Setup for the FindPermissionByIdResolver tests
     * @function beforeEach
     * @async
     * @returns {Promise<void>}
     * @description This function initializes the testing module and provides a mock implementation of the FindPermissionByIdQueryHandler.
     * It is called before each test to ensure a clean state.
     */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindPermissionByIdResolver,
        {
          provide: FindPermissionByIdQueryHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<FindPermissionByIdResolver>(FindPermissionByIdResolver);
    queryHandler = module.get<FindPermissionByIdQueryHandler>(FindPermissionByIdQueryHandler);
  });


  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the query handler's execute method is called with the correct id
     * @function it
     * @description This test verifies that the execute method of the FindPermissionByIdQueryHandler is called with the correct permission id
     * and that it returns the permission object.
     */
  it('should call queryHandler.execute with id and return permission', async () => {
    const mockPermission = {
      toJSON: jest.fn().mockReturnValue({ id: '123', name: 'READ_USERS' }),
    };
    (queryHandler.execute as jest.Mock).mockResolvedValue(mockPermission);

    const result = await resolver.findPermissionById('123');

    expect(queryHandler.execute).toHaveBeenCalledWith(new FindPermissionByIdQuery('123'));
    expect(result).toEqual({ id: '123', name: 'READ_USERS' });
  });
});

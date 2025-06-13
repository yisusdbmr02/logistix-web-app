# Permissions Module

This module handles permissions management following Clean Architecture principles using NestJS, MongoDB, and GraphQL.

## Features

- Create, update, delete, and fetch permissions.
- Uses UUIDs for permission IDs.
- Implements domain entities, value objects, repositories, use cases, and GraphQL resolvers.
- Clear separation of concerns for maintainability and scalability.

## Project Structure

```
permissions/
├── application/
│   ├── dto/
│   └── use-cases/
├── domain/
│   ├── entities/
│   ├── exceptions/
│   ├── interfaces/
│   └── value-objects/
├── infrastructure/
│   ├── persistence/
│   │   ├── mappers/
│   │   ├── repositories/
│   │   └── schemas/
├── presentation/
│   └── graphql/
│       └── dtos/
│       └── entities/
│       └── resolvers/
```

## GraphQL API Endpoints

- `createPermission(name: String!): Permission`
- `updatePermission(id: String!, name: String): Permission`
- `deletePermission(id: String!): DeleteResponse`
- `findPermissionById(id: String!): Permission`
- `findAllPermissions: [Permission!]`

## Notes

- DTOs are used for input validation and output formatting.
- Domain entities encapsulate business logic.
- Repositories handle database persistence.
- Use cases contain application business rules.
- Resolvers expose GraphQL operations.

## License

MIT

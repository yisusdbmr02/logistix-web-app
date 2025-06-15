# Infrastructure Layer

This layer connects the **domain logic** to external systems and technologies like databases, message brokers, and file storage.

It implements the contracts defined in the Domain Layer, such as repositories and data mappers, and adapts domain objects to infrastructure concerns.

## Structure

- `schemas/` – MongoDB schemas using Mongoose. They define how domain objects are persisted.
- `repositories/` – Implementations of repository interfaces using the schemas. They map domain entities to persistence models.
- `mappers/` – Responsible for translating between domain objects and persistence formats (e.g., MongoDB documents).

## Responsibility

The Infrastructure Layer:

- Implements domain contracts (e.g., `RolesRepository`).
- Adapts domain models to a database-friendly format and vice versa.
- Keeps the application and domain layers decoupled from external systems.

## Best practices
- Do not place business logic here.
- Keep infrastructure code clean and focused only on I/O responsibilities.
- Use mappers to isolate domain entities from database schema structure.
- Follow the Dependency Inversion Principle: the domain defines the interfaces, the infrastructure fulfills them.

## Example

```ts
// Example of a mapper
export class RoleToPersistence {
  static toPersistence(role: Role): any {
    return {
      _id: permission.getId(),
      name: permission.getName(),
      createdAt: permission.getCreatedAt(),
      lastModifiedAt: permission.getLastModifiedAt()
    };
  }
}
// Example of a repository implementation
@Injectable()
export class CreateRolesRepository {
  constructor(@InjectModel('Roles') private readonly model: Model<any>) {}

  async create(role: Role): Promise<Role> {
    const created = await this.model.create(RoleToPersistence.toPersistence(role));
    return RoleToDomain.toDomain(created);
  }
}

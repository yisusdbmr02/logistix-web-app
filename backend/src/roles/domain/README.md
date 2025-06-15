# Domain Layer

This layer defines the **core of the business logic**. It is entirely independent of frameworks, databases, and transport protocols, and is designed to be the most stable and reusable part of the system.

## Components

- `entities/` – Domain entities with identity and behavior. They represent core business concepts and encapsulate rules and invariants.
- `value-objects/` – Immutable objects without identity, focused on validation and expressing concepts (e.g., `RoleName`, `RoleId`). 
- `interfaces/` – Abstractions (contracts) such as repositories or external services that the infrastructure must implement.
- `exceptions/` – Custom domain exceptions to represent rule violations (e.g., `InvalidRoleNameException`).

## Purpose

The goal of the Domain Layer is to keep the **business model pure**, with no dependencies on NestJS, MongoDB, or any other technology-specific library.

This approach follows the principles of **Domain-Driven Design (DDD)**, aiming for clear separation of concerns and allowing business rules to evolve independently.

## Best Practices
- Don't inject or use NestJS services, decorators, or providers in this layer.
- Domain objects should be self-validating and encapsulate their rules.
- Only expose behavior that makes sense in the domain language.
- Treat the domain as the source of truth for your business.

## Example

```ts
const id = new RoleId("uuid-1234");
const name = new RoleName("READ_USERS");
const auditTrail = new AuditTrail(
    new CreatedAt(),
    new lastModifiedAt()
)
const permission = new Role(id, name, auditTrail );


import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Prisma:

// Prisma simplifies database access by providing a type-safe query builder and an auto-generated query engine. It supports various databases like PostgreSQL, MySQL, SQLite, and SQL Server. Prisma Client, which is part of the Prisma toolkit, is responsible for executing these queries and managing the database connections.

// Prisma Client:
// The Prisma Client is an auto-generated database client that is specific to your application's data model. It is created based on your database schema, and it allows you to interact with the database using a type-safe API in your programming language (JavaScript or TypeScript, for example).

// The PrismaClient imported from @prisma/client is the actual Prisma client that allows you to perform database operations.
// prismaClientSingleton is a function that creates a new instance of the Prisma client.
// PrismaClientSingleton is a type that represents the type of the Prisma client instance.
// globalForPrisma is a global variable used to store the Prisma client instance.
// prisma is the actual instance of the Prisma client that will be used throughout your application.

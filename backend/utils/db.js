import { PrismaClient } from "@prisma/client";

// Declare a global variable 'prisma' on the 'globalThis' object
globalThis.prisma = globalThis.prisma || new PrismaClient();

// Set 'prisma' to the global variable only in non-production environments
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = globalThis.prisma;
}

// Export the 'prisma' instance (or use it directly in other modules)
// module.exports = {
//   db: globalThis.prisma
// };
export const db = globalThis.prisma
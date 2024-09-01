import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../PrismaClient";



const globalForPrisma = global as unknown as { prisma: PrismaClient };

if (process.env.NODE_ENV === "development"){ globalForPrisma.prisma = new PrismaClient();} 

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

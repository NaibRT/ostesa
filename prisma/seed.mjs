// import { prisma } from "../src/lib/prisma";
import { PrismaClient } from "@prisma/client";
// const { prisma } = require("../src/lib/prisma");
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "naibtahmazli@gmail.com" },
    update: {},
    create: {
      name: "Naib Tahmazli",
      email: "naibtahmazli@gmail.com",
      password: await bcrypt.hash("123456789", 10),
    },
  });

  const role = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
    },
  });

  const userRole = await prisma.userToRole.findFirst({
    where: {
      userID: user.id,
    },
  });

  if (!userRole?.id) {
    const newUserRole = await prisma.userToRole.create({
      data: {
        userID: user.id,
        roleID: role.id,
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

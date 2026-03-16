const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

async function main() {
  const prisma = new PrismaClient();
  const hashed = await bcrypt.hash('Admin123!', 10);
  const user = await prisma.adminUser.upsert({
    where: { email: 'admin@rorxclinic.com' },
    update: { password: hashed },
    create: { email: 'admin@rorxclinic.com', password: hashed },
  });
  console.log('Admin user created/updated:', user.email);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
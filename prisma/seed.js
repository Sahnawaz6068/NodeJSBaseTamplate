import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

async function main() {
  // 1. Create an Airplane first (Seats need an airplaneId)
  const airplane = await prisma.airplane.create({
    data: {
      modelNumber: 'Boeing 737',
      capacity: 180,
    }
  });

  // 2. Generate Seat Map (e.g., 30 rows, 6 columns A-F)
  const rows = 30;
  const cols = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seats = [];

  for (let r = 1; r <= rows; r++) {
    for (const c of cols) {
      seats.push({
        airplaneId: airplane.id,
        row: r,
        col: c,
        type: r <= 5 ? 'business' : 'economy', // Logic for seat types
      });
    }
  }

  console.log("Seeding seats...");
  await prisma.seat.createMany({ data: seats });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
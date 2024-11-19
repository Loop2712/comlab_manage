import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all roombookings
export async function GET() {
  try {
    const roombookings = await prisma.Roombooking.findMany();

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!roombookings || roombookings.length === 0) {
      return NextResponse.json({ message: 'No roombookings found' }, { status: 404 });
    }
    return NextResponse.json(roombookings);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch roombookings' }, { status: 500 });
  }
}

// POST: Create a new roombookings
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const roombookings = await prisma.Roombooking.create({ data });
    return NextResponse.json(roombookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create roombookings' }, { status: 500 });
  }
}

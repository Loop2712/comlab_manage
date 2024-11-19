import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all roomrentals
export async function GET() {
  try {
    const roomrentals = await prisma.RoomRental.findMany();

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!roomrentals || roomrentals.length === 0) {
      return NextResponse.json({ message: 'No roomrentals found' }, { status: 404 });
    }
    return NextResponse.json(roomrentals);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch roomrentals' }, { status: 500 });
  }
}

// POST: Create a new roomrentals
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const roomrentals = await prisma.RoomRental.create({ data });
    return NextResponse.json(roomrentals);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create roomrentals' }, { status: 500 });
  }
}

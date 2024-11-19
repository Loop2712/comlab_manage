import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET: Fetch roomrentals by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const roomrentals = await prisma.RoomRental.findUnique({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
    });

    if (!roomrentals || roomrentals.length === 0) {
      return NextResponse.json({ message: 'No roomrentals found' }, { status: 404 });
    }
    return NextResponse.json(roomrentals);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch roomrentals' }, { status: 500 });
  }
}

// PUT: Update roomrentals by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  try {
    const roomrentals = await prisma.RoomRental.update({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
      data,
    });
    return NextResponse.json(roomrentals);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update roomrentals' }, { status: 500 });
  }
}

// DELETE: Delete roomrentals by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.RoomRental.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'roomrentals deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete roomrentals' }, { status: 500 });
  }
}

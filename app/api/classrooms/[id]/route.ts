import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET: Fetch classroom by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const classroom = await prisma.Classroom.findUnique({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
    });
    return NextResponse.json(classroom);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch classroom' }, { status: 500 });
  }
}

// PUT: Update classroom by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  try {
    const classroom = await prisma.Classroom.update({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
      data,
    });
    return NextResponse.json(classroom);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update classroom' }, { status: 500 });
  }
}

// DELETE: Delete classroom by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.Classroom.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'Classroom deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete classroom' }, { status: 500 });
  }
}

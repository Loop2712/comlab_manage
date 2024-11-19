import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET: Fetch classrSchedules by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const classrSchedules = await prisma.ClassSchedule.findUnique({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
    });

    if (!classrSchedules || classrSchedules.length === 0) {
      return NextResponse.json({ message: 'No classrSchedules found' }, { status: 404 });
    }
    return NextResponse.json(classrSchedules);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch classrSchedules' }, { status: 500 });
  }
}

// PUT: Update classrSchedules by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  try {
    const classrSchedules = await prisma.ClassSchedule.update({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
      data,
    });
    return NextResponse.json(classrSchedules);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update classrSchedules' }, { status: 500 });
  }
}

// DELETE: Delete classrSchedules by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.ClassSchedule.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'classrSchedules deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete classrSchedules' }, { status: 500 });
  }
}

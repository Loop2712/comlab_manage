import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all classrSchedules
export async function GET() {
  try {
    const classrSchedules = await prisma.ClassSchedule.findMany();

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!classrSchedules || classrSchedules.length === 0) {
      return NextResponse.json({ message: 'No classrSchedules found' }, { status: 404 });
    }
    return NextResponse.json(classrSchedules);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch classrSchedules' }, { status: 500 });
  }
}

// POST: Create a new classrSchedules
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const classrSchedules = await prisma.ClassSchedule.create({ data });
    return NextResponse.json(classrSchedules);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create classrSchedules' }, { status: 500 });
  }
}

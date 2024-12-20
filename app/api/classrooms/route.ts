import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all classrooms
export async function GET() {
  try {
    const classrooms = await prisma.Classroom.findMany();

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!classrooms || classrooms.length === 0) {
      return NextResponse.json({ message: 'No classrooms found' }, { status: 404 });
    }
    return NextResponse.json(classrooms);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch classrooms' }, { status: 500 });
  }
}

// POST: Create a new classroom
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const classroom = await prisma.Classroom.create({ data });
    return NextResponse.json(classroom);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create classroom' }, { status: 500 });
  }
}

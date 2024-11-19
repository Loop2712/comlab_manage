import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    
    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!users || users.length === 0) {
      return NextResponse.json({ message: 'No users found' }, { status: 404 });
    }

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}


// POST: Create a new user
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const user = await prisma.user.create({ data });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

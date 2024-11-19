import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET: Fetch all conversations
export async function GET() {
  try {
    const conversations = await prisma.Conversation.findMany();

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!conversations || conversations.length === 0) {
      return NextResponse.json({ message: 'No conversations found' }, { status: 404 });
    }
    return NextResponse.json(conversations);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
  }
}

// POST: Create a new conversations
export async function POST(req: Request) {
  const data = await req.json();

  try {
    const conversations = await prisma.Conversation.create({ data });
    return NextResponse.json(conversations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create conversations' }, { status: 500 });
  }
}

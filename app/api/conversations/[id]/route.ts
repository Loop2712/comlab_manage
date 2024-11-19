import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET: Fetch conversations by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const conversations = await prisma.Conversation.findUnique({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
    });

    if (!conversations || conversations.length === 0) {
      return NextResponse.json({ message: 'No conversations found' }, { status: 404 });
    }
    return NextResponse.json(conversations);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
  }
}

// PUT: Update conversations by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  try {
    const conversations = await prisma.Conversation.update({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
      data,
    });
    return NextResponse.json(conversations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update conversations' }, { status: 500 });
  }
}

// DELETE: Delete conversations by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.Conversation.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'conversations deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete conversations' }, { status: 500 });
  }
}

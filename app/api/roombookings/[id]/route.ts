import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET: Fetch roombookings by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const roombookings = await prisma.Roombooking.findUnique({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
    });

    if (!roombookings || roombookings.length === 0) {
      return NextResponse.json({ message: 'No roombookings found' }, { status: 404 });
    }
    return NextResponse.json(roombookings);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch roombookings' }, { status: 500 });
  }
}

// PUT: Update roombookings by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  try {
    const roombookings = await prisma.Roombooking.update({
      where: { id: Number(params.id) }, // แปลง id เป็น Int
      data,
    });
    return NextResponse.json(roombookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update roombookings' }, { status: 500 });
  }
}

// DELETE: Delete roombookings by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.Roombooking.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'roombookings deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete roombookings' }, { status: 500 });
  }
}

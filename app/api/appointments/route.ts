import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { verifyToken } from '@/lib/auth';

const dataPath = path.join(process.cwd(), '.data');
const filePath = path.join(dataPath, 'appointments.json');

async function ensureDataFile() {
  try {
    await fs.mkdir(dataPath, { recursive: true });
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, '[]', 'utf-8');
  }
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureDataFile();
    const existingRaw = await fs.readFile(filePath, 'utf-8');
    const existing = JSON.parse(existingRaw || '[]');
    return NextResponse.json({ success: true, appointments: existing });
  } catch (error) {
    console.error('Appointments GET error', error);
    return NextResponse.json({ success: false, message: 'Could not load appointments.' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const appointment = await request.json();
    await ensureDataFile();
    const existingRaw = await fs.readFile(filePath, 'utf-8');
    const existing = JSON.parse(existingRaw || '[]');
    const newItem = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...appointment,
    };
    existing.push(newItem);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    return NextResponse.json({ success: true, appointment: newItem });
  } catch (error) {
    console.error('Appointment API error', error);
    return NextResponse.json({ success: false, message: 'Could not save appointment.' }, { status: 500 });
  }
}

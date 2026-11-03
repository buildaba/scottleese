import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, generateId } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    const source = String(body.source || 'newsletter').trim();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const store = readStore();
    const exists = store.subscribers.some((s) => s.email.toLowerCase() === email);

    if (!exists) {
      store.subscribers.unshift({
        id: generateId('sub'),
        email,
        source,
        createdAt: new Date().toISOString(),
      });
      writeStore(store);
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

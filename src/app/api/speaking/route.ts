import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, generateId } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const store = readStore();

    const entry = {
      id: generateId('spk'),
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      organization: String(body.organization || '').trim(),
      eventType: String(body.eventType || '').trim(),
      audienceSize: String(body.audienceSize || '').trim(),
      eventDate: String(body.eventDate || '').trim(),
      budgetRange: String(body.budgetRange || body.budget || '').trim(),
      details: String(body.details || '').trim(),
      status: 'new' as const,
      createdAt: new Date().toISOString(),
    };

    store.speakingLeads.unshift(entry);
    writeStore(store);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

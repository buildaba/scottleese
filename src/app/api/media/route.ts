import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, generateId } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const store = readStore();

    const entry = {
      id: generateId('med'),
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      company: String(body.company || '').trim(),
      packageInterest: String(body.packageInterest || '').trim(),
      budgetRange: String(body.budgetRange || body.budget || '').trim(),
      message: String(body.message || '').trim(),
      status: 'new' as const,
      createdAt: new Date().toISOString(),
    };

    store.mediaLeads.unshift(entry);
    writeStore(store);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

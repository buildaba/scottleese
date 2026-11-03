import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, generateId } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const store = readStore();
    const now = new Date().toISOString();

    // 1. SLC Talent Bench — Employer Hiring Request
    if (body.type === 'slc_talent_bench_employer') {
      const entry = {
        id: generateId('emp'),
        company: String(body.company || '').trim(),
        website: String(body.website || '').trim(),
        name: String(body.name || '').trim(),
        email: String(body.email || '').trim(),
        linkedin: String(body.linkedin || '').trim(),
        arrStage: String(body.arrStage || '').trim(),
        rolesNeeded: Array.isArray(body.rolesNeeded) ? body.rolesNeeded : [],
        notes: String(body.notes || '').trim(),
        status: 'new' as const,
        createdAt: now,
      };
      store.talentEmployers.unshift(entry);
      writeStore(store);
      return NextResponse.json({ success: true, id: entry.id });
    }

    // 2. SLC Talent Bench — Candidate Application
    if (body.type === 'slc_talent_bench_candidate') {
      const entry = {
        id: generateId('cand'),
        name: String(body.name || '').trim(),
        email: String(body.email || '').trim(),
        linkedin: String(body.linkedin || '').trim(),
        roleTrack: String(body.roleTrack || '').trim(),
        acvRange: String(body.acvRange || '').trim(),
        quotaRecord: String(body.quotaRecord || '').trim(),
        compExpectation: String(body.compExpectation || '').trim(),
        status: 'new' as const,
        createdAt: now,
      };
      store.talentCandidates.unshift(entry);
      writeStore(store);
      return NextResponse.json({ success: true, id: entry.id });
    }

    // 3. Podcast Guest / Story Pitch
    if (body.type === 'podcast_pitch') {
      const entry = {
        id: generateId('pod'),
        name: String(body.name || '').trim(),
        email: String(body.email || '').trim(),
        story: String(body.story || '').trim(),
        status: 'new' as const,
        createdAt: now,
      };
      store.podcastLeads.unshift(entry);
      writeStore(store);
      return NextResponse.json({ success: true, id: entry.id });
    }

    // 4. Default: Advisory / Consulting / Retainer Inquiry
    const entry = {
      id: generateId('adv'),
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      company: String(body.company || '').trim(),
      role: String(body.linkedin || body.role || '').trim(),
      arr: String(body.website || body.phone || body.arr || '').trim(),
      interests: Array.isArray(body.interests) ? body.interests : [],
      message: String(body.message || '').trim(),
      status: 'new' as const,
      createdAt: now,
    };

    store.advisoryLeads.unshift(entry);
    writeStore(store);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

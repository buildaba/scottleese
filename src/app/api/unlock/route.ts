import { NextResponse } from 'next/server';

const VALID_PASSWORDS = [
  (process.env.SITE_PASSWORD || 'scott2026').toLowerCase(),
  'scottleese',
  'surfandsales',
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submitted = (body.password || '').trim().toLowerCase();

    if (VALID_PASSWORDS.includes(submitted)) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('slc_preview_auth', 'unlocked', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        sameSite: 'lax',
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid access code.' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }
}

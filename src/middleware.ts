import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the unlock screen, unlock API, and static assets
  if (
    pathname.startsWith('/unlock') ||
    pathname.startsWith('/api/unlock') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // Check if visitor has the preview auth cookie
  const authCookie = request.cookies.get('slc_preview_auth')?.value;
  if (authCookie === 'unlocked') {
    return NextResponse.next();
  }

  // Otherwise redirect to /unlock and preserve intended path
  const unlockUrl = request.nextUrl.clone();
  unlockUrl.pathname = '/unlock';
  if (pathname !== '/') {
    unlockUrl.searchParams.set('next', pathname);
  }

  return NextResponse.redirect(unlockUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  console.log('Token:', token);

  const loginUrl = new URL('/admin/login', request.url);

  console.log('Requested Path:', request.nextUrl.pathname);

  if (request.nextUrl.pathname === loginUrl.pathname) {
    if (token && await verifyToken(token)) {
      console.log('Token is valid. Redirecting to /admin');
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  if (!token || !await verifyToken(token)) {
    console.log('No valid token. Redirecting to login page');
    return NextResponse.redirect(loginUrl);
  }

  // Allow access if authenticated
  console.log('Token is valid. Allowing access');
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin/login'],
};

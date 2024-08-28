import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { signToken } from '@/lib/auth';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const envUsername = process.env.ADMIN_USERNAME;
  const envPassword = process.env.ADMIN_PASSWORD;

  if (username === envUsername && password === envPassword) {
    try {
      const token = await signToken(username);

      const response = NextResponse.json({ success: true });
      response.headers.set('Set-Cookie', serialize('auth-token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }));

      return response;
    } catch (error) {
      return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}

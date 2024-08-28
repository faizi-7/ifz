import { SignJWT, jwtVerify } from 'jose';

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret');

export async function signToken(username: string) {
  try {
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(jwtSecret);

    console.log('Signed Token:', token);
    return token;
  } catch (error) {
    console.error('Token Signing Error:', error);
    throw error;
  }
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, jwtSecret);
    console.log('Decoded Token:', payload);
    return payload;
  } catch (error) {
    console.error('Token Verification Error:', error);
    return null;
  }
}

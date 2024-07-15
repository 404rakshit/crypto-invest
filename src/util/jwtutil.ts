// jwtUtils.js
import { SignJWT, jwtVerify } from 'jose'
import { TextEncoder } from 'util'
import prisma from './prismaClient';

// Your secret key (should be stored securely, e.g., in environment variables)
const secret = new TextEncoder().encode('a/yZ8xh+3mxsG8ShuUfaxbywUIqjXxkTvfbteOaL4Gw=');

// Function to sign (encode) a payload into a JWT
export async function signToken(payload: Record<string, string>) {
    const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h') // Set token expiration time
        .sign(secret);
    return jwt;
}

// Function to verify a JWT
export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return { payload, error: false }; // Return the decoded payload if verification is successful
    } catch (error) {
        await prisma.token.delete({ where: { token } })
        return { error: true }
    }
}
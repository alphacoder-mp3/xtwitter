import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ message: 'Hello from the API!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

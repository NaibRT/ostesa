import { cookies } from 'next/headers';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Your middleware logic for GET requests
      const cookieStore = cookies()
  const token = cookieStore.get('next-auth.session-token')
  console.log("token",token);

  if (!token) {
    return new NextResponse("Unauthorized", { status: 500 });
  }
  }
}
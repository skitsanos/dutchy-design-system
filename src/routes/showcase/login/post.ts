export default async function handler(req: Request): Promise<Response> {
  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validate required fields
  if (!email || !password) {
    return new Response(null, {
      status: 303,
      headers: { Location: '/showcase/login?error=invalid' },
    });
  }

  // In production, validate credentials against a database
  // For demo purposes, accept any non-empty credentials
  console.log('Login attempt:', { email });

  // Redirect to admin dashboard on success
  return new Response(null, {
    status: 303,
    headers: { Location: '/showcase/admin' },
  });
}

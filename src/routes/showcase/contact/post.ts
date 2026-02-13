export default async function handler(req: Request): Promise<Response> {
  const formData = await req.formData();
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return new Response(null, {
      status: 303,
      headers: { Location: '/showcase/contact?error=missing-fields' },
    });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(null, {
      status: 303,
      headers: { Location: '/showcase/contact?error=invalid-email' },
    });
  }

  // Process form submission (in production, send email, save to DB, etc.)
  console.log('Contact form submission:', {
    firstName,
    lastName,
    email,
    subject,
    message,
  });

  // Redirect with success
  return new Response(null, {
    status: 303,
    headers: { Location: '/showcase/contact?success=true' },
  });
}

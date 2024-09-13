import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const responce = await req.json()
  try {
    console.log("Hello This shortUrl");
    console.log("Full response object:", responce);
    console.log(responce?.shortUrl);

    const { data, error } = await resend.emails.send({
      from: 'file-sharing-app@resend.dev',
      to: ['sai163415@gmail.com'],
      subject: responce?.userName + " has Shared a file with You",
      
      react: EmailTemplate({ responce}),
    });
    

    if (error) {
      console.error("Error sending email:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    return Response.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}

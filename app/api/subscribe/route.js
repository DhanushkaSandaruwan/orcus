import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Send email notification to you or the client
    const data = await resend.emails.send({
      from: "Waitlist <no-reply@0rcus.com>",
      to: ["access@0rcus.com", "ceo@0rcus.com"], // client emails
      subject: "New Waitlist Signup",
      html: `<p>New email submitted: <strong>${email}</strong></p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

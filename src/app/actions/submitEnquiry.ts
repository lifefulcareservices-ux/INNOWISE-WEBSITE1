"use server";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  honeypot?: string;
}

export async function submitEnquiry(prev: unknown, form: FormData) {
  if (form.honeypot) {
    return { success: true };
  }

  const errors: Record<string, string> = {};
  if (!form.name || form.name.length < 2) errors.name = "Name is required";
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Valid email is required";
  if (!form.message || form.message.length < 10)
    errors.message = "Message must be at least 10 characters";
  if (Object.keys(errors).length > 0) return { errors };

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Innowise Website <website@innowisesolutions.co.uk>",
        to: "hello@innowisesolutions.co.uk",
        subject: `New enquiry from ${form.name} — ${form.service || "General"}`,
        html: `
          <h2>New Contact Enquiry</h2>
          <table>
            <tr><td><strong>Name:</strong></td><td>${form.name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${form.email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${form.phone || "—"}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${form.company || "—"}</td></tr>
            <tr><td><strong>Service:</strong></td><td>${form.service || "—"}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${form.message}</td></tr>
          </table>
        `,
      });
    } else {
      console.log("--- ENQUIRY SUBMITTED ---", { form });
    }
    return { success: true };
  } catch (err) {
    console.error("Failed to send enquiry:", err);
    return { error: "Something went wrong. Please try again or call us." };
  }
}

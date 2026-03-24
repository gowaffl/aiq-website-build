import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "brent@donationadvocates.com";
const FROM_ADDRESS = "authorizationIQ <notifications@donationadvocates.com>";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const body = await req.json();
    const { formType, ...fields } = body;

    if (!formType || !["demo", "contact"].includes(formType)) {
      return new Response(
        JSON.stringify({ error: "Invalid formType. Must be 'demo' or 'contact'." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build email HTML based on form type
    const isDemoForm = formType === "demo";
    const subject = isDemoForm
      ? `New Demo Request from ${fields.name || "Unknown"} — ${fields.org || "Unknown Org"}`
      : `New Contact Message from ${fields.name || "Unknown"}`;

    const fieldRows = Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(
        ([k, v]) =>
          `<tr>
            <td style="padding:8px 12px;font-weight:600;text-transform:capitalize;white-space:nowrap;color:#4A4A68;background:#F7F3EE;border-bottom:1px solid #E2DED8;width:160px;">${k.replace(/_/g, " ")}</td>
            <td style="padding:8px 12px;color:#1A1A2E;border-bottom:1px solid #E2DED8;">${String(v)}</td>
          </tr>`
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#F7F3EE;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F3EE;padding:32px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #E2DED8;max-width:600px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#0F3048,#1B4D6E 40%,#2A6F97);padding:28px 32px;">
                    <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.65);">authorizationIQ™</p>
                    <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">
                      ${isDemoForm ? "📋 New Demo Request" : "✉️ New Contact Message"}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 32px 8px;">
                    <p style="margin:0 0 20px;font-size:15px;color:#4A4A68;">
                      ${isDemoForm
                        ? "Someone has requested a product demo. Here are their details:"
                        : "You have received a new message through the contact form:"}
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2DED8;border-radius:8px;overflow:hidden;font-size:14px;">
                      ${fieldRows}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px 28px;">
                    <p style="margin:0;font-size:12px;color:#7A7A96;">
                      This email was sent automatically from the authorizationIQ™ website.
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
      </html>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        subject,
        html,
        reply_to: fields.email || undefined,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      throw new Error(`Resend API error [${resendRes.status}]: ${errBody}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-form-email error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

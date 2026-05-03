export const WELCOME_SUBJECT = "You're on the early access list";

export function welcomeEmailText(): string {
  return `Welcome,

You're confirmed for the Adaptive Antivirus early access list.

Two things to expect from us:

  - Brief updates when we ship meaningful changes to the engine.
  - A direct download link the moment builds are available for your platforms.

That's it. No newsletters, no upsell drip.

Thanks for being early.

— The Adaptive Antivirus Team
adaptive-antivirus.vercel.app

---
You received this because you signed up at adaptive-antivirus.vercel.app.
To stop receiving updates, simply reply with "unsubscribe".
`;
}

export function welcomeEmailHtml(): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="dark light" />
<title>You're on the early access list</title>
</head>
<body style="margin:0;padding:0;background:#0F1219;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#E8EEF7;-webkit-font-smoothing:antialiased;">
  <span style="display:none;font-size:1px;color:#0F1219;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Confirmed for early access — brief updates as we ship, plus a direct link when downloads are available.</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0F1219;">
    <tr>
      <td align="center" style="padding:48px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;width:100%;">

          <!-- Wordmark -->
          <tr>
            <td style="padding:0 0 32px 0;font-size:12px;letter-spacing:0.08em;font-weight:600;color:#94A3B8;">
              ADAPTIVE&nbsp;<span style="color:#7CC4FF;">·</span>&nbsp;ANTIVIRUS
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="font-size:16px;line-height:1.65;color:#E8EEF7;">
              <p style="margin:0 0 18px 0;">Welcome,</p>
              <p style="margin:0 0 18px 0;">You're confirmed for the Adaptive Antivirus early access list.</p>
              <p style="margin:0 0 12px 0;">Two things to expect from us:</p>
              <ul style="margin:0 0 22px 0;padding:0 0 0 20px;color:#E8EEF7;">
                <li style="margin:0 0 8px 0;">Brief updates when we ship meaningful changes to the engine.</li>
                <li style="margin:0;">A direct download link the moment builds are available for your platforms.</li>
              </ul>
              <p style="margin:0 0 18px 0;color:#94A3B8;">That's it. No newsletters, no upsell drip.</p>
              <p style="margin:0 0 28px 0;">Thanks for being early.</p>
              <p style="margin:0;color:#94A3B8;">— The Adaptive Antivirus Team</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:36px 0 20px 0;">
              <div style="height:1px;background:rgba(148,163,184,0.12);width:100%;line-height:1px;font-size:1px;">&nbsp;</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="font-size:12px;line-height:1.6;color:#64748B;">
              <p style="margin:0 0 6px 0;">
                You received this because you signed up at
                <a href="https://adaptive-antivirus.vercel.app" style="color:#7CC4FF;text-decoration:none;">adaptive-antivirus.vercel.app</a>.
              </p>
              <p style="margin:0;">
                To stop receiving updates, simply reply with &ldquo;unsubscribe&rdquo;.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

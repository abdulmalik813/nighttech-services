export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Inquiry</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin:0;padding:0;font-family:Inter, sans-serif;background-color:#f0f0f0;">
    <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
      <!-- Header -->
      <div style="background-color:#2E3A59;padding:20px 30px;display:flex;align-items:center;gap:15px;color:#ffffff;">
        <img src="https://www.nighttechservices.com/logo.svg" alt="NightTech Logo" style="height:32px;display:block;" />
        <h1 style="margin:0;font-size:20px;font-weight:600;">New Webform Inquiry</h1>
      </div>

      <!-- Body -->
      <div style="background-color:#fffbea;padding:30px;">
        <!-- From -->
        <div style="margin-bottom:20px;">
          <strong style="display:block;font-size:13px;color:#2E3A59;margin-bottom:6px;text-transform:uppercase;">From</strong>
          <span style="font-size:15px;color:#333333;">${name}</span>
        </div>

        <!-- Email -->
        <div style="margin-bottom:20px;">
          <strong style="display:block;font-size:13px;color:#2E3A59;margin-bottom:6px;text-transform:uppercase;">Email</strong>
          <a href="mailto:${email}" style="font-size:15px;color:#333333;text-decoration:none;">${email}</a>
        </div>

        <!-- Message -->
        <div style="margin-bottom:20px;">
          <strong style="display:block;font-size:13px;color:#2E3A59;margin-bottom:6px;text-transform:uppercase;">Message</strong>
          <div style="padding:16px;border-radius:6px;background-color:#ffffff;border:1px solid #dddddd;font-size:15px;line-height:1.6;white-space:pre-wrap;color:#333333;">
            ${message}
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

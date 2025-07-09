export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Website Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      background: #fffbea;
      color: #333;
    }
    .email-wrapper {
      padding: 40px 20px;
      background-color: #fffbea;
    }
    .email-container {
      max-width: 600px;
      margin: auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      border: 1px solid #eee;
      overflow: hidden;
    }
    .email-header {
      background-color: #2E3A59;
      color: white;
      padding: 30px 40px;
      border-bottom: 4px solid #B8860B;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .email-header img {
      height: 32px;
    }
    .email-header h1 {
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    .email-body {
      padding: 30px 40px 40px;
    }
    .info-block {
      margin-bottom: 24px;
    }
    .info-block strong {
      color: #2E3A59;
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      text-transform: uppercase;
    }
    .info-block a {
      color: #B8860B;
      text-decoration: none;
    }
    .info-block a:hover {
      text-decoration: underline;
    }
    .message-box {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      padding: 20px;
      border-radius: 8px;
      font-size: 15px;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .reply-button {
      display: inline-block;
      margin-top: 20px;
      background-color: #B8860B;
      color: #fff;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }
    .reply-button:hover {
      background-color: #a0740a;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="email-header">
        <img src="https://www.nighttechservices.com/logo.svg" alt="NightTech Services Logo"/>
        <h1>New Webform Inquiry</h1>
      </div>
      <div class="email-body">
        <div class="info-block">
          <strong>From</strong>
          <span>${name}</span>
        </div>
        <div class="info-block">
          <strong>Email</strong>
          <a href="mailto:${email}">${email}</a>
        </div>
        <div class="info-block">
          <strong>Message</strong>
          <div class="message-box">${message}</div>
        </div>
        <a href="mailto:${email}" class="reply-button">Reply Now</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
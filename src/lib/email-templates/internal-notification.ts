export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #2E3A59;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .email-wrapper {
            background-color: #f0f2f5;
            padding: 40px 20px;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .email-header {
            background-color: #2E3A59;
            padding: 30px 40px;
            text-align: center;
        }
        .logo {
            color: #B8860B;
            width: 48px;
            height: 48px;
            margin: 0 auto 10px;
            display: block;
        }
        .header-title {
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
        }
        .email-body {
            padding: 30px 40px;
        }
        .info-section {
            margin-bottom: 24px;
        }
        .info-section strong {
            display: block;
            font-size: 14px;
            color: #555;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-section span, .info-section a {
            font-size: 16px;
            color: #2E3A59;
            text-decoration: none;
        }
        .message-box {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            font-size: 16px;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .footer {
            text-align: center;
            padding: 20px 40px;
            font-size: 12px;
            color: #888888;
            border-top: 1px solid #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table class="email-container" width="100%" border="0" cellspacing="0" cellpadding="0">
            <!-- Header -->
            <tr>
                <td align="center" class="email-header">
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8860B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                    <h1 class="header-title">New Webform Inquiry</h1>
                </td>
            </tr>
            <!-- Body -->
            <tr>
                <td class="email-body">
                    <div class="info-section">
                        <strong>From:</strong>
                        <span>${name}</span>
                    </div>
                    <div class="info-section">
                        <strong>Reply-To Email:</strong>
                        <a href="mailto:${email}">${email}</a>
                    </div>
                    <div class="info-section">
                        <strong>Message:</strong>
                        <div class="message-box">${message}</div>
                    </div>
                </td>
            </tr>
            <!-- Footer -->
            <tr>
                <td class="footer">
                    <p>This is an automated notification from nighttechservices.com</p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
`;
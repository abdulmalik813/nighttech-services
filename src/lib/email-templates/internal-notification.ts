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
            color: #333333;
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
            color: #ffffff;
            padding: 30px 40px;
            border-bottom: 4px solid #B8860B;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .email-body {
            padding: 30px 40px 40px;
        }
        .info-block {
            margin-bottom: 24px;
            font-size: 16px;
        }
        .info-block strong {
            color: #2E3A59;
            display: block;
            margin-bottom: 8px;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-block span, .info-block a {
            font-size: 16px;
        }
        .message-box {
            background-color: #f8f9fa;
            border: 1px solid #e0e0e0;
            padding: 20px;
            border-radius: 8px;
            margin-top: 8px;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 15px;
            line-height: 1.7;
            color: #333;
        }
        .reply-button {
            display: inline-block;
            background-color: #B8860B;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 10px;
            transition: background-color 0.2s;
        }
        .reply-button:hover {
            background-color: #a0740a;
        }
        a {
            color: #B8860B;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table class="email-container" width="100%" border="0" cellspacing="0" cellpadding="0">
            <!-- Header -->
            <tr>
                <td class="email-header">
                    <h1>New Webform Inquiry</h1>
                </td>
            </tr>
            <!-- Body -->
            <tr>
                <td class="email-body">
                    <div class="info-block">
                        <strong>From:</strong>
                        <span>${name}</span>
                    </div>
                    <div class="info-block">
                        <strong>Reply-To Email:</strong>
                        <span><a href="mailto:${email}">${email}</a></span>
                    </div>
                    <div class="info-block">
                        <strong>Message:</strong>
                        <div class="message-box">${message}</div>
                    </div>
                    <a href="mailto:${email}" class="reply-button">Reply Now</a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
`;

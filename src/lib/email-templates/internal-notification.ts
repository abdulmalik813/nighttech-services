export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
        }
        .header {
            background-color: #2E3A59;
            color: #ffffff;
            padding: 15px 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333;
        }
        .message-box {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            padding: 15px;
            border-radius: 4px;
            margin-top: 15px;
            white-space: pre-wrap;
            font-family: monospace;
        }
        .info-item {
            margin-bottom: 10px;
        }
        .info-item strong {
            color: #2E3A59;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Website Inquiry</h1>
        </div>
        <div class="content">
            <p>A new message has been submitted through the contact form.</p>
            <div class="info-item">
                <strong>From:</strong> ${name}
            </div>
            <div class="info-item">
                <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </div>
            <div>
                <strong>Message:</strong>
                <div class="message-box">${message}</div>
            </div>
        </div>
    </div>
</body>
</html>
`;

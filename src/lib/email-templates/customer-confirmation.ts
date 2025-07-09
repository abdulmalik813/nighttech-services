export const customerConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We've Received Your Message</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #2E3A59;
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
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
        }
        .header h1 {
            color: #2E3A59;
            margin: 0;
        }
        .content {
            padding: 20px 0;
            line-height: 1.6;
        }
        .content p {
            margin: 0 0 1em;
        }
        .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #888;
        }
        .accent {
            color: #B8860B;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You, ${name}!</h1>
        </div>
        <div class="content">
            <p>We've successfully received your message and can't wait to review it.</p>
            <p>Our team is dedicated to providing a quick response. You can expect to hear back from us within <span class="accent">1-2 business days</span>.</p>
            <p>In the meantime, feel free to browse our services or check out our recent work on our website.</p>
            <p>Best regards,<br>The NightTech Services Team</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} NightTech Services. All rights reserved.</p>
            <p>30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</p>
        </div>
    </div>
</body>
</html>
`;

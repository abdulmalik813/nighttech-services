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
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .email-header {
            text-align: center;
            padding: 20px 0;
        }
        .email-header img {
            max-width: 150px;
        }
        .email-body {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            border: 1px solid #e0e0e0;
        }
        .email-body h1 {
            color: #2E3A59;
            font-size: 24px;
            margin-top: 0;
        }
        .email-body p {
            font-size: 16px;
            line-height: 1.6;
            margin: 1em 0;
        }
        .accent {
            color: #B8860B;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
        .footer a {
            color: #888888;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;" bgcolor="#f0f2f5">
                <table class="email-container" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <!-- Header -->
                    <tr>
                        <td align="center" class="email-header">
                            <img src="https://placehold.co/200x50.png?text=NightTech" alt="NightTech Services Logo">
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td align="center" class="email-body">
                            <h1>Thank You, ${name}!</h1>
                            <p>We've successfully received your message and can't wait to review it.</p>
                            <p>Our team is dedicated to providing a quick response. You can expect to hear back from us within <span class="accent">1-2 business days</span>.</p>
                            <p>Best regards,<br>The NightTech Services Team</p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer">
                            <p>&copy; ${new Date().getFullYear()} NightTech Services. All rights reserved.</p>
                            <p>30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

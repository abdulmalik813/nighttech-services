
export const customerConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We've Received Your Message</title>
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
            padding: 40px;
            text-align: center;
        }
        .logo-container {
            display: inline-block;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 50%;
        }
        .logo {
            color: #B8860B;
            width: 48px;
            height: 48px;
        }
        .email-body {
            padding: 40px;
            text-align: center;
        }
        .email-body h1 {
            color: #2E3A59;
            font-size: 28px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .email-body p {
            font-size: 16px;
            line-height: 1.6;
            margin: 1em 0;
            color: #555;
        }
        .highlight {
            color: #B8860B;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px 40px;
            font-size: 12px;
            color: #888888;
            border-top: 1px solid #e0e0e0;
        }
        .footer a {
            color: #888888;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table class="email-container" width="100%" border="0" cellspacing="0" cellpadding="0">
            <!-- Header -->
            <tr>
                <td align="center" class="email-header">
                    <div class="logo-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8860B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                    </div>
                </td>
            </tr>
            <!-- Body -->
            <tr>
                <td class="email-body">
                    <h1>Thank You, ${name}!</h1>
                    <p>We've successfully received your message and our team will review it shortly.</p>
                    <p>We appreciate you reaching out. Expect to hear back from us within <span class="highlight">1-2 business days</span>.</p>
                    <p style="margin-top: 32px;">Best regards,<br><strong>The NightTech Services Team</strong></p>
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
    </div>
</body>
</html>
`;

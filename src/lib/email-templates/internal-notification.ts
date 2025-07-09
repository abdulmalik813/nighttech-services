export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #333333;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .email-header {
            background-color: #2E3A59;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }
        .email-body {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            border-left: 1px solid #e0e0e0;
            border-right: 1px solid #e0e0e0;
            border-bottom: 1px solid #e0e0e0;
        }
        .info-block {
            margin-bottom: 20px;
            font-size: 16px;
        }
        .info-block strong {
            color: #2E3A59;
            display: block;
            margin-bottom: 5px;
        }
        .message-box {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            padding: 15px;
            border-radius: 4px;
            margin-top: 5px;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-family: monospace, sans-serif;
            font-size: 14px;
            line-height: 1.5;
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
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;" bgcolor="#f0f2f5">
                <table class="email-container" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <!-- Header -->
                    <tr>
                        <td class="email-header">
                            <h1>New Website Inquiry</h1>
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
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

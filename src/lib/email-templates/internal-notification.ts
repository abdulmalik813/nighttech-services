export const internalNotificationTemplate = (name: string, email: string, message: string, servicePackage?: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
</head>
<body>
    <div style="width: 100%; box-sizing: border-box; background-color: #F0F2F5; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <!-- Header -->
            <tr>
                <td style="padding: 32px 40px; text-align: center; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: inline-block; vertical-align: middle;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E3A59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                        </svg>
                    </div>
                    <div style="display: inline-block; vertical-align: middle; margin-left: 12px; font-size: 22px; font-weight: 600; color: #2E3A59;">
                        NightTech Services Inc.
                    </div>
                </td>
            </tr>

            <!-- Body -->
            <tr>
                <td style="padding: 32px 40px;">
                    <h1 style="color: #2E3A59; font-size: 24px; font-weight: 700; margin-top: 0; margin-bottom: 24px;">
                        New Inquiry from Website
                    </h1>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 16px; line-height: 1.6; color: #1f2937;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59; width: 120px;">From:</td>
                            <td style="padding: 8px 0;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59;">Email:</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B8860B; text-decoration: underline;">${email}</a></td>
                        </tr>
                        ${servicePackage ? `
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59;">Package:</td>
                            <td style="padding: 8px 0;">${servicePackage}</td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td style="padding: 16px 0; font-weight: 600; color: #2E3A59; vertical-align: top;">Message:</td>
                            <td style="padding: 16px 0; white-space: pre-wrap; word-wrap: break-word;">${message}</td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color: #f9fafb; padding: 24px 40px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0;">This is an automated notification from nighttechservices.com</p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
`

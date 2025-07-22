export const internalNotificationTemplate = (name: string, email: string, message: string, serviceCategory?: string, servicePackage?: string, promoCode?: string) => `
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
                <td style="padding: 32px 40px; text-align: center;">
                    <!-- Logo Icon -->
                    <div style="display: inline-block; vertical-align: middle;">
                         <img src="https://www.nighttechservices.com/logo.png" alt="NightTech Services Inc. Logo" height="32" style="height: 32px; border: 0;">
                    </div>
                    <!-- Business Name -->
                    <div style="display: inline-block; vertical-align: middle; margin-left: 12px; font-size: 22px; font-weight: 600; color: #1f2937;">
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
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #eab308; text-decoration: underline;">${email}</a></td>
                        </tr>
                        ${serviceCategory ? `
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59;">Category:</td>
                            <td style="padding: 8px 0;">${serviceCategory}</td>
                        </tr>
                        ` : ''}
                        ${servicePackage ? `
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59;">Package:</td>
                            <td style="padding: 8px 0;">${servicePackage}</td>
                        </tr>
                        ` : ''}
                        ${promoCode ? `
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #2E3A59;">Promo Code:</td>
                            <td style="padding: 8px 0;">${promoCode}</td>
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

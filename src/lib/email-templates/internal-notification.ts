export const internalNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
</head>
<body>

    <div style="width: 100%; box-sizing: border-box; background-color: #fefce8; background-image: linear-gradient(to bottom, #ffffff, #fefce8); padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <!-- Header -->
            <tr>
                <td style="padding: 32px 40px; text-align: center;">
                    <!-- Logo Icon -->
                    <div style="display: inline-block; vertical-align: middle;">
                         <img src="https://www.nighttechservices.com/logo.png" alt="NightTech Services Logo" height="32" style="height: 32px; border: 0;">
                    </div>
                    <!-- Business Name -->
                    <div style="display: inline-block; vertical-align: middle; margin-left: 12px; font-size: 22px; font-weight: 600; color: #1f2937;">
                        NightTech Services
                    </div>
                </td>
            </tr>

            <!-- Body -->
            <tr>
                <td style="padding: 0 40px 40px; text-align: left;">
                    <h1 style="color: #1f2937; font-size: 26px; font-weight: 700; margin-top: 0; margin-bottom: 24px;">
                        New Inquiry from Website
                    </h1>
                    
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 8px; color: #1f2937;">
                        <strong style="color: #1f2937;">From:</strong> ${name}
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #1f2937;">
                        <strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: #b5830e; text-decoration: underline;">${email}</a>
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 8px; color: #1f2937;">
                        <strong style="color: #1f2937;">Message:</strong>
                    </p>
                    <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap; word-wrap: break-word;">${message}</div>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color: #f9fafb; padding: 32px 40px; text-align: center; font-size: 12px; color: #1f2937; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 12px; margin: 0; color: #1f2937;">This is an automated notification from nighttechservices.com</p>
                </td>
            </tr>
        </table>

    </div>

</body>
</html>`
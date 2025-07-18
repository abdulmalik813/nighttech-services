export const customerConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We've Received Your Message | NightTech Services Inc.</title>
</head>
<body>

    <div style="width: 100%; box-sizing: border-box; background-color: #fefce8; background-image: linear-gradient(to bottom, #ffffff, #fefce8); padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        
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
                <td style="padding: 0 40px 40px; text-align: left;">
                    <h1 style="color: #1f2937; font-size: 26px; font-weight: 700; margin-top: 0; margin-bottom: 24px;">
                        Thanks for getting in touch, ${name}!
                    </h1>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #1f2937;">
                        We've successfully received your message. Our team is on it and will get back to you as soon as possible.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #1f2937;">
                        We typically respond within <span style="background-color: #eab308; color: #ffffff; font-weight: 600; padding: 3px 8px; border-radius: 6px; white-space: nowrap;">1-2 business days</span>. We appreciate your patience!
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #1f2937;">
                        <br>
                        Thanks, <br>
                        The NighTech Services Inc. Team
                    </p>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color: #f9fafb; padding: 32px 40px; text-align: center; font-size: 12px; color: #1f2937; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 12px; margin: 0; color: #1f2937;">© ${new Date().getFullYear()} NightTech Services Inc.. All rights reserved.</p>
                    <p style="font-size: 12px; margin: 8px 0 0; color: #1f2937;">30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</p>
                </td>
            </tr>
        </table>

    </div>

</body>
</html>`
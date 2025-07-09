export const customerConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We've Received Your Message | NightTech Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fefce8; background-image: linear-gradient(to bottom, #ffffff, #fefce8);">

    <div style="width: 100%; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <!-- Header -->
            <tr>
                <td style="padding: 32px 40px; text-align: center;">
                    <div style="display: inline-block; vertical-align: middle;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 28px; width: 28px; color: #f59e0b; vertical-align: middle;">
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                        </svg>
                    </div>
                    <div style="display: inline-block; vertical-align: middle; margin-left: 12px; font-size: 22px; font-weight: 600; color: #1f2937;">
                        NightTech Services
                    </div>
                </td>
            </tr>

            <!-- Body -->
            <tr>
                <td style="padding: 0 40px 40px; text-align: left;">
                    <h1 style="color: #111827; font-size: 26px; font-weight: 700; margin-top: 0; margin-bottom: 24px;">
                        Thanks for getting in touch, ${name}!
                    </h1>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #4b5563;">
                        We've successfully received your message. Our team is on it and will get back to you as soon as possible.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px; color: #4b5563;">
                        We typically respond within <span style="background-color: #b5830e; color: #ffffff; font-weight: 600; padding: 3px 8px; border-radius: 6px; white-space: nowrap;">1-2 business days</span>. We appreciate your patience!
                    </p>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color: #f9fafb; padding: 32px 40px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 12px; margin: 0; color: #6b7280;">© ${new Date().getFullYear()} NightTech Services. All rights reserved.</p>
                    <p style="font-size: 12px; margin: 8px 0 0; color: #6b7280;">30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</p>
                    <div style="margin-top: 16px;">
                        <a href="#" target="_blank" aria-label="Facebook" style="display: inline-block; margin: 0 8px; color: #c28204; text-decoration: none;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; width: 20px; color: #6b7280;">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" target="_blank" aria-label="Instagram" style="display: inline-block; margin: 0 8px; color: #c28204; text-decoration: none;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; width: 20px; color: #6b7280;">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </td>
            </tr>
        </table>

    </div>

</body>
</html>`
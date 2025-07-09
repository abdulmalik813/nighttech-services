import { NextResponse } from 'next/server';
import { customerConfirmationTemplate } from '@/lib/email-templates/customer-confirmation';
import { internalNotificationTemplate } from '@/lib/email-templates/internal-notification';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD || !process.env.EMAIL_FROM_ADDRESS) {
        console.error('Email server environment variables are not set.');
        return NextResponse.json(
          { message: 'Server configuration error. Could not send email.' },
          { status: 500 }
        );
    }
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const fromName = process.env.EMAIL_FROM_NAME || 'NightTech Services Inc.';
    const fromAddress = process.env.EMAIL_FROM_ADDRESS;
    const internalToAddress = process.env.INTERNAL_EMAIL_TO || 'info@nighttechservices.com';

    // Send internal notification email
    await transporter.sendMail({
        from: `"${fromName}" <${fromAddress}>`,
        to: internalToAddress,
        subject: 'Webform Inquiry',
        replyTo: `"${name}" <${email}>`,
        html: internalNotificationTemplate(name, email, message),
    });

    // Send customer confirmation email
    await transporter.sendMail({
        from: `"${fromName}" <${fromAddress}>`,
        to: email,
        subject: 'Inquiry received.',
        replyTo: `"${fromName}" <${internalToAddress}>`,
        html: customerConfirmationTemplate(name),
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred while sending the email.' },
      { status: 500 }
    );
  }
}

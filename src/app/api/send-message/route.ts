import { NextResponse } from 'next/server';
import { customerConfirmationTemplate } from '@/lib/email-templates/customer-confirmation';
import { internalNotificationTemplate } from '@/lib/email-templates/internal-notification';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Log the generated HTML that would be sent in a real email
    console.log('--- Customer Confirmation Email ---');
    console.log(customerConfirmationTemplate(name));
    
    console.log('--- Internal Notification Email ---');
    console.log(internalNotificationTemplate(name, email, message));

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 50/50 chance of success or failure for the mock response
    if (Math.random() > 0.5) {
      // Success
      return NextResponse.json({ message: 'Message sent successfully!' });
    } else {
      // Failure
      return NextResponse.json(
        { message: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

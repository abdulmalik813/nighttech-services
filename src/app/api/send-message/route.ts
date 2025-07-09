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

    // Always return success
    return NextResponse.json({ message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

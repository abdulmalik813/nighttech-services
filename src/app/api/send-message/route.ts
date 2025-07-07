import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 50/50 chance of success or failure
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
}

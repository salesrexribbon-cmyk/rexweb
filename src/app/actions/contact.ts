'use server';

import { contactFormSchema, ContactFormData } from '@/lib/validations/contact';
import { connectDB, Lead } from '@/lib/db';
import { headers } from 'next/headers';

// Temporary memory map for simple rate-limiting (In production, consider Redis or Upstash)
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  if (!limit || limit.resetAt < now) {
    rateLimits.set(ip, { count: 1, resetAt: now + 60000 }); // 1 minute window
    return true;
  }
  if (limit.count >= 5) { // Max 5 submissions per minute
    return false;
  }
  limit.count++;
  return true;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Spam Protection (Honeypot)
    if (data.botField) {
      console.warn('Bot detected via honeypot');
      return { success: false, error: 'Invalid submission parameters.' };
    }

    // 2. Server-side Validation & Type Stripping
    const validatedData = contactFormSchema.parse(data);

    // 3. Rate Limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'anonymous_user'; 
    if (!checkRateLimit(ip)) {
      return { success: false, error: 'Too many requests. Please try again later.' };
    }

    // 4. Sanitization (Defense-in-depth against Stored XSS)
    const sanitizedMessage = validatedData.message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 5. Database Insertion (MongoDB)
    await connectDB();
    await Lead.create({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      city: validatedData.city,
      state: validatedData.state,
      message: sanitizedMessage,
    });
    
    console.log('Secure form processed and saved to MongoDB:', validatedData.name);

    return { success: true };
  } catch (error: any) {
    console.error('Contact form validation/save failed:', error);
    return { success: false, error: error?.errors?.[0]?.message || 'Failed to submit the form. Please check your inputs.' };
  }
}

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters").trim(),
  email: z.string().email("Please enter a valid email address").trim().toLowerCase(),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number").max(15, "Phone number is too long").regex(/^[0-9+\-\s]+$/, "Invalid phone number format"),
  company: z.string().max(100).optional(),
  city: z.string().min(1, "City is required").max(50),
  state: z.string().min(1, "State is required").max(50),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long").trim(),
  botField: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

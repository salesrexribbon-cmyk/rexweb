'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      message: formData.get('message') as string,
      botField: formData.get('botField') as string,
    };

    const response = await submitContactForm(data);

    if (response.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(response.error || 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-base bg-brand-green/5 border-brand-green/30 p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-green mb-4">Message Received</h3>
        <p className="text-subtle mb-8 max-w-md mx-auto">Thank you for reaching out. A representative from Rex International will get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {status === 'error' && (
        <div className="bg-brand-maroon/10 text-brand-maroon border border-brand-maroon/20 p-4 rounded-md text-sm font-medium mb-4">
          {errorMessage}
        </div>
      )}

      {/* Honeypot field - hidden from users, traps automated scrapers */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="botField" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="label-base">Full Name</label>
        <input type="text" name="name" id="name" required className="input-base" placeholder="John Doe" minLength={2} maxLength={100} />
      </div>
      <div>
        <label htmlFor="company" className="label-base">Company Name (Optional)</label>
        <input type="text" name="company" id="company" className="input-base" placeholder="Acme Logistics Ltd." maxLength={100} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="label-base">Email Address</label>
          <input type="email" name="email" id="email" required className="input-base" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="label-base">Phone Number</label>
          <input type="tel" name="phone" id="phone" required className="input-base" placeholder="+91 98765 43210" pattern="[0-9+\-\s]+" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="label-base">City</label>
          <input type="text" name="city" id="city" required className="input-base" placeholder="Mumbai" maxLength={50} />
        </div>
        <div>
          <label htmlFor="state" className="label-base">State</label>
          <input type="text" name="state" id="state" required className="input-base" placeholder="Maharashtra" maxLength={50} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label-base">Message</label>
        <textarea name="message" id="message" required rows={5} className="input-base resize-none" placeholder="How can we help you today?" minLength={10} maxLength={2000}></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto px-8"
      >
        {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}

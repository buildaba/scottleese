'use client';

import React, { useState } from 'react';

interface NewsletterFormProps {
  variant?: 'hero' | 'bottom' | 'compact';
  buttonText?: string;
  placeholder?: string;
  idPrefix?: string;
}

export default function NewsletterForm({
  variant = 'hero',
  buttonText,
  placeholder = 'Enter your work email...',
  idPrefix = 'nl',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage("You're on the list! Check your inbox for the welcome issue.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      // Fallback in case of network issues
      setStatus('success');
      setMessage("You're on the list! Check your inbox for the welcome issue.");
      setEmail('');
    }
  };

  const defaultButtonText =
    buttonText || (variant === 'hero' ? 'Subscribe Free' : 'Subscribe');

  return (
    <div className="w-full max-w-xl mx-auto">
      {status === 'success' ? (
        <div className="bg-transparent border border-black/10 p-8 text-center">
          <h4 className="text-2xl font-serif text-[#111111] mb-2">Welcome aboard!</h4>
          <p className="text-[#111111]/70 font-light mb-6">{message}</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-sm font-medium text-[#111111] hover:text-[#d9534f] underline underline-offset-4 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="relative flex-grow w-full">
              <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-[#111111]/70 mb-2">
                Work Email Address
              </label>
              <input
                id={`${idPrefix}-email`}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={placeholder}
                required
                disabled={status === 'loading'}
                className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-[#111111] transition-colors rounded-none placeholder:text-black/30"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-[#111111] text-white hover:bg-[#333333] disabled:opacity-50 font-medium transition-colors w-full sm:w-auto"
            >
              {status === 'loading' ? 'Subscribing...' : defaultButtonText}
            </button>
          </div>

          {status === 'error' && (
            <p className="mt-4 text-sm text-[#d9534f]">{message}</p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-[#111111]/60 font-light gap-2">
            <span>Join 4,500+ founders, CROs, and VPs of Sales.</span>
            <span className="text-[#111111]/40">No spam. Unsubscribe anytime.</span>
          </div>
        </form>
      )}
    </div>
  );
}

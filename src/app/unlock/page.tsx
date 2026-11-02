'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function UnlockForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get('next') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(nextPath);
        router.refresh();
      } else {
        setError('Incorrect access code. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#fcfaf8] text-[#111111] flex flex-col justify-between p-6 md:p-12 overflow-y-auto">
      {/* Top Bar */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between border-b border-black/10 pb-6">
        <span className="text-xl font-serif font-medium tracking-tight text-[#111111]">
          Scott Leese
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/50 font-medium px-3 py-1 border border-black/15 bg-[#f5f4ef]">
          Private Preview
        </span>
      </div>

      {/* Center Lock Box */}
      <div className="max-w-md w-full mx-auto my-12 bg-white border border-black/15 p-8 sm:p-10 shadow-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#d9534f] font-semibold mb-3">
          Executive Preview Mode
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#111111] mb-3 leading-tight">
          Enter Access Code
        </h1>
        <p className="text-sm text-[#111111]/60 font-light leading-relaxed mb-8">
          This staging environment for <strong>scottleese.com</strong> is currently password-protected prior to public launch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="access-password"
              className="block text-[11px] uppercase tracking-[0.18em] font-medium text-[#111111]/60 mb-2"
            >
              Passcode
            </label>
            <input
              id="access-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              autoFocus
              required
              className="w-full bg-[#fcfaf8] border border-black/20 px-4 py-3.5 text-[#111111] placeholder:text-[#111111]/35 focus:outline-none focus:border-[#111111] transition-colors rounded-none text-base"
            />
          </div>

          {error && (
            <p className="text-xs text-[#d9534f] font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            {isLoading ? 'Unlocking...' : 'Enter Site →'}
          </button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl w-full mx-auto border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#111111]/40">
        <span>&copy; {new Date().getFullYear()} Scott Leese Consulting. All rights reserved.</span>
        <span>Restricted Access</span>
      </div>
    </div>
  );
}

export default function UnlockPage() {
  return (
    <Suspense fallback={<div className="fixed inset-0 z-[100] bg-[#fcfaf8]" />}>
      <UnlockForm />
    </Suspense>
  );
}

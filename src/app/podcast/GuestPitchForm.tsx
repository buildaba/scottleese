"use client";

import { useState } from "react";

export default function GuestPitchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.story.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission / processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", story: "" });
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-12 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10 text-3xl font-serif tracking-tight text-[#f59e0b]">
          🎙️
        </div>
        <h3 className="text-2xl md:text-3xl font-serif tracking-tight font-bold text-[#111111] mb-3">
          Thank you for pitching your story!
        </h3>
        <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mx-auto mb-8">
          Scott and Mike review every guest submission. If your story is a fit for an upcoming episode, our production team will reach out with scheduling details.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-[#fcfaf8] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
        >
          Submit Another Pitch
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-black/10 bg-white p-6 sm:p-10 text-left"
    >
      {errorMessage && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="guest-name"
            className="block text-sm font-medium text-[#111111]"
          >
            Your Name <span className="text-[#f59e0b]">*</span>
          </label>
          <input
            type="text"
            id="guest-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className="w-full rounded-lg border border-black/10 bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#111111] placeholder-[#52525b] transition focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="guest-email"
            className="block text-sm font-medium text-[#111111]"
          >
            Your Email <span className="text-[#f59e0b]">*</span>
          </label>
          <input
            type="email"
            id="guest-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alex@example.com"
            className="w-full rounded-lg border border-black/10 bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#111111] placeholder-[#52525b] transition focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="guest-story"
          className="block text-sm font-medium text-[#111111]"
        >
          What&apos;s Your Story? <span className="text-[#f59e0b]">*</span>
        </label>
        <textarea
          id="guest-story"
          name="story"
          required
          rows={5}
          value={formData.story}
          onChange={handleChange}
          placeholder="Tell us what adversity you overcame, what company or movement you built, and the central insight our audience should take away..."
          className="w-full rounded-lg border border-black/10 bg-[#fcfaf8] px-4 py-3.5 text-sm text-[#111111] placeholder-[#52525b] transition focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b] resize-y"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#71717a]">
          Submissions are reviewed weekly by the executive producers.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#f59e0b] px-8 py-3.5 text-base font-bold text-[#0a0a0a] transition hover:bg-[#d97706] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="mr-2 h-4 w-4 animate-spin text-[#0a0a0a]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting Pitch...
            </>
          ) : (
            "Submit Pitch"
          )}
        </button>
      </div>
    </form>
  );
}

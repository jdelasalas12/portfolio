"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("Message sent successfully. I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6 overflow-x-hidden">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/40"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c8ff00]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/40"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c8ff00]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/40"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="How can I help?"
          required
          className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c8ff00]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/40"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
          required
          className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c8ff00]"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="btn-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send message"}
          {!loading && <span>↗</span>}
        </button>

        {status && <p className="max-w-md text-sm text-[#c8ff00]">{status}</p>}
      </div>
    </form>
  );
}

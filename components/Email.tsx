"use client";
import { Mail } from "lucide-react";

// Required for interactivity in the App Router

export default function ActionButton() {
  const handleEmailClick = () => {
    const email = "nosjayd@gmail.com";
    const subject = encodeURIComponent("Inquiry about services");
    const body = encodeURIComponent("Hello, I would like to learn more.");

    // Opens the default client instantly
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <button
      onClick={handleEmailClick}
      className="flex items-center cursor-pointer"
    >
      <Mail className="w-4 h-4" />
      <p className="text-sm px-2">nosjayd@gmail.com</p>
    </button>
  );
}

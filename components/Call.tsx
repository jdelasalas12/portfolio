import { PhoneCallIcon } from "lucide-react";

export default function ContactButton() {
  const phoneNumber = "+639052149362";

  return (
    <a href={`tel:${phoneNumber}`} className="contact-link flex items-center">
      <PhoneCallIcon className="w-4 h-4" />
      <p className="text-sm px-2">+63 9052149362</p>
    </a>
  );
}

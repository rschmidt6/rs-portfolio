import { useState } from "react";
import { Mail } from "lucide-react";

const EmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rdschmidt88@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
    >
      <Mail size={20} />
      <span>{copied ? "Copied!" : "Email"}</span>
    </button>
  );
};

export default EmailButton;

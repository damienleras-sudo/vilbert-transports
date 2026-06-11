"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 lg:hidden">
      <a
        href="tel:0322930286"
        className="bg-[#f5b800] text-gray-900 font-black px-5 py-3 rounded-full shadow-xl text-sm flex items-center gap-2"
      >
        📞 Appeler
      </a>
      <a
        href="mailto:tp@groupe-vilbert.fr"
        className="bg-[#b5451b] text-white font-bold px-5 py-3 rounded-full shadow-xl text-sm flex items-center gap-2"
      >
        ✉️ Email
      </a>
    </div>
  );
}

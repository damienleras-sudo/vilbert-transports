"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const fleetItems = [
  { label: "6x4 Benne", href: "/parc-vehicules#6x4" },
  { label: "8x4 Benne", href: "/parc-vehicules#8x4" },
  { label: "Ampliroll", href: "/parc-vehicules#ampliroll" },
  { label: "Semi TP", href: "/parc-vehicules#semi-tp" },
  { label: "FMA (Fond Mouvant)", href: "/parc-vehicules#fma" },
  { label: "8x4 avec Grue", href: "/parc-vehicules#grue" },
  { label: "Porte-engins", href: "/parc-vehicules#porte-engins" },
];

const servicesItems = [
  { label: "Transport de matériaux", href: "/services#materiaux" },
  { label: "Transport d'engins", href: "/services#engins" },
  { label: "Transport ADR & Liquides", href: "/services#adr" },
  { label: "Transport de déchets", href: "/services#dechets" },
  { label: "Transport exceptionnel", href: "/transport-exceptionnel" },
  { label: "Location avec chauffeur", href: "/services#location" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top bar */}
      <div className="bg-[#1a3d6b] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:0322930286" className="flex items-center gap-1 hover:text-[#f5b800] transition-colors font-bold">
              📞 03 22 93 02 86
            </a>
            <a href="mailto:transports@groupe-vilbert.fr" className="flex items-center gap-1 hover:text-[#f5b800] transition-colors hidden sm:flex">
              ✉️ transports@groupe-vilbert.fr
            </a>
            <span className="text-blue-200 hidden md:inline">⏰ Lun–Ven : 7h–18h · Hauts-de-France &amp; Europe</span>
          </div>
          <a
            href="https://www.groupe-vilbert.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1a3d6b] font-black text-xs px-3 py-1 rounded hover:bg-[#f5b800] hover:text-gray-900 transition-colors"
          >
            Groupe Vilbert →
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-40 h-10">
              <Image
                src="/logo.png"
                alt="Vilbert Transports — Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Notre Flotte dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setFleetOpen(true)}
              onMouseLeave={() => setFleetOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
                Notre Flotte
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {fleetOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#1a3d6b] rounded-b-lg py-2 min-w-48 z-50">
                  {fleetItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3d6b] font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#1a3d6b] rounded-b-lg py-2 min-w-52 z-50">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3d6b] font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/transport-exceptionnel" className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
              Transport Exceptionnel
            </Link>
            <Link href="/realisations" className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
              Réalisations
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
              Blog
            </Link>
            <Link href="/a-propos" className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-bold text-gray-800 hover:text-[#1a3d6b] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA buttons desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="mailto:transports@groupe-vilbert.fr"
              className="text-sm font-bold px-4 py-2 border-2 border-[#1a3d6b] text-[#1a3d6b] rounded hover:bg-[#1a3d6b] hover:text-white transition-colors"
            >
              ✉️ Email
            </a>
            <a
              href="tel:0322930286"
              className="text-sm font-black px-4 py-2 bg-[#1a3d6b] text-white rounded hover:bg-[#254d8a] transition-colors"
            >
              📞 03 22 93 02 86
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white pb-4">
            <div className="px-4 pt-4 space-y-1">
              <p className="text-xs font-black text-[#1a3d6b] uppercase tracking-widest mb-2">Notre Flotte</p>
              {fleetItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1a3d6b] font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-black text-[#1a3d6b] uppercase tracking-widest mb-2 mt-4">Services</p>
              {servicesItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-[#1a3d6b] font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
                <Link href="/transport-exceptionnel" className="block px-3 py-2 text-sm font-bold text-gray-800" onClick={() => setMobileOpen(false)}>Transport Exceptionnel</Link>
                <Link href="/realisations" className="block px-3 py-2 text-sm font-bold text-gray-800" onClick={() => setMobileOpen(false)}>Réalisations</Link>
                <Link href="/blog" className="block px-3 py-2 text-sm font-bold text-gray-800" onClick={() => setMobileOpen(false)}>Blog</Link>
                <Link href="/a-propos" className="block px-3 py-2 text-sm font-bold text-gray-800" onClick={() => setMobileOpen(false)}>À propos</Link>
                <Link href="/contact" className="block px-3 py-2 text-sm font-bold text-gray-800" onClick={() => setMobileOpen(false)}>Contact</Link>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="tel:0322930286" className="flex-1 text-center bg-[#1a3d6b] text-white font-black py-3 rounded text-sm">
                  📞 Appeler
                </a>
                <a href="mailto:transports@groupe-vilbert.fr" className="flex-1 text-center border-2 border-[#1a3d6b] text-[#1a3d6b] font-bold py-3 rounded text-sm">
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

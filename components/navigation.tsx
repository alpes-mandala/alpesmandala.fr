"use client";

import { titleFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo de Alpes Mandala" className="w-12 -m-4" />
          <Link
            href="/"
            className={cn("text-2xl font-light tracking-wide text-accent hover:text-accent/80 transition-colors", titleFont.className)}
          >
            Alpes Mandala
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-white">
          <Link
            href="/"
            className="text-sm tracking-wide hover:text-accent transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/therapeutes"
            className="text-sm tracking-wide hover:text-accent transition-colors"
          >
            Thérapeutes
          </Link>
          <Link
            href="/tarifs"
            className="text-sm tracking-wide hover:text-accent transition-colors"
          >
            Tarifs
          </Link>
          <Link
            href="/therapeutes"
            className="text-sm tracking-wide hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm tracking-wide hover:text-accent transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/therapeutes"
              className="block text-sm tracking-wide hover:text-accent transition-colors"
            >
              Thérapeutes
            </Link>
            <Link
              href="/tarifs"
              className="block text-sm tracking-wide hover:text-accent transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/therapeutes"
              className="block text-sm tracking-wide hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

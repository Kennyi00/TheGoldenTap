import React from "react";
import { Beer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Beer className="w-5 h-5 text-primary" />
          <span className="font-heading text-lg font-semibold text-foreground">
            The Golden Tap
          </span>
        </div>

        <p className="font-body text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Golden Tap. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["About", "Menu", "Events", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
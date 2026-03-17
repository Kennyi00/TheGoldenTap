import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69b89146414b4ec61c65374d/aebf8d9d4_generated_30945b13.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="The Golden Tap pub interior with warm amber lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4"
        >
          Est. 1987 &mdash; Craft Beer &amp; Good Times
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
        >
          The Golden Tap
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl mt-6 max-w-lg"
        >
          Where great stories begin over perfectly poured pints and handcrafted cocktails.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-body text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8">
            A Neighborhood Institution
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Since 1987, The Golden Tap has been the heart of our neighborhood. What started as a
            small corner pub has grown into a beloved gathering place where locals and visitors
            alike come to enjoy expertly curated craft beers, signature cocktails, and the kind
            of warmth you only find in a place that truly cares about its community.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Our bartenders are storytellers. Our regulars are family. And every pint we pour
            is a promise &mdash; that your evening will be unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: "37+", label: "Years of History" },
            { number: "24", label: "Beers on Tap" },
            { number: "1000+", label: "Happy Regulars" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
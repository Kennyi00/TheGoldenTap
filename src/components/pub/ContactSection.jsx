import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["42 Brooklyn", "Brooklyn, NY 0000"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon–Thu: 4 PM – 12 AM", "Fri–Sat: 2 PM – 2 AM", "Sun: 2 PM – 11 PM"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(0000000)"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@thegoldentap.com"],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Find Your Way Here
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {infoItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              {item.lines.map((line) => (
                <p key={line} className="font-body text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
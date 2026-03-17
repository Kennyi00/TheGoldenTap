import React from "react";
import { motion } from "framer-motion";
import { Calendar, Music, Mic2 } from "lucide-react";

const MUSIC_IMAGE = "https://media.base44.com/images/public/69b89146414b4ec61c65374d/916923640_generated_dd695618.png";

const events = [
  {
    icon: Music,
    day: "Fridays",
    title: "Live Jazz Night",
    desc: "Local jazz ensembles perform from 8 PM. No cover charge.",
  },
  {
    icon: Mic2,
    day: "Wednesdays",
    title: "Open Mic",
    desc: "Bring your talent — comedy, poetry, music. Sign up at 7 PM.",
  },
  {
    icon: Calendar,
    day: "Sundays",
    title: "Quiz Night",
    desc: "Teams of up to 6. Prizes for the top 3. Starts at 7:30 PM.",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            What&apos;s Happening
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Weekly Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden hidden md:block aspect-[3/2]"
          >
            <img
              src={MUSIC_IMAGE}
              alt="Live jazz performance at The Golden Tap"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                    {event.day}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
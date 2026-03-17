import React from "react";
import { motion } from "framer-motion";

const COCKTAILS_IMAGE = "https://media.base44.com/images/public/69b89146414b4ec61c65374d/dd00351de_generated_a72fd856.png";

const menuCategories = [
  {
    title: "Draft Beers",
    items: [
      { name: "Golden Lager", desc: "Light & crisp, house classic", price: "$6" },
      { name: "Amber Ale", desc: "Caramel malt, smooth finish", price: "$7" },
      { name: "Stout Royale", desc: "Rich, dark, and velvety", price: "$8" },
      { name: "Hazy IPA", desc: "Tropical citrus burst", price: "$8" },
    ],
  },
  {
    title: "Signature Cocktails",
    items: [
      { name: "Old Fashioned", desc: "Bourbon, bitters, orange peel", price: "$12" },
      { name: "Smoky Negroni", desc: "Mezcal twist on the classic", price: "$14" },
      { name: "Golden Hour Sour", desc: "Whiskey, honey, lemon, egg white", price: "$13" },
      { name: "Tap Mule", desc: "Vodka, ginger beer, lime", price: "$11" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
            What We Pour
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
            Our Menu
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="font-body font-medium text-foreground">{item.name}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-body text-primary font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden hidden md:block"
          >
            <img
              src={COCKTAILS_IMAGE}
              alt="Craft cocktails on bar surface"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
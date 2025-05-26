"use client";

import Header from "@/ui/components/organisms/header";
import { ListCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Success() {
  return (
    <main className="flex flex-1 flex-col gap-[80px] px-5 py-6 md:px-16 md:py-11 bg-primary/10">
      <Header />
      <AnimatePresence>
        <div className="max-w-[600px] mx-auto w-full flex flex-col gap-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <ListCheck
              size={40}
              strokeWidth={1.25}
              className="text-green-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h2>Je betaling is gelukt!</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <p className="text-center">
              Bedankt voor je betaling. We hebben je betaling ontvangen en je
              factuur is verzonden.
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    </main>
  );
}

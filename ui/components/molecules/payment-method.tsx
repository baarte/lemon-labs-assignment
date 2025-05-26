"use client";

import Image from "next/image";
import { RadioGroupItem } from "@/ui/components/organisms/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/molecules/select";
import { motion, AnimatePresence } from "motion/react";
import type { IssuerType, PaymentMethodType } from "@/lib/types";

export default function PaymentMethod({
  method,
  selectedPaymentMethodId,
}: {
  method: PaymentMethodType;
  selectedPaymentMethodId: string | null;
}) {
  return (
    // Stel de bg in op basis van de geselecteerde betaalmethode id
    <label
      key={method.id}
      htmlFor={method.id}
      className={`block px-5 py-4.5 rounded-md cursor-pointer transition-colors ${
        selectedPaymentMethodId === method.id
          ? "bg-primary/10 "
          : "hover:bg-primary/10"
      }`}
    >
      <div className="flex items-center">
        <Image
          src={method.image}
          alt={method.description}
          width={72}
          height={56}
          className="object-contain"
        />
        <h4 className="ml-4">{method.description}</h4>
        <div className="ml-auto flex items-center gap-2">
          {method.id === "ideal" && (
            <p className="ml-auto bg-primary/10 rounded-full px-3 py-1 flex items-center">
              <span className="text-primary text-xs font-bold">Populair</span>
            </p>
          )}
          <RadioGroupItem
            value={method.id}
            id={method.id}
            className="w-[35px] h-[35px]"
          />
        </div>
      </div>
      {/* Toon een select menu als de gebruiker een ideal betaalmethode heeft geselecteerd */}
      <AnimatePresence>
        {method.id === "ideal" && selectedPaymentMethodId === method.id && (
          <motion.div
            key="ideal-select"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 block"
          >
            <Select>
              <SelectTrigger className="w-full md:w-[250px] bg-white dark:bg-white border-none cursor-pointer">
                <SelectValue
                  className="text-black"
                  placeholder="Selecteer uw bank"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {method.issuers?.map((issuer: IssuerType) => {
                    return (
                      <SelectItem
                        key={issuer.id}
                        value={issuer.id}
                        className="cursor-pointer"
                      >
                        <Image
                          src={issuer.image}
                          alt={issuer.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="ml-2 font-semibold">
                          {issuer.name}
                        </span>
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs pl-3 text-gray-500 mt-2 max-w-[250px]">
              U wordt doorverwezen naar de bank om uw betaling te autoriseren.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </label>
  );
}

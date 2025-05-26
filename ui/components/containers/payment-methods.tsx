"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/ui/components/organisms/header";
import { RadioGroup } from "@/ui/components/organisms/radio-group";
import PaymentMethod from "@/ui/components/molecules/payment-method";
import type { PaymentMethodType } from "@/lib/types";
import { motion } from "motion/react";
import { Skeleton } from "@/ui/components/molecules/skeleton";

export default function PaymentMethods() {
  const [country, setCountry] = useState<string | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodType[]>([]);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch het IP adres van de gebruiker en stel het land in
    async function fetchIp() {
      try {
        const res = await fetch(
          `https://api.ipregistry.co/?key=ira_vsfmSnuEFehuPsxp3wK0F1yYzvD9gW052Uvt`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch IP");
        }
        const data = await res.json();
        setCountry(data.location.country.code.toLowerCase());
      } catch (error) {
        console.error("Error fetching IP", error);
      }
    }
    fetchIp();
  }, []);

  useEffect(() => {
    // Fetch de betaalmethoden van de gebruiker op basis van country
    async function getPaymentMethods() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/api/paymentMethods`);
        if (!res.ok) {
          throw new Error("Failed to fetch payment methods");
        }
        const data = await res.json();
        console.log({ data });
        setPaymentMethods(data.data || []);
      } catch (error) {
        console.error("Error fetching payment methods", error);
      } finally {
        setIsLoading(false);
      }
    }
    getPaymentMethods();
  }, [country]);

  // Filter de betaalmethoden op basis van het land van de gebruiker
  const filteredPaymentMethods = country
    ? paymentMethods.filter((method) => method.countries?.includes(country))
    : [];

  return (
    <motion.div
      key="payment-methods"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <section className="px-5 py-6 md:p-[45px] h-full w-full">
        <div className="flex flex-col gap-[40px] max-w-[578px] mx-auto">
          <div className="h-[80px]">
            <Header />
          </div>

          <div>
            <h2>Betaalmethoden</h2>
            <p>Kies een betaalmethode die het beste bij u past.</p>
            <div className="bg-white px-4 py-3 shadow-[0_6px_18px_rgba(191,191,191,0.15)] rounded-xl mt-8">
              {/* Toon een loading state als de betaalmethoden nog niet zijn geladen */}
              {isLoading ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                // Map door de betaalmethoden als deze zijn geladen en voeg wat animations toe
                <RadioGroup
                  value={selectedPaymentMethodId || undefined}
                  onValueChange={setSelectedPaymentMethodId}
                >
                  {filteredPaymentMethods.length === 0 && (
                    <p className="text-gray-500">
                      Geen betaalmethoden beschikbaar voor uw land.
                    </p>
                  )}

                  {filteredPaymentMethods.map((method, index) => (
                    <motion.div
                      key={method.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2, delay: index * 0.1 },
                      }}
                    >
                      <PaymentMethod
                        method={method}
                        selectedPaymentMethodId={selectedPaymentMethodId}
                      />
                    </motion.div>
                  ))}
                </RadioGroup>
              )}
            </div>
            <div className="flex flex-row items-center gap-5 mt-8 bg-primary/10 rounded-sm py-4 px-6">
              <Image
                src="/images/icons/icon-protect.svg"
                alt="protect"
                width={36}
                height={36}
              />
              <p>
                Wij houden ons volledig aan de databeveiligingsnormen van de
                betalingskaartindustrie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

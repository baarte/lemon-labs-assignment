import { Suspense } from "react";
import Link from "next/link";
import PaymentItem from "@/ui/components/molecules/payment-item";
import { buttonVariants } from "@/ui/components/atoms/button";
import { CustomerPayment } from "@/lib/types";
import { getCurrencySymbol } from "@/lib/utils";
import { getTotalAmount } from "@/lib/utils";
import { Skeleton } from "../molecules/skeleton";

export default async function PaymentInfoCard() {
  let data: CustomerPayment[] = [];
  let error = null;

  try {
    const res = await fetch(
      `http://localhost:3000/api/payment/GSCX4083134101`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Kon betaling niet ophalen. Probeer het later opnieuw.");
    }
    const json = await res.json();
    data = json.data;
    if (!data) {
      throw new Error("Geen betalingsgegevens gevonden.");
    }
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "Onbekende fout opgetreden.";
    }
  }

  if (error) {
    return (
      <div className="mt-6 bg-white p-4">
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white p-4">
      <p className="text-xs text-medium mb-6">
        Factuurnummer:{" "}
        <span className="font-semibold">#{data[0].payment.id}</span>
      </p>
      <div className="flex flex-col gap-5 border-b-1 border-[#E3E3E3] pb-5 mb-5">
        {/* Voeg een suspense component toe om de loading state af te handelen */}
        <Suspense
          fallback={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          }
        >
          {/* Map door alle betalingen heen en render de payment item component */}
          {data.map((paymentItem: CustomerPayment) => (
            <PaymentItem
              key={paymentItem.payment.id}
              title={paymentItem.payment.payment_description}
              description={
                "Standaard prijs voor het opstellen van een opzegbrief"
              }
              currency={paymentItem.payment.currency}
              amount={paymentItem.payment.payment_amount.toString()}
            />
          ))}
        </Suspense>
      </div>
      <div className="flex flex-row justify-between gap-3.5 mb-5">
        <div className="flex flex-col gap-1">
          <h3>Totaal</h3>
        </div>
        {/* Gebruik de getCurrencySymbol functie om de juiste currency symbol te krijgen */}
        <p className="text-base font-semibold flex-shrink-0">
          {getCurrencySymbol("nl-NL", data[0].payment.currency)}{" "}
          {getTotalAmount(data)}
        </p>
      </div>
      <Link href="/success" className={buttonVariants({ variant: "default" })}>
        Nu betalen
      </Link>
    </div>
  );
}

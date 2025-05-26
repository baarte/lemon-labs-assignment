import Link from "next/link";
import PaymentItem from "@/ui/components/molecules/payment-item";
import { buttonVariants } from "@/ui/components/atoms/button";
import { CustomerPayment } from "@/lib/types";
import { getCurrencySymbol, getTotalAmount } from "@/lib/utils";

export default async function CustomerInfoCard() {
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
      <div className="mt-6 bg-white p-4 w-full">
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      </div>
    );
  }
  return (
    <div className="mt-6 bg-white p-4 w-full">
      <p className="text-xs text-medium mb-6">
        Factuurnummer:{" "}
        <span className="font-semibold">#{data[0].payment.id}</span>
      </p>
      <div className="flex flex-col gap-5 border-b-1 border-[#E3E3E3] pb-5 mb-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-medium">Naam</p>
          <h3 className="text-base font-semibold">
            {data[0].first_name} {data[0].last_name}
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-medium">Email</p>
          <h3 className="text-base font-semibold">{data[0].email}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-medium">Telefoonnummer</p>
          <h3 className="text-base font-semibold">{data[0].phone_number}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-medium">Adres</p>
          <h3 className="text-base font-semibold">
            {data[0].address}, {data[0].postal_code}, {data[0].city}
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-b-1 border-[#E3E3E3] pb-5 mb-5">
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
      </div>
      <div className="flex flex-row justify-between gap-3.5 mb-5">
        <div className="flex flex-col gap-1">
          <h3>Totaal</h3>
        </div>
        <p className="text-base font-semibold flex-shrink-0">
          {getCurrencySymbol("nl-NL", data[0].payment.currency)}{" "}
          {getTotalAmount(data)}
        </p>
      </div>
      <Link href="/payment" className={buttonVariants({ variant: "default" })}>
        Betaal nu
      </Link>
    </div>
  );
}

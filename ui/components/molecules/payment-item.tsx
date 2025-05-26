import { getCurrencySymbol } from "@/lib/utils";

export default function PaymentItem({
  title,
  description,
  currency,
  amount,
}: {
  title: string;
  description?: string;
  currency: string;
  amount: string;
}) {
  return (
    <div className="flex flex-row justify-between gap-3.5">
      <div className="flex flex-col gap-1">
        <h3>{title}</h3>
        {description && <p className="text-xs max-w-[65%]">{description}</p>}
      </div>
      <p className="text-base font-semibold flex-shrink-0">
        {getCurrencySymbol("nl-NL", currency)} {amount}
      </p>
    </div>
  );
}

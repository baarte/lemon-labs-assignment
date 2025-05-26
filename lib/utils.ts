import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CustomerPayment } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrencySymbol(locale: string, currency: string) {
  return (0)
    .toLocaleString(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
}

export function getTotalAmount(data: CustomerPayment[]) {
  return data.reduce(
    (acc: number, paymentItem: CustomerPayment) =>
      acc + Number(paymentItem.payment.payment_amount),
    0
  );
}

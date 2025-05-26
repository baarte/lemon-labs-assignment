import PaymentInfo from "@/ui/components/containers/payment-info";
import PaymentMethods from "@/ui/components/containers/payment-methods";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center flex-grow w-full h-full mx-auto">
      <div className="w-full md:w-1/2 h-full shadow-[10px_0_22px_rgba(120,185,128,0.1)]">
        <PaymentMethods />
      </div>
      <div className="w-full md:w-1/2 h-full">
        <PaymentInfo />
      </div>
    </div>
  );
}

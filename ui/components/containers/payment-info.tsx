import Notification from "@/ui/components/atoms/notification";
import PaymentInfoCard from "@/ui/components/organisms/payment-info-card";

export default function PaymentInfo() {
  return (
    <section className="px-5 py-6 md:p-[45px] h-full w-full bg-primary/10">
      <div className="flex flex-col gap-[40px] max-w-[578px] mx-auto">
        <div className="h-[80px]">
          <Notification message="Vermijd extra kosten betaal uw openstaande factuur direct!" />
        </div>
        <div>
          <h2>Te betalen bedrag</h2>
          <p>Hieronder ziet u de factuurgegevens.</p>
          <PaymentInfoCard />
        </div>
      </div>
    </section>
  );
}

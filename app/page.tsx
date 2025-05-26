import Header from "@/ui/components/organisms/header";
import CustomerInfoCard from "@/ui/components/organisms/customer-info-card";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-[40px] md:gap-[80px] px-5 pt-6 pb-11 md:px-16 md:py-11 bg-primary/10">
      <Header />
      <div className="max-w-[600px] mx-auto w-full flex flex-col gap-1">
        <h2>Je betaling</h2>
        <p>
          Hieronder ziet u alle gegevens van je betaling. Betaal uw openstaande
          factuur direct en vermijd extra kosten.
        </p>
        <CustomerInfoCard />
      </div>
    </main>
  );
}

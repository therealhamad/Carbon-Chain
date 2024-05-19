import BuyComponent from "@/components/BuyComponent";
export default function Page() {
  return (
    <main className="px-[5vw]">
      <div>
        <BuyComponent
          amount="50"
          address="0x1A2b3C4d5E6f7G8H9I0j1K2L3M4N5O6P7Q8R9S0T"
        />
      </div>
    </main>
  );
}

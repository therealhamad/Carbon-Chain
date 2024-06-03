import storeData from "@/data/store.json";
import BuyComponent from "@/components/BuyComponent";
export default function Page() {
  return (
    <main className="px-[5vw]">
      <div>
        {storeData.map((item) => {
          return (
            <BuyComponent
              amount={item.monetaryValue}
              address={item.contractAddress}
            />
          );
        })}
      </div>
    </main>
  );
}

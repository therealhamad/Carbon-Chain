import { add, div } from "@tensorflow/tfjs";

export default function BuyComponent({ amount, address }) {
  return (
    <>
      <div className="w-[60%] mx-auto mt-[60px] h-[15vh] bg-[rgba(255,255,255,0.06)] flex flex-row justify-between">
        <h2 className=" h-[30%] my-auto">{address}</h2>
        <h2>{amount}</h2>
        <button>buy</button>
      </div>
    </>
  );
}

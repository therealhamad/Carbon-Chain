export default function BuyComponent({ amount, address }) {
  return (
    <>
      <div className="w-[60%] mx-auto mt-[60px] h-[15vh] bg-[rgba(68,45,127,0.6)] flex flex-row justify-between px-5  rounded-lg">
        <h2 className=" h-[30%] my-auto">Address: {address.slice(0, 10)}</h2>
        <h2 className=" h-[30%] my-auto">Amount: {amount}</h2>
        <button className="bg-[rgba(63,170,116,1)] h-[30%] my-auto py-2 px-3 rounded-lg">
          buy
        </button>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Verification from "@/components/Verification";
import Difference from "@/components/Difference";
import { easeInOut, motion } from "framer-motion";
import Backdrop from "@/components/Backdrop";
import { useEffect, useState } from "react";
import axios from "axios";
const { ethers } = require("ethers");

const contractAddress = "0xbA6D779Ebf3EADA6c805c29215751004dBDa46ef";
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxLimit",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyFrom",
        type: "address",
      },
    ],
    name: "buyCredit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_textHash",
        type: "string",
      },
      {
        internalType: "address",
        name: "_awardee",
        type: "address",
      },
    ],
    name: "generateCredits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sellAmount",
        type: "uint256",
      },
    ],
    name: "sellCredit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let contract;

export async function testFunc() {
  // Check if MetaMask is installed
  let signer;
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log("Connected account:", account);

      // Instantiate a provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer
      signer = provider.getSigner();

      console.log("Provider:", provider);
      console.log("Signer:", signer);

      // Create a contract instance
      contract = new ethers.Contract(contractAddress, contractABI, signer);

      console.log("Contract:", contract);
    } catch (error) {
      console.error("User denied account access", error);
    }
  } else {
    console.error("MetaMask is not installed");
    alert("Please install MetaMask!");
  }

  if (!signer || !contract) {
    console.error(
      "Signer or contract is not available. Connect the wallet first."
    );
    return;
  }

  // try {
  //   // Call a method on the contract
  //   const txResponse = await contract.yourMethodName(123); // Replace with actual method and parameters
  //   console.log("Transaction Response:", txResponse);

  //   // Wait for the transaction to be mined
  //   const receipt = await txResponse.wait();
  //   console.log("Transaction Receipt:", receipt);
  // } catch (error) {
  //   console.error("Error interacting with contract", error);
  // }
}

/*****************************************************/

export default function Home() {
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const verifyClicked = () => {
    setIsVerifyClicked(!isVerifyClicked);
    /* setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2); */
  };

  const f = async () => {
    await contract.generateCredits(
      "",
      "0xe3E71494D0670B01E3D54fD89733A8BDc6b67Dc5"
    );
  };

  useEffect(() => {
    testFunc();
  }, []);

  const onBuyClick = async () => {
    // await contract.buyCredit(10 , "0xD4970cb1C39019921a3Ce7138393E8c8e2F0d229");
    await contract.generateCredits(
      "",
      "0xe3E71494D0670B01E3D54fD89733A8BDc6b67Dc5"
    );
  };

  const crossClicked = () => {
    setIsVerifyClicked(!isVerifyClicked);
  };

  const data = { text: post };
  const postData = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/", data);
      // Log the full response object for debugging
      console.log(response);

      // Access response data directly
      console.log("Success:", response.data);
    } catch (error) {
      // Axios errors have a response property
      if (error.response) {
        console.error(`Error ${error.response.status}:`, error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    postData();
  };

  return (
    <main className="">
      {isVerifyClicked && (
        <Backdrop onButtonClick={crossClicked} isLoading={isLoading} />
      )}
      {!isVerifyClicked ? (
        <>
          <motion.section
            className="flex flex-row justify-between mt-[15vh]  py-3 h-[80vh]  px-[5vw]"
            initial={{ opacity: 0, scale: 1, y: "200px" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[70%] pl-6">
              <h1 className="text-[12vh]">
                Carbon<span className="text-[rgba(68,45,127,1)]">Chain</span>
              </h1>
              <p className="text-[4.5vh] py-10 px-1">
                Trading Sustainability, Sharing Responsibility
              </p>
              <div className="w-[100%] flex justify-start  mt-[40px]">
                <Link
                  href="/buy"
                  className="text-[2.5vh]  px-[3vw] py-[2vh] rounded-xl mx-2
                bg-[rgba(63,170,116,0.8)] "
                  onClick={onBuyClick}
                >
                  Buy
                </Link>
                <Link
                  href="/sell"
                  className="text-[2.5vh]  px-[3vw] py-[2vh] rounded-xl mx-2 
            ml-[5rem]
            bg-[rgba(63,170,116,0.8)]"
                >
                  Sell
                </Link>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="mt-[3vh]  h-[60vh] w-[60vh]">
                <Image
                  height={2000}
                  width={2000}
                  alt="logo"
                  src="/cropped_image (1)/cropped_image (1).png"
                />
              </div>
            </div>
          </motion.section>
          <section
            className="h-[60vh] pt-[5vh] bg-[rgba(68,45,127,0.4)] overflow-visible px-[5vw]"
            /*  */
          >
            <motion.div
              className="w-[50%] text-[3.5vh] px-5 mt-[60px] leading-20"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p>
                At CarbonChain we&apos;re on a mission to empower individuals
                and organisations to make a meaningful impact on our
                planet&apos;s future. Through our innovative platform, every
                action you take towards sustainability becomes a step towards a
                greener, more sustainable world.
              </p>
            </motion.div>
          </section>
          <Verification
            onButtonClick={verifyClicked}
            handleChange={(e) => setPost(e.target.value)}
            handleSubmit={submitHandler}
          />
          <Difference />
        </>
      ) : (
        ""
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { toast } from 'react-toastify';

export function Hero() {
  const { publicKey } = useWallet();

  const [address, setAddress] = useState<string>(publicKey ? publicKey.toString() : "");
  const [msg, setMsg] = useState<string | null>(null);

  const isValidSolanaAddress = (address: string) => {
    try {
      const newAddress = new web3.PublicKey(address);
      setAddress(newAddress.toString());
    } catch (error) {
      setAddress("");
    }

    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address.toString());
  };

  const handleAirdrop = async () => {
    if (isValidSolanaAddress(address)) {
      try {
        const data = {
          jsonrpc: "2.0",
          id: 1,
          method: "requestAirdrop",
          params: [
            address,
            1 * web3.LAMPORTS_PER_SOL // 1 SOL
          ],
        };

        const signature = await axios.post(
          "<your-rpc-proxy-url", // input your RPC proxy URL here
          data,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept": "*/*",
            },
          }
        );

        console.log("SUCCESS", signature);
        setMsg("Airdrop successful");
        toast.success(msg)
      } catch (error) {
        console.log("ERROR", error);
        setMsg("Request failed. Please try again later");
        toast.error(msg)
      }

      setAddress("");
    } else {
      setMsg("Invalid Solana Address");
      setAddress("");
      toast.error(msg)
    }
  };

  return (
    <div className="relative isolate px-6lg:px-8 bg-slate-100 h-screen overflow-hidden">
      {/* BACKGROUND STYLING */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e3572e] to-red-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="bg-transparent py-16 sm:py-52">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Fund your Solana wallet<br /> with{" "}
              <span className="bg-gradient-to-r from-[#e3572e] via-orange-300 to-[#e3572e] inline-block text-transparent bg-clip-text">Helius</span> RPCs
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              This application is only for demo purposes and operates on the Solana developer network. This application does not dispurse real SOL.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleAirdrop}>
              <label htmlFor="wallet-address" className="sr-only">
                Solana Wallet Address
              </label>
              <input
                id="wallet-address"
                name="address"
                type="address"
                autoComplete="address"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your Solana wallet address"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request 1 SOL
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#e3572e" />
                  <stop offset={1} stopColor="#e3572e" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>


      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e3572e] to-red-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
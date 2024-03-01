"use client";

import * as React from "react";

import { useWallet } from "@solana/wallet-adapter-react";

export function Hero() {
    const [showTrue, setShowTrue] = React.useState(false);

    const { publicKey } = useWallet();

    React.useEffect(() => {
        if (publicKey) {
            setShowTrue(true)
        } else {
            setShowTrue(false)
        }
    }, [publicKey]);

    return (
        <div className="relative isolate px-6lg:px-8">
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
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="flex flex-col items-center text-center">
                {
                  showTrue
                    ?
                    <h1 className="transition-all duration-200 ease-in-out text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      You wallet is connected
                    </h1>
                    :
                    <h1 className="transition-all duration-200 ease-in-out text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      You wallet is <span className="bg-gradient-to-r from-[#e3572e] via-orange-300 to-[#e3572e] inline-block text-transparent bg-clip-text">not</span> connected
                    </h1>
                }
                <p className="mt-6">Have questions? Leave a comment on this <br/>video or reach out to <a>Nathan on X</a>!</p>
                <div className="mt-10 grid grid-cols-2 w-72">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-md bg-transparent group-hover:bg-[#e3572e]/50 duration-200 transition-all ease-in-out blur-md px-5.5 py-2.5" />
  
                    <a
                      href="https://www.youtube.com/watch?v=8azRe9PRLg0&list=PLMZny7wGLM6w4t7pMGATxFTjjMduTsEiF"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="relative rounded-md bg-[#e3572e] px-3.5 py-2.5 group-hover:px-4 group-hover:py-3 text-sm font-semibold text-white group-hover:shadow-lg duration-200 transition-all ease-in-out border border-transparent"
                    >
                      Learn More
                    </a>
                  </div>
  
                  <a 
                    href="https://twitter.com/_zebedee_" 
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#e3572e] duration-200 transition-all ease-in-out"
                  >
                    Contact Nathan <span aria-hidden="true">→</span>
                  </a>
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
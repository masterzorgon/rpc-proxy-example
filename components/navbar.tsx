"use client";

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import heliusLogo from "../public/heliusLogo.svg";

export function NavBar() {
  return (
    <Navbar className="w-screen bg-transparent">
      <Image src={heliusLogo} alt="Solana Logo" width={40} className="" />
      <NavbarContent justify="end">
        <Tooltip placeholder="bottom" content="Devnet Only">
          <NavbarItem>
            {/* This page is a client component because of the WalletMultiButton component. If you want to make the navbar a SSR component, refacto the button component */}
            <WalletMultiButton className='!bg-black hover:!bg-black transition-all duration-200 !rounded-lg' />
          </NavbarItem>
        </Tooltip>
      </NavbarContent>
    </Navbar>
  );
}

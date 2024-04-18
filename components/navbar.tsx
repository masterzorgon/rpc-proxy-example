"use client";

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import heliusLogo from "../public/heliusLogo.svg";
import Link from 'next/link';

export function NavBar() {
  return (
    <Navbar className="bg-transparent w-screen">
      <Link
        href="https://www.helius.dev/"
      >
        <Image src={heliusLogo} alt="Solana Logo" width={40} className="" />
      </Link>
      <NavbarContent justify="end">
        <Tooltip placeholder="bottom" content="Devnet Only">
          <NavbarItem>
            <WalletMultiButton />
          </NavbarItem>
        </Tooltip>
      </NavbarContent>
    </Navbar>
  );
}
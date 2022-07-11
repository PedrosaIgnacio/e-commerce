import React, { ReactNode } from "react";
import { FooterComp } from "../ui/FooterComp";
import { NavBar } from "../ui/NavBar";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <NavBar />
      {children}
      <FooterComp />
    </main>
  );
};

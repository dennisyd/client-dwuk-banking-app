"use client";
import LinkWrapper from "@/app/lib/components/common/NavBar/LinkWrapper";
import stylesShared from "../../lib/styles/shared.module.css";
import { usePathname } from "next/navigation";

export default function TransactionsNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className={stylesShared.secondaryNavBarContainer}>
        {!pathname.match(/newTransaction/i) && (
          <LinkWrapper
            href="/transactions/newTransaction"
            link="New Transaction"
          />
        )}
      </div>
    </nav>
  );
}

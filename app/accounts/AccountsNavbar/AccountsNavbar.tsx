"use client";
import LinkWrapper from "@/app/lib/components/common/NavBar/LinkWrapper";
import stylesShared from "../../lib/styles/shared.module.css";
import { usePathname } from "next/navigation";

export default function AccountsNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className={stylesShared.secondaryNavBarContainer}>
        {!pathname.match(/newAccount/i) && (
          <LinkWrapper href="/accounts/newAccount" link="New Account" />
        )}
      </div>
    </nav>
  );
}

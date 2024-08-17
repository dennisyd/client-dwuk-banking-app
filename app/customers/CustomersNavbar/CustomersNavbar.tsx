"use client";
import LinkWrapper from "@/app/lib/components/common/NavBar/LinkWrapper";
import stylesShared from "../../lib/styles/shared.module.css";
import { usePathname } from "next/navigation";

export default function CustomersNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className={stylesShared.secondaryNavBarContainer}>
        {!pathname.match(/newCustomer/i) && (
          <LinkWrapper href="/customers/newCustomer" link="New Customer" />
        )}
      </div>
    </nav>
  );
}

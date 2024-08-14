import Link from "next/link";

interface LinkWrapper {
  href: string;
  link: string;
}

export default function LinkWrapper({ href, link }: LinkWrapper) {
  return (
    <div className="link-wrapper">
      <Link href={href}>{link}</Link>
    </div>
  );
}

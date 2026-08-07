"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

interface ActiveLinkProps extends ComponentProps<typeof Link> {
  activeClassName: string;
  inactiveClassName: string;
  exact?: boolean;
}

export function ActiveLink({
  href,
  activeClassName,
  inactiveClassName,
  exact = true,
  className,
  children,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();

  // Use exact matching or match nested sub-routes
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(String(href));

  const computedClassName =
    `${className || ""} ${isActive ? activeClassName : inactiveClassName}`.trim();

  return (
    <Link href={href} className={computedClassName} {...props}>
      {children}
    </Link>
  );
}

export default ActiveLink;

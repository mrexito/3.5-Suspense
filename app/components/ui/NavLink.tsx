"use client"

import Link from 'next/link';
import {usePathname} from "next/navigation"

export default function NavLink({ href, ...rest }) {
  const pathname = usePathname()
  const isActive = href === pathname
  console.log(pathname)
  console.log(isActive)
  
  return (
    <Link
      className={isActive ? "text-cyan-600" :""}
      href={href} {...rest} />
  )
}

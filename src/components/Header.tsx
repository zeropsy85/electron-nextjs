'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="h-16 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between">
            <ul className="h-full flex flex-row flex-nowrap items-center gap-4">
                <li className="">
                    <Link href="/" className={pathname === "/" ? "text-blue-500 underline" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/camera" className={pathname === "/camera/" ? "text-blue-500 underline" : ""}>Camera</Link>
                </li>
            </ul>
        </header>
    )
}
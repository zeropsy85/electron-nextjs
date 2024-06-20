'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [location , setLocation] = useState('');

    useEffect(()=>{
        setLocation(window.location.href);
    },[pathname])

    return (
        <header className="h-16 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between">
            <ul className="h-full flex flex-row flex-nowrap items-center gap-6">
                <li className="">
                    <Link href="/" className={pathname === "/" ? "text-blue-500 underline" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={pathname === "/about/" ? "text-blue-500 underline" : ""}>About</Link>
                </li>
                <li>
                    <Link href="/exampleApi" className={pathname === "/exampleApi/" ? "text-blue-500 underline" : ""}>Example Api</Link>
                </li>
            </ul>
            <p>location : <span className="text-red-500">{location}</span></p>
        </header>
    )
}
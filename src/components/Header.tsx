'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/", text: "Home", exact: true },
    { href: "/mbti/", text: "Mbti", exact: false },
    { href: "/instagramApi/", text: "Instagram Api", exact: true },
];

export default function Header() {
    const pathname = usePathname();
    const [currentTime, setCurrentTime] = useState<string | null>(null);

    const getClassName = (link: { href: string; text: string; exact: boolean }) => {
        if (link.exact) {
            return pathname === link.href ? "text-blue-500 underline" : "";
        } else {
            return pathname.startsWith(link.href) ? "text-blue-500 underline" : "";
        }
    };

    useEffect(() => {
        const tick = () => {
            setCurrentTime(new Date().toLocaleString());
            requestAnimationFrame(tick);
        };
        
        tick();
    }, []);

    return (
        <header className="h-16 flex px-10 gap-4 w-full flex-row flex-nowrap items-center justify-between fixed left-0 top-0 bg-white bg-opacity-90 z-10">
            <ul className="h-full flex flex-row flex-nowrap items-center gap-6">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={getClassName(link)}>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>{currentTime}</span>
            </div>
        </header>
    )
}
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import CurrentTime from "./CurrentTime";

const navLinks = [
    { href: "/", text: "Home", exact: true },
    { href: "/mbti/", text: "Mbti", exact: false },
    { href: "/instagramApi/", text: "Instagram Api", exact: true },
];

export default function Header() {
    const pathname = usePathname();

    const getClassName = (link: { href: string; text: string; exact: boolean }) => {
        if (link.exact) {
            return pathname === link.href ? "text-blue-500 underline" : "";
        } else {
            return pathname.startsWith(link.href) ? "text-blue-500 underline" : "";
        }
    };

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
                <CurrentTime />
            </div>
        </header>
    )
}
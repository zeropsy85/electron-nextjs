'use client';

import { useState } from "react";
import Image from 'next/image';

interface CoffeeProps {
    id: number;
    title: string;
    image: string;
}

export default function ExampleApi() {
    const [data, setData] = useState<CoffeeProps[]>([]);
    const getData = async () => {
        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot');
            const json = await resp.json();
            setData(json);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main className="p-10">
            <h1>Example API</h1>
            <button className="flex gap-1 border border-black rounded-md p-3 hover:bg-black hover:text-white ease-out duration-300 mt-10 disabled:cursor-not-allowed" onClick={getData} disabled={data.length > 0}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
                <span>Data 불러오기</span>
            </button>
            <ul className="flex flex-wrap flex-auto gap-4 mt-10">
                {data.map((el) => {
                    return (
                        <li key={el.id}>
                            <h2 className="mb-2">{el.title}</h2>
                            <Image className="rounded-lg" style={{height:'200px'}} src={el.image} alt={el.title} width={200} height={200} />
                        </li>
                    )
                })}
            </ul>
        </main>
    );
}
'use client';

import { useContext, useEffect, useRef } from "react";
import Image from 'next/image';

import { InstagramApiContext } from "@/context/InstagramApiContext";

import { gsap } from "gsap";

export default function InstagramNav() {
    const { viewData , isLoading , newDataLength , keyboardInput , setIsKeyboardView , fetchData , addNewData } = useContext(InstagramApiContext);
    const newCountRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(newDataLength > 0){
            gsap.fromTo(newCountRef.current, { x: -20, opacity:0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'Power3.easeOut' });
        }
    },[newDataLength]);

    return (
        <div className="flex gap-4">
            <button className="flex gap-1 border border-black rounded-md p-3 disabled:cursor-not-allowed" onClick={()=> fetchData(addNewData)} disabled={isLoading}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
                <span>기본 해시태그 불러오기</span>
            </button>
            {
                viewData.length !== 0 && 
                <div className="border border-black rounded-md p-3 flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    {viewData.filter((el:any) => el.media_url).length} 개
                </div>
            }
            {
                newDataLength > 0 &&
                <div className="flex items-center text-red-400" ref={newCountRef}>
                    + {newDataLength}
                </div>
            }
            {
                isLoading && <div className="ml-2 flex gap-2 items-center"><Image className="" src="/loading.svg" alt="" width={30} height={30}></Image> 데이터 불러 오는 중...</div>
            }
            <div className="ml-auto border border-black rounded-md p-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>
                <input className="input-keyboard overflow-ellipsis whitespace-nowrap overflow-hidden" type="text" readOnly placeholder="해시태그를 검색하세요" value={keyboardInput} onFocus={() => setIsKeyboardView(true)} />
            </div>
        </div>
    )
}
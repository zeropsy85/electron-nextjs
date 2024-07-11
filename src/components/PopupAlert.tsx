'use client';

import { useCallback, useContext, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { InstagramApiContext } from "@/context/InstagramApiContext";


export default function PopupAlert() {
    const { customAlert } = useContext(InstagramApiContext);
    const layerRef = useRef<HTMLDivElement>(null);
    const [isLayerView, setIsLayerView] = useState(false);

    const handleLayerClose = useCallback(()=>{
        if(isLayerView){
            gsap.to(layerRef.current, { autoAlpha: 0, duration: 0.6, ease:'Power3.easeOut', onComplete:()=>{
                setIsLayerView(false);
            }});
        }
    },[isLayerView]);

    useEffect(()=>{
        if(customAlert.alertText !== ''){
            gsap.to(layerRef.current, { autoAlpha: 1, duration: 0.6, ease:'Power3.easeOut' ,onComplete:()=>{
                setIsLayerView(true);
            }});
        }
    },[customAlert]);

    return (
        <div ref={layerRef} className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70 z-30 opacity-0 invisible" onClick={handleLayerClose}>
            <div className="border rounded-lg bg-white relative p-8 flex flex-col justify-center m-10" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div>
                    <p className="text-center">{customAlert.alertText}</p>
                    <div className="w-[20px] h-[1px] bg-black my-6 opacity-50 m-auto"></div> 
                </div>
                <button className="w-[100px] border border-black rounded-md p-2 flex gap-1 items-center justify-center m-auto" onClick={handleLayerClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>확인</span>
                </button>
            </div>  
        </div>
    )
}
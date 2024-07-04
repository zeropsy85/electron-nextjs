'use client';

import { useEffect, useRef } from "react";

import PrintTemplate from "./PrintTemplate";
import { gsap } from "gsap";

interface PopupProps {
    isLayerView: boolean;
    popupImage: string | null;
    handleLayerClose: () => void;
}

export default function Popup({ isLayerView, popupImage, handleLayerClose }: PopupProps) {
    const layerRef = useRef<HTMLDivElement>(null);

    const handlePrint = ()=>{
        if (window.electron) {
            window.electron.print();
        } else {
            // electron 환경에서 출력할 수 있습니다.
            window.print();
        }
    };

    useEffect(()=>{
        gsap.to(layerRef.current, { autoAlpha: isLayerView ? 1 : 0, duration: 0.6, ease:'Power3.easeOut' });
    },[isLayerView]);

    return (
        <div ref={layerRef} className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70 z-10 opacity-0 invisible" onClick={handleLayerClose}>
            <div className="border rounded-lg bg-white relative p-10 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleLayerClose} className="absolute top-4 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <div className="mt-6">
                    {
                        popupImage && <PrintTemplate imgSrc={popupImage} />
                    }
                </div>
                <button className="flex gap-2 justify-center mt-6 border border-black rounded-md p-3 hover:bg-black hover:text-white ease-out duration-300" onClick={handlePrint}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                    <span>프린트 하기</span>
                </button>
            </div>
        </div>
    )
}
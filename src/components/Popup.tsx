'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PopupProps {
    closePopup : ()=> void;
    children : React.ReactNode;
}

export default function Popup({ closePopup , children }: PopupProps) {
    const layerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (layerRef.current) {
            gsap.to(layerRef.current, { autoAlpha:1 , delay:0.1, duration: 0.6, ease:'Power3.easeOut' });
        }
    }, []);
    
    const handleClose = () => {
        if (layerRef.current) {
            gsap.to(layerRef.current, { autoAlpha: 0, duration: 0.6, ease:'Power3.easeOut' ,onComplete: closePopup});
        }
    };

    return (
        <div ref={layerRef} className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70 z-20 opacity-0 invisible" onClick={handleClose}>
            <div className="border rounded-lg bg-white relative p-10 flex flex-col justify-center m-10" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className="absolute top-4 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    )
}
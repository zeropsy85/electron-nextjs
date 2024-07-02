'use client';

import Image from "next/image";

interface PrintTemplateProps {
    imgSrc: string;
}

export default function PrintTemplate({imgSrc : imgSrc} : PrintTemplateProps) {
    return (
        <div id="print-image" className="w-[500px] relative">
            <Image src={imgSrc} className="w-full h-auto" sizes="100%" width={0} height={0} alt="" />
            <Image className="absolute left-1/2 bottom-0 translate-x-[-50%] invisible z-10" src='/solt.svg' width={150} height={150} alt="" />
        </div>
    )   
}
'use client';

import Image from "next/image";

interface PrintTemplateProps {
    imgSrc: string;
}

export default function PrintTemplate({imgSrc} : PrintTemplateProps) {
    return (
        <div id="print-image" className="relative border">
            {
                imgSrc && <Image src={imgSrc} className="w-auto max-h-[50vh]" sizes="100%" width={0} height={0} alt="" />
            }
            <Image className="absolute left-1/2 bottom-0 translate-x-[-50%] invisible z-10" src='/solt.svg' width={150} height={150} alt="" />
        </div>
    )   
}
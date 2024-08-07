'use client';

import { useEffect , useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

import { gsap } from "gsap";
import { dateFormatYYYYMMDDHHMMSS } from '@/util/date';
import Skeleton from "./Skeleton";

import { DataProps } from '@/types/DataProps';

interface ThumbnailListProps {
    viewData : DataProps[];
    skeletonLength : number;
    setTotalDataLength : (value : number) => void;
    handleOpenPopup : (e : DataProps) => void;
}

export default function ThumbnailList({viewData , skeletonLength , handleOpenPopup , setTotalDataLength} : ThumbnailListProps) {
    const thumbnailListRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [thumbnailData , setViewData] = useState<DataProps[]>([]);
    const [newDataList, setNewDataList] = useState(0);

    useEffect(() => {
        if(viewData.length === 0){
            setViewData([]);
        }else{
            setViewData((prev) => {
                const uniqueData = viewData.filter((newItem) => !prev.some((prevItem) => prevItem.id === newItem.id) && newItem.media_url);
                uniqueData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

                setNewDataList(uniqueData.length);
                return [...uniqueData, ...prev];
            });
        }
    }, [viewData]);

    useEffect(()=>{
        setTotalDataLength(thumbnailData.length);
    },[thumbnailData , setTotalDataLength])

    useEffect(()=>{
        if(thumbnailListRefs.current && newDataList > 0){
            const newItems = thumbnailListRefs.current.slice(0, newDataList);
            gsap.fromTo(newItems, { opacity: 0, y: 60 }, { opacity: 1, y:0, duration: 1, stagger: 0.1, delay: 0.5, ease: 'Power3.easeOut' });
        }
    },[newDataList]);

    return (
        <ul id="ul-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16">
            {
                thumbnailData.length === 0 ? Array.from({ length: skeletonLength }).map((_, index) => <li className="flex-grow rounded-lg p-4 border shadow-lg" key={index}><Skeleton /></li>) :
                thumbnailData.map((el:any , idx:number) => {
                    return (
                        <li ref={el => { thumbnailListRefs.current[idx] = el; }} key={el.id} className={`relative flex-grow rounded-lg p-4 shadow-lg border ${newDataList > idx && 'border-red-300'}`}>
                            {
                                newDataList > idx && 
                                <div className="absolute left-[-9px] top-[-12px] text-red-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" fill="#fca5a5" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                    </svg>
                                </div>
                            }
                            <div className="flex gap-1 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                {el.like_count}
                                <Link className="ml-auto" href={el.permalink} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="mb-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                                게시일 : {dateFormatYYYYMMDDHHMMSS(el.timestamp)}
                            </div>
                            <div className="mb-5 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                                ID : {el.id}
                            </div>
                            <div className="border rounded-lg overflow-hidden text-[0px]">
                                <button onClick={(e)=>handleOpenPopup(el)} className="w-full h-[200px] relative">
                                    {el.media_type === 'VIDEO' ? (
                                        <>
                                            <span className="w-full h-full absolute left-0 top-0 bg-black opacity-40"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-12 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                            </svg>
                                            <video className="w-full h-[200px]" src={el.media_url} />
                                        </>
                                    ) : (
                                        <Image src={el.media_url} className="object-cover" fill alt="" priority />
                                    )}
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";

import PrintTemplate from "@/components/PrintTemplate";
import Skeleton from "@/components/Skeleton";

export default function ExampleApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLayerView , setIsLayerView] = useState(false);
    const [popupImage, setPopupImage] = useState(null);
    const [viewData , setViewData] = useState<any>([]);
    const [newDataLength , setNewDataLength] = useState(0);
    const handleDataSearch = async()=>{
        try {
            setIsLoading(true);
            setNewDataLength(0);
            
            const resp = await fetch('http://10.10.10.224:3001/api')
            const json = await resp.json();

            if(viewData.length === 0){
                setViewData(sortDataByTimestamp(json.data));
            }else{
                setViewData((prevData: any[]) => {
                    const newData = json.data.filter((newItem: any) => !prevData.some((prevItem: any) => prevItem.id === newItem.id));
                    setNewDataLength(newData.length);
    
                    return [...sortDataByTimestamp(newData), ...prevData];
                });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    const sortDataByTimestamp = (data: any)=>{
        return data.sort((a: { timestamp: string }, b: { timestamp: string }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }

    const handleShowPopup = (e: any)=>{
        setPopupImage(e);
        setIsLayerView(true);
    }

    const handleLayerClose = ()=>{
        setIsLayerView(false);
    }

    const handlePrint = ()=>{
        if (window.electron) {
            window.electron.print();
        } else {
            // electron 환경에서 출력할 수 있습니다.
            window.print();
        }
    }

    const dateFormatYYYYMMDDHHMMSS = (date : string)=>{
        const baseDay = new Date(date);
        const formatDate = baseDay.getDate() < 10 ? `0${baseDay.getDate()}` : baseDay.getDate();
        const formatMonth = baseDay.getMonth() < 9 ? `0${baseDay.getMonth() + 1}` : baseDay.getMonth() + 1;
        const formatHour = baseDay.getHours() < 10 ? `0${baseDay.getHours()}` : baseDay.getHours();
        const formatMinute = baseDay.getMinutes() < 10 ? `0${baseDay.getMinutes()}` : baseDay.getMinutes();
        const formatSecond = baseDay.getSeconds() < 10 ? `0${baseDay.getSeconds()}` : baseDay.getSeconds();
        const formattedDate = [baseDay.getFullYear(), formatMonth, formatDate].join('-') + ' (' + [formatHour, formatMinute, formatSecond].join(':') + ')';
        return formattedDate;
    }

    useEffect(()=>{
        if (window.electron) {
            window.electron.on('print-completed', handleLayerClose);
            window.electron.on('print-failed', handleLayerClose);
        }
    },[])

    return (
        <main className="p-10 pt-[110px]">
            <div className="flex gap-4">
                <button className="flex gap-1 border border-black rounded-md p-3 hover:bg-black hover:text-white ease-out duration-300 disabled:cursor-not-allowed" onClick={handleDataSearch} disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                    </svg>
                    <span>Data 불러오기</span>
                </button>
                {
                    viewData.length !== 0 && 
                    <div className="border border-black rounded-md p-3 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                        {viewData.length} 개
                    </div>
                }
                {
                    newDataLength > 0 &&
                    <div className="flex items-center text-red-400">
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
                    <span className="mt-[-3px]">samsung</span>
                </div>
            </div>
            
            {
                isLayerView && (
                    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70 z-10" onClick={handleLayerClose}>
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
            {
                <ul id="ul-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                    {
                        viewData.length === 0 ? Array.from({ length: 25 }).map((_, index) => <li className="flex-grow rounded-lg p-4 border shadow-lg" key={index}><Skeleton /></li>) :
                        viewData?.map((el:any , idx:number) => {
                            return (
                                <li key={idx} className={`relative flex-grow rounded-lg p-4 shadow-lg border ${newDataLength > idx && 'border-red-300'}`}>
                                    {
                                        newDataLength > idx && 
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
                                        {el.media_type === 'VIDEO' ? (
                                            el.media_url ? <video className="w-full h-[200px]" src={el.media_url} controls /> : <div className="w-full h-[200px] flex justify-center items-center text-sm">media_url 없음</div>
                                        ) : (
                                            <button onClick={(e)=>{handleShowPopup(el.media_url)}} className="w-full h-[200px] relative hover:scale-105 transform transition ease-out duration-300"><Image src={el.media_url} className="object-cover" fill alt="" /></button>
                                        )}
                                    </div>
                                </li>
                            )
                        })
                        
                    }
                </ul>
            }
            
        </main>
    );
}
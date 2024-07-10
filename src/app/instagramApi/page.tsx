'use client';

import React,{ useCallback, useEffect, useState } from "react";

import InstagramNav from "@/components/InstagramNav";
import CustomKeyboard from "@/components/CustomKeyboard";
import Popup from "@/components/Popup";
import ThumbnailList from "@/components/ThumbnailList";

const MemoInstagramNav = React.memo(InstagramNav);
const MemoCustomKeyboard = React.memo(CustomKeyboard);
const MemoPopup = React.memo(Popup);
const MemoThumbnailList = React.memo(ThumbnailList);

export default function ExampleApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLayerView , setIsLayerView] = useState(false);
    const [isKeyboardView , setIsKeyboardView] = useState(false);
    const [newDataLength , setNewDataLength] = useState(0);
    const [keyboardInput , setKeyboardInput] = useState('');
    const [popupInfo, setPopupInfo] = useState<any>([]);
    const [viewData , setViewData] = useState<any>([]);

    const sortDataByTimestamp = useCallback((data: any)=>{
        return data?.sort((a: { timestamp: string }, b: { timestamp: string }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    },[]);

    const addNewData = useCallback((data: any) => {
        const newData = data?.filter((newItem: any) => !viewData.some((viewItem:any) => viewItem.id === newItem.id));
        setNewDataLength(newData?.length);
    
        if(newData){
            setViewData((prevData:any) => [...sortDataByTimestamp(newData), ...prevData]);
        }
    }, [viewData , sortDataByTimestamp]);

    const fetchData = useCallback(async (callback: (data: any[]) => void, hashtag?: string) => {
        try {
            setIsLoading(true);
            setNewDataLength(0);
    
            const url = hashtag ? `http://10.10.10.119:3001/api?hashtag=${hashtag}` : 'http://10.10.10.119:3001/api';
            const resp = await fetch(url);
            const json = await resp.json();
    
            if (!resp.ok) {
                throw new Error(json.error);
            }
    
            callback(json.data);
        } catch (err) {
            const errorMessage = (err as Error).message;
            let errorObject = null;

            try {
                errorObject = JSON.parse(errorMessage);
            } catch (parseErr) {
                console.log('Error parsing JSON:', parseErr);
            }

            if (!errorObject || !errorObject.error_user_title) {
                alert('에러가 발생하였습니다. \n잠시 후 다시 시도해주세요.');
            } else {
                alert(errorObject.error_user_title);
            }

            setKeyboardInput('');
        } finally {
            setIsLoading(false);
        }
    },[setIsLoading , setNewDataLength , setKeyboardInput]);
    
    const handleDataSearch = useCallback(async () => {
        fetchData(addNewData);
    },[fetchData , addNewData]);

    const handleDataWithHashtag = useCallback(async(hashtag: string)=>{
        fetchData(addNewData, hashtag);
    },[fetchData , addNewData]);

    useEffect(() => {
        fetchData(data => setViewData(sortDataByTimestamp(data)));
    }, [fetchData, sortDataByTimestamp]);

    const handleShowPopup = useCallback((e: any)=>{
        setPopupInfo(e);
        setIsLayerView(true);
    },[]);

    const handleLayerClose = useCallback(()=>{
        setIsLayerView(false);
    },[setIsLayerView]);

    useEffect(()=>{
        if (window.electron) {
            window.electron.on('print-completed', handleLayerClose);
            window.electron.on('print-failed', handleLayerClose);
        }
    },[handleLayerClose]);

    return (
        <main className="p-10 pt-[110px]">
            <MemoInstagramNav viewData={viewData} newDataLength={newDataLength} isLoading={isLoading} keyboardInput={keyboardInput} setIsKeyboardView={setIsKeyboardView} handleDataSearch={handleDataSearch} />
            <MemoCustomKeyboard isKeyboardView={isKeyboardView} setKeyboardInput={setKeyboardInput} setIsKeyboardView={setIsKeyboardView} handleDataWithHashtag={handleDataWithHashtag} />
            <MemoPopup popupInfo={popupInfo} isLayerView={isLayerView} handleLayerClose={handleLayerClose} />
            <MemoThumbnailList data={viewData} newDataLength={newDataLength} handleShowPopup={handleShowPopup} skeletonLength={25} />
        </main>
    );
}
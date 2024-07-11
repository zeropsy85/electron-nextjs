'use client';

import React,{ useCallback, useEffect, useState } from "react";

import InstagramNav from "@/components/InstagramNav";
import CustomKeyboard from "@/components/CustomKeyboard";
import Popup from "@/components/Popup";
import PopupAlert from "@/components/PopupAlert";
import ThumbnailList from "@/components/ThumbnailList";

import { DataProps } from "@/types/DataProps";

const MemoInstagramNav = React.memo(InstagramNav);
const MemoCustomKeyboard = React.memo(CustomKeyboard);
const MemoPopup = React.memo(Popup);
const MemoPopupAlert = React.memo(PopupAlert);
const MemoThumbnailList = React.memo(ThumbnailList);

const apiAddress = 'http://10.10.10.117:3001/api';

export default function ExampleApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [isKeyboardView , setIsKeyboardView] = useState(false);
    const [newDataLength , setNewDataLength] = useState(0);
    const [keyboardInput , setKeyboardInput] = useState('');
    const [popupThumbnailInfo, setPopupThumbnailInfo] = useState({isLayerView : false, popupInfo : {}});
    
    const [viewData , setViewData] = useState<DataProps[]>([]);
    const [customAlert , setCustomAlert] = useState({alertText : ''});

    const sortDataByTimestamp = useCallback((data: DataProps[])=>{
        return data.sort((a: { timestamp: string }, b: { timestamp: string }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    },[]);

    const addNewData = useCallback((data: DataProps[]) => {
        const newData = data.filter((newItem: DataProps) => !viewData.some((viewItem:DataProps) => viewItem.id === newItem.id));

        if(newData){
            const uniqueData = newData.filter((newItem: DataProps) => !viewData.some((viewItem:DataProps) => viewItem.id === newItem.id));
            setViewData((prevData:DataProps[]) => [...sortDataByTimestamp(uniqueData), ...prevData]);
            setNewDataLength(uniqueData.length);
        }
    }, [viewData , sortDataByTimestamp]);

    const fetchData = useCallback(async (callback: (data: any[]) => void, hashtag?: string) => {
        try {
            setIsLoading(true);
            setNewDataLength(0);
    
            const url = hashtag ? `${apiAddress}?hashtag=${hashtag}` : apiAddress;
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
                setCustomAlert({alertText: JSON.stringify(parseErr)});
            }

            if (!errorObject || !errorObject.error_user_title) {
                setCustomAlert({alertText: '에러가 발생하였습니다. 잠시 후 다시 시도해주세요.'});
            } else {
                setCustomAlert({alertText: errorObject.error_user_title});
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

    const handleShowPopup = useCallback((data: DataProps)=>{
        setPopupThumbnailInfo({isLayerView : true, popupInfo : data});
    },[]);

    return (
        <main className="p-10 pt-[110px]">
            <MemoPopupAlert customAlert={customAlert} />
            <MemoInstagramNav viewData={viewData} newDataLength={newDataLength} isLoading={isLoading} keyboardInput={keyboardInput} setIsKeyboardView={setIsKeyboardView} handleDataSearch={handleDataSearch} />
            <MemoCustomKeyboard isKeyboardView={isKeyboardView} setKeyboardInput={setKeyboardInput} setIsKeyboardView={setIsKeyboardView} handleDataWithHashtag={handleDataWithHashtag} setCustomAlert={setCustomAlert} />
            <MemoPopup popupThumbnailInfo={popupThumbnailInfo} setPopupThumbnailInfo={setPopupThumbnailInfo} setCustomAlert={setCustomAlert} />
            <MemoThumbnailList data={viewData} newDataLength={newDataLength} handleShowPopup={handleShowPopup} skeletonLength={25} />
        </main>
    );
}
'use client';

import React,{ useCallback, useEffect, useState } from "react";

import { InstagramApiContext } from "@/context/InstagramApiContext";
import InstagramNav from "@/components/InstagramNav";
import CustomKeyboard from "@/components/CustomKeyboard";
import Popup from "@/components/Popup";
import PopupAlert from "@/components/PopupAlert";
import ThumbnailList from "@/components/ThumbnailList";

import { DataProps } from "@/types/DataProps";

const apiAddress = 'http://10.10.10.117:3001/api';

export default function InstagramApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [isKeyboardView , setIsKeyboardView] = useState(false);
    const [newDataLength , setNewDataLength] = useState(0);
    const [keyboardInput , setKeyboardInput] = useState('');
    const [popupThumbnailInfo, setPopupThumbnailInfo] = useState({isLayerView : false, popupInfo : {media_type : '', media_url : ''}});
    
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
    
    useEffect(() => {
        fetchData(data => setViewData(sortDataByTimestamp(data)));
    }, [fetchData, sortDataByTimestamp]);
    
    return (
        <main className="p-10 pt-[110px]">
            <InstagramApiContext.Provider value={{fetchData , viewData , addNewData, isLoading , newDataLength , keyboardInput , setKeyboardInput , isKeyboardView , setIsKeyboardView , popupThumbnailInfo , setPopupThumbnailInfo , customAlert, setCustomAlert}}>
                <PopupAlert />
                <InstagramNav />
                <CustomKeyboard />
                <Popup />
                <ThumbnailList skeletonLength={25} />
            </InstagramApiContext.Provider>
        </main>
    );
}
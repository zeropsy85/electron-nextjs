'use client';

import React,{ useCallback, useEffect, useState } from "react";

import InstagramNav from "@/components/InstagramNav";
import CustomKeyboard from "@/components/CustomKeyboard";
import AlertLayout from "@/components/AlertLayout";
import ThumbnailList from "@/components/ThumbnailList";
import Popup from "@/components/Popup";

import { DataProps } from "@/types/DataProps";
import { useThumbnailPopup } from '@/hooks/useThumbNailPopup';

import { getFetchData } from "./actions";
import ThumbnailLayout from "@/components/ThumbnailLayout";

const MemoInstagramNav = React.memo(InstagramNav);
const MemoCustomKeyboard = React.memo(CustomKeyboard);
const MemoAlertLayout = React.memo(AlertLayout);
const MemoThumbnailList = React.memo(ThumbnailList);

const defaultHashTag = 'samsung';

export default function InstagramApi() {
    const { isPopupOpen , popupType, openPopup , closePopup } = useThumbnailPopup();

    const [isLoading, setIsLoading] = useState(false);
    const [isKeyboardView , setIsKeyboardView] = useState(false);
    const [newDataLength , setNewDataLength] = useState(0);
    const [keyboardInput , setKeyboardInput] = useState('');
    const [viewData , setViewData] = useState<DataProps[]>([]);
    const [selectedData , setSelectedData] = useState<DataProps[]>([]);
    const [customAlert , setCustomAlert] = useState('');

    const sortDataByTimestamp = useCallback((data: DataProps[])=>{
        return data.sort((a: { timestamp: string }, b: { timestamp: string }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    },[]);

    const addNewData = useCallback((data: DataProps[]) => {
        const newData = data.filter((newItem: DataProps) => !viewData.some((viewItem:DataProps) => viewItem.id === newItem.id));

        setViewData((prevData:DataProps[]) => [...sortDataByTimestamp(newData), ...prevData]);
        setNewDataLength(newData.length);
    }, [viewData , sortDataByTimestamp]);

    const handleOpenPopup = useCallback((data: DataProps) => {
        openPopup();
        setSelectedData([data]);
    },[openPopup]);

    const handleOpenPopupWithAlert = useCallback((text: string) => {
        openPopup('alert');
        setCustomAlert(text);
    },[openPopup]);

    useEffect(()=>{
        if(!navigator.onLine){
            handleOpenPopupWithAlert('인터넷 연결을 확인하세요.');
        }
    },[handleOpenPopupWithAlert]);

    const handleDataSearch = useCallback(async (hashtag : string) => {
        try {
            setIsLoading(true);
            setNewDataLength(0);

            const response = await getFetchData({ hashtag : hashtag });

            if(response.length === 0){
                handleOpenPopupWithAlert(`"${hashtag}" 검색 결과가 없습니다.`);
                setViewData([]);
            }else{
                // if(hashtag === keyboardInput){
                //     addNewData(response);
                // }else{
                //     setViewData(sortDataByTimestamp(response));
                // }

                setViewData(sortDataByTimestamp(response));
            }
            
        } catch (err) {
            const errorMessage = (err as Error).message;
            const errorObject = JSON.parse(errorMessage);
            console.log(errorObject.error_user_title);

            handleOpenPopupWithAlert(errorObject.error_user_title);
        } finally {
            setIsLoading(false);
        }
    },[sortDataByTimestamp,handleOpenPopupWithAlert]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setIsLoading(true);
    //             setNewDataLength(0);

    //             const response = await getFetchData({ hashtag: defaultHashTag });
    //             setViewData(sortDataByTimestamp(response));

    //         } catch (err) {
    //             const errorMessage = (err as Error).message;
    //             const errorObject = JSON.parse(errorMessage);
    //             console.log(errorObject.error_user_title);

    //             handleOpenPopupWithAlert(errorObject.error_user_title);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    
    //     fetchData();
    // }, [sortDataByTimestamp , handleOpenPopupWithAlert]);

    useEffect(()=>{
        if(keyboardInput !== ''){
            handleDataSearch(keyboardInput);
        }
    },[keyboardInput , handleDataSearch]);

    useEffect(()=>{
        setKeyboardInput(defaultHashTag);
    },[]);

    return (
        <main className="p-10 pt-[110px]">
            <MemoInstagramNav 
                viewData={viewData}
                newDataLength={newDataLength}
                isLoading={isLoading}
                keyboardInput={keyboardInput}
                setIsKeyboardView={setIsKeyboardView}
                handleDataSearch={handleDataSearch}
            />
            <MemoCustomKeyboard 
                isKeyboardView={isKeyboardView} 
                setKeyboardInput={setKeyboardInput} 
                setIsKeyboardView={setIsKeyboardView} 
                handleOpenPopupWithAlert={handleOpenPopupWithAlert}
            />
            {
                keyboardInput !== '' && viewData.length !== 0 ?
                    <MemoThumbnailList 
                    data={viewData} 
                    newDataLength={newDataLength} 
                    skeletonLength={25}
                    handleOpenPopup={handleOpenPopup}
                /> : <div className="border border-black rounded-md p-10 mt-16 flex">다른 해시 태그를 검색해주세요.</div>
            }
            {isPopupOpen && 
                <Popup closePopup={closePopup}>
                    {
                        popupType === 'alert' ? <MemoAlertLayout customAlert={customAlert} /> : <ThumbnailLayout popupInfo={selectedData} />
                    }
                </Popup>}
        </main>
    );
}
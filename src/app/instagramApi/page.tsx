'use client';

import React,{ useCallback, useEffect, useState } from "react";

import InstagramNav from "@/components/InstagramNav";
import CustomKeyboard from "@/components/CustomKeyboard";
import AlertLayout from "@/components/AlertLayout";
import ThumbnailList from "@/components/ThumbnailList";
import Popup from "@/components/Popup";

import { DataProps } from "@/types/DataProps";
import { useThumbnailPopup } from '@/hooks/useThumbNailPopup';

import ThumbnailLayout from "@/components/ThumbnailLayout";

const MemoInstagramNav = React.memo(InstagramNav);
const MemoCustomKeyboard = React.memo(CustomKeyboard);
const MemoAlertLayout = React.memo(AlertLayout);
const MemoThumbnailList = React.memo(ThumbnailList);

const FACEBOOK_API = 'https://graph.facebook.com/v20.0';
const INSTAGRAM_BUSINESS_ID = '17841400119039742';
const ACCESS_TOKEN = 'EAAQoDAIkG7oBO4Ox1coua59HuR8ZBqD706sZAtMc13DZBYSTLRmewZAgZC9QYJxfzGameOh7CvsoqrsxmRuGRhXUZAMq9DmBqjwHOkgcq7hxZBMErVAIVch5cDuZBBlpPkVXP86slT0IkBGFveT0CcN5PqPWAjZASisI9RmPOZA4CPFIZC7xYqd7stv8JMi';
const defaultHashTag = 'samsung';

export default function InstagramApi() {
    const { isPopupOpen , popupType, openPopup , closePopup } = useThumbnailPopup();
    const [isLoading, setIsLoading] = useState(false);
    const [isKeyboardView , setIsKeyboardView] = useState(false);
    const [keyboardInput , setKeyboardInput] = useState('');
    const [viewData , setViewData] = useState<DataProps[]>([]);
    const [popupInfo , setPopupInfo] = useState<DataProps[]>([]);
    const [totalDataLength , setTotalDataLength] = useState(0);
    const [customAlert , setCustomAlert] = useState('');

    const handleOpenPopup = useCallback((data: DataProps) => {
        openPopup();
        setPopupInfo([data]);
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

            const hashTagResponse = await fetch(`${FACEBOOK_API}/ig_hashtag_search?user_id=${INSTAGRAM_BUSINESS_ID}&access_token=${ACCESS_TOKEN}&q=${hashtag}`);
            const searchHashTagId = await hashTagResponse.json();
        
            if (searchHashTagId.error) {
                throw new Error(JSON.stringify(searchHashTagId.error));
            }
        
            const hashTagId = searchHashTagId.data[0].id;
            const resp = await fetch(`${FACEBOOK_API}/${hashTagId}/recent_media?user_id=${INSTAGRAM_BUSINESS_ID}&fields=id,media_type,like_count,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`);
            const json = await resp.json();

            if(json.data.length === 0){
                handleOpenPopupWithAlert(`"${hashtag}" 검색 결과가 없습니다.`);
            }

            setViewData(json.data);
        } catch (err) {
            const errorMessage = (err as Error).message;
            const errorObject = JSON.parse(errorMessage);
            console.log(errorObject.error_user_title);

            handleOpenPopupWithAlert(errorObject.error_user_title);
        } finally {
            setIsLoading(false);
        }
    },[handleOpenPopupWithAlert]);

    useEffect(()=>{
        if(keyboardInput !== ''){
            setViewData([]);
            handleDataSearch(keyboardInput);
        }
    },[keyboardInput , handleDataSearch]);

    useEffect(()=>{
        setKeyboardInput(defaultHashTag);
    },[]);

    return (
        <main className="p-10 pt-[110px]">
            <MemoInstagramNav 
                totalDataLength={totalDataLength}
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
            <MemoThumbnailList 
                viewData={viewData} 
                skeletonLength={25}
                handleOpenPopup={handleOpenPopup}
                setTotalDataLength={setTotalDataLength}
            />
            {isPopupOpen && 
                <Popup closePopup={closePopup}>
                    {
                        popupType === 'alert' ? <MemoAlertLayout customAlert={customAlert} /> : <ThumbnailLayout popupInfo={popupInfo} />
                    }
                </Popup>}
        </main>
    );
}
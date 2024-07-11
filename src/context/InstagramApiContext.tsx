import { createContext, Dispatch, SetStateAction   } from "react";

import { DataProps } from "@/types/DataProps";

interface InstagramApiContextProps {
    isLoading: boolean;
    newDataLength: number;
    viewData: DataProps[];
    keyboardInput : string;
    setKeyboardInput : Dispatch<SetStateAction<string>>;
    isKeyboardView : boolean;
    setIsKeyboardView : Dispatch<SetStateAction<boolean>>;
    popupThumbnailInfo : { isLayerView: boolean; popupInfo: {media_type : string, media_url : string} };
    setPopupThumbnailInfo : Dispatch<SetStateAction<{ isLayerView: boolean; popupInfo: {media_type : string, media_url : string} }>>
    fetchData : (callback: (data: any[]) => void, hashtag?: string) => Promise<void>;
    addNewData : (data: any[]) => void;
    customAlert : { alertText: string; };
    setCustomAlert : (value: { alertText: string; }) => void;
}

export const InstagramApiContext = createContext<InstagramApiContextProps>({
    isLoading : false,
    newDataLength : 0,
    viewData : [],
    keyboardInput : '',
    setKeyboardInput : () => {},
    isKeyboardView : false,
    setIsKeyboardView : () => {},
    popupThumbnailInfo : {isLayerView : false, popupInfo : {media_type : '', media_url : ''}},
    setPopupThumbnailInfo : () => {},
    fetchData : async () => {},
    addNewData : () => {},
    customAlert : {alertText : ''},
    setCustomAlert : () => {}
});
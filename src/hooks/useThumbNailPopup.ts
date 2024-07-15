import { useCallback, useState } from "react";

export const useThumbnailPopup = () => {
    const [isPopupOpen , setIsPopupOpen] = useState(false);
    const [popupType , setPopupType] = useState<'alert' | 'thumbnail'>('alert');

    const openPopup = useCallback((type : 'alert' | 'thumbnail') => {
        setPopupType(type);
        setIsPopupOpen(true);
    },[]);

    const closePopup = useCallback(() => {
        setIsPopupOpen(false);
    },[]);

    return {
        isPopupOpen,
        openPopup,
        closePopup,
        popupType
    }
}
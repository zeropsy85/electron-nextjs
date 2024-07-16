import { useCallback, useState } from "react";

export const useThumbnailPopup = () => {
    const [isPopupOpen , setIsPopupOpen] = useState(false);
    const [popupType , setPopupType] = useState('');

    const openPopup = useCallback((type? : 'alert') => {
        type === 'alert' ? setPopupType(type) : setPopupType('');
        setIsPopupOpen(true);
    },[]);

    const closePopup = useCallback(() => {
        setIsPopupOpen(false);
    },[]);

    return {
        isPopupOpen,
        popupType,
        openPopup,
        closePopup
    }
}
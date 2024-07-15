'use client';

import { useEffect, useRef, useState } from 'react';

import Keyboard from 'react-simple-keyboard';
import Hangul from "hangul-js";
import { gsap } from "gsap";

import 'react-simple-keyboard/build/css/index.css';

interface CustomKeyboardProps {
    setKeyboardInput: (value: string) => void;
    isKeyboardView: boolean;
    setIsKeyboardView: (value: boolean) => void
    handleOpenPopupWithAlert: (value: string) => void;
}

export default function CustomKeyboard({setKeyboardInput , isKeyboardView , setIsKeyboardView  , handleOpenPopupWithAlert}: CustomKeyboardProps) {
    const layerRef = useRef<HTMLDivElement>(null);
    const keyboardRef = useRef<HTMLDivElement>(null);
    const [inputPreview , setInputPreview] = useState('');
    const [layout, setLayout] = useState("korean");
    const [isShifted, setIsShifted] = useState(false);

    const onKeyPress = (button: string) => {
        switch (button) {
            case "{language}":
                setIsShifted(false);
                setLayout(layout.startsWith("eng") ? "korean" : "eng");
                break;
            case "{bksp}":
                const disassembled = Hangul.disassemble(inputPreview);
                disassembled.pop();
                setInputPreview(Hangul.assemble(disassembled));
                break;
            case "{shift}":
                if (layout === "special1" || layout === "special2") {
                    setLayout(isShifted ? "eng" : "korean");
                }
                setIsShifted(!isShifted);
                break;
            case "{special}":
                setIsShifted(false);
                const layouts = [layout.startsWith("eng") ? "eng" : "korean", "special1", "special2"];
                const currentIndex = layouts.indexOf(layout);
                const nextIndex = (currentIndex + 1) % layouts.length;
                setLayout(layouts[nextIndex]);
                break;
            case "{empty}":
                return;
            case "{enter}":
                if(inputPreview.length === 0){
                    handleOpenPopupWithAlert('해시태그를 입력해주세요.');
                }else{
                    setKeyboardInput(inputPreview);
                    setIsKeyboardView(false);
                }
                break;
            default : setInputPreview((input) => Hangul.assemble(Hangul.disassemble(input +button)));
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'Power3.easeOut' } });

        isKeyboardView ? 
            tl.to(layerRef.current, { autoAlpha: 1 }).to(keyboardRef.current, { autoAlpha: 1, y: 0, delay: -0.3 }) : 
            tl.to(keyboardRef.current, { autoAlpha: 0, y: 100 }).to(layerRef.current, { autoAlpha: 0 , delay: -0.3});
    
    }, [isKeyboardView]);

    return (
        <div ref={layerRef} className="fixed left-0 bottom-0 w-full h-full z-20 px-10 bg-black bg-opacity-70 opacity-0 flex items-end invisible" onClick={() => setIsKeyboardView(false)}>
            <div ref={keyboardRef} className="w-full flex flex-col invisible" onClick={(e) => e.stopPropagation()}>
                <div className='h-14 border rounded-lg py-4 px-16 mb-3 bg-white flex items-center justify-center relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                    </svg>
                    <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">{inputPreview}</div>
                    <div className="w-[2px] h-full blinking-cursor"></div>
                    <button onClick={() => setIsKeyboardView(false)} className="w-10 h-10 border border-black border-opacity-50 rounded-lg keyboard-down absolute right-2 top-1/2 -translate-y-1/2"></button>
                </div>
                <div className="w-full mb-3">
                    <Keyboard
                        onKeyPress={onKeyPress}
                        layout={{
                            eng: [
                                "1 2 3 4 5 6 7 8 9 0",
                                "q w e r t y u i o p",
                                "a s d f g h j k l",
                                "{shift} z x c v b n m {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ],
                            eng_shift: [
                                "1 2 3 4 5 6 7 8 9 0",
                                "Q W E R T Y U I O P",
                                "A S D F G H J K L",
                                "{shift} Z X C V B N M {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ],
                            korean : [
                                "1 2 3 4 5 6 7 8 9 0",
                                "ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ",
                                "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
                                "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ],
                            korean_shift : [
                                "1 2 3 4 5 6 7 8 9 0",
                                "ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ",
                                "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
                                "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ],
                            special1 : [
                                "1 2 3 4 5 6 7 8 9 0",
                                "+ × ÷ = / _ < > [ ]",
                                "! @ # $ % ^ & * ( )",
                                "{shift} - ' \" : ; , ? {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ],
                            special2 : [
                                "1 2 3 4 5 6 7 8 9 0",
                                "` ~ \\ | { } € £ ¥ $",
                                "° • ○ ● □ ■ ♤ ♡ ◇ ♧",
                                "{shift} ☆ ▪︎ ¤ 《 》 ¡ ¿ {bksp}",
                                "{special} {language} , {empty} . {enter}"
                            ]
                        }}
                        layoutName={isShifted ? `${layout}_shift` : layout}
                        display={{
                            "{special}": layout === "special1" ? "1/2" : layout === "special2" ? "2/2" : "!#1",
                        }}
                        buttonTheme={[
                            {
                                class: "active-button", 
                                buttons: "{bksp} {enter} {lock} {language} {special} {shift}"
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
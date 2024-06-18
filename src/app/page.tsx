'use client';

import { useState } from "react";
const radioInputOptions = [
  { value: 'video_a', label: '영상 1번' },
  { value: 'video_b', label: '영상 2번' },
  { value: 'video_c', label: '영상 3번' },
];

export default function Home() {
  const [isLayerView , setIsLayerView] = useState(false);
  const [isVideoView, setIsVideoView] = useState(false);
  const [selectRadio, setSelectRadio] = useState("");
  const [tempRadio, setTempRadio] = useState("");

  const handleLayer = () => {
    setIsLayerView(true);
  };

  const handleLayerClose = () => {
    setIsLayerView(false);
    setTempRadio("");
  };

  const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempRadio(e.target.value);
  };

  const handleVideoSelect = () => {
    if (!tempRadio){
      alert("영상을 선택 하세요!");
      return;
    }
    setIsVideoView(true);
    setSelectRadio(tempRadio);
    handleLayerClose();
  };

  return (
    <main className="p-10">
      {
        isLayerView && 
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70 z-10" onClick={handleLayerClose}>
          <div className="w-[500px] h-[250px] border rounded-lg bg-white relative p-4 flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleLayerClose} className="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <p className="text-2xl text-center mb-4">Video Select</p>
            <div className="flex flex-row gap-4 items-center justify-center mb-4">
              {
                radioInputOptions.map((option)=>{
                  return (
                    <div key={option.value} className="flex gap-1">
                      <input
                          id={option.value}
                          type="radio"
                          value={option.value}
                          name="Video"
                          onChange={handleRadioInputChange}
                        />
                        <label htmlFor={option.value} className="h-10 flex items-center mr-3 cursor-pointer">
                        {option.label}
                      </label>
                    </div>
                    
                  )
                })
              }
            </div>
            <div className="flex justify-center">
              <button className="flex gap-1 border border-black rounded-md p-3 hover:bg-black hover:text-white ease-out duration-300" onClick={handleVideoSelect}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>선택 완료</span>
              </button>
            </div>
          </div>
        </div>
      }
      <div className="flex justify-center items-center mb-20">
        <button className="flex gap-1 border border-black rounded-md p-3 hover:bg-black hover:text-white ease-out duration-300" onClick={handleLayer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span>레이어 팝업 열기</span>
        </button>
      </div>
      <div className="w-full relative">
        <p className="flex gap-1 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>
          <span>선택된 영상 : {selectRadio ? `${selectRadio}.mp4` : '없음'}</span>
        </p>
        <div className="w-full h-full rounded-2xl overflow-hidden border">
          {
            isVideoView ? <video className="w-full h-full object-cover" src={`./video/${selectRadio}.mp4`} controls></video> : <div className="py-[150px] flex justify-center items-center">선택 된 영상이 없습니다.</div>
          }
        </div>
      </div>
    </main>
  );
}

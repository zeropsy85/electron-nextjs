'use client';

export default function Skeleton() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
            </div>
            <div className="w-full mt-5">
                <ul className="space-y-3">
                    <li className="w-[60%] h-4 bg-gray-200 rounded-full"></li>
                    <li className="w-[80%] h-4 bg-gray-200 rounded-full"></li>
                </ul>
            </div>
            <div className="w-full h-[200px] mt-5 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
        </div>
    )
}
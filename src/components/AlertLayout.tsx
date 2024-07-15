'use client';

interface AlertLayoutProps {
    customAlert : string;
}

export default function AlertLayout({customAlert} : AlertLayoutProps) {
    return (
        <>  
            <div className="mb-4 m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div>
                <p className="text-center">{customAlert}</p>
            </div>
        </>
    )
}
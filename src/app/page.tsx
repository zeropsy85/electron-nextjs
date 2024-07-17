'use client';

export default function Home() {
    return (
        <main className="w-full h-[100vh]">
            <div className="w-full h-full">
                <video poster='/poster_main_video.jpg' className="w-full h-full object-cover" src="./main_video.mp4" autoPlay muted loop />
            </div>
        </main>
    );
}

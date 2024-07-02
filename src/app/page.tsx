'use client';

export default function Home() {
    return (
        <main className="w-full h-[100vh]">
            <div className="w-full h-full">
                <video poster='/poster_main_video.jpg' className="w-full h-full object-cover" src="https://player.vimeo.com/progressive_redirect/playback/513714718/rendition/1080p/file.mp4?loc=external&signature=d9fca7584576637b3fda9fd51ac9bd1ad8cd1436dc503494590b66f61c9d92dd" autoPlay muted loop />
            </div>
        </main>
    );
}

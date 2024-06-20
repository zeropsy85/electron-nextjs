'use client';

export default function About() {
    return (
        <main className="p-10">
            <h1>About Page</h1>
            <p className="mt-10">윈도우에서 부팅시 앱 자동 실행</p>
            <p className="mt-5">
                1. 윈도우키 + R키를 눌러 ‘실행’ 창을 엽니다.<br />
                2. ‘실행’ 창에 shell:startup을 입력하고 ‘확인’ 버튼을 누릅니다.<br />
                3. 그러면 ‘시작 프로그램’ 폴더가 열립니다.<br />
                4. 이 폴더에 자동으로 실행하고 싶은 프로그램의 바로가기를 복사해서 붙여넣습니다.
            </p>
        </main>
    ) 
}
'use client';

import Link from "next/link";
import { useEffect } from "react";

import '../mbti.css';
import '../mbti.js';
import { MBTI_RESULT } from '../mbti.js';

export default function Result() {
    useEffect(()=>{
        MBTI_RESULT().init();
    },[])

    return (
        <div className="result-page">
            <div className="result-main-container main-inner">
                <div className="result-main-container-inner">
                    <div className="result-wrap"></div>
                    <div className="hr-line"></div>
                    <div className="btn-container">
                        <div className="link-container">
                            <div className="link-re-test">
                                <Link href="/mbti">테스트 다시하기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hr-line"></div>
                </div>
            </div>
        </div>
    )
}
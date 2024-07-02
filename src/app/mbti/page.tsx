'use client';

import Image from "next/image";
import { useEffect } from "react";

import './mbti.css';
import './mbti.js';
import { MBTI_MAIN } from './mbti.js';


export default function Mbti() {
    useEffect(() => {
        MBTI_MAIN().init();
    }, []);

    return (
        <div className="mbti-container">
            <nav>
                <div className="question-gage-container">
                    <div className="question-gage"><span className="question-gage-bar"></span></div>
                    <div className="flex gap-2 text-xs text-white justify-center mt-2 opacity-50">
                        <div className="question-current"></div> /  <div className="question-total"></div>
                    </div>
                </div>
            </nav>
            <div className="main-container main-inner">
                <div className="main-container-inner">
                    <div className="step-main step-container">
                        <div className="section-inner">
                            <span className="ico-flower">
                                <Image src="/mbti/ico-flower.png" alt="" width={25} height={25} className="image-ratio-flower" />
                            </span>
                            <div className="main-motion-container">
                                <h3>당신은<br /><span>어떤 꽃</span>인가요?</h3>
                                <p>꽃으로 알아보는 나의 성향 테스트</p>
                                <button className="btn-start">시작하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="step-intro step-container">
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-speechbubble.png" alt="" width={41} height={32} className="image-ratio-speechbubble" />
                                </span>
                                <div className="question">어디로 떠나고 싶으신가요?</div>
                            </div>
                            <div className="answer-container">
                                <button className="answer" data-num="q0" data-type="brand" data-answer="0">맑고 푸른 제주도</button>
                                <button className="answer" data-num="q0" data-type="brand" data-answer="1">한적하고 고요한 몰디브</button>
                                <button className="answer" data-num="q0" data-type="brand" data-answer="2">따뜻한 파리의 밤</button>
                                <button className="answer" data-num="q0" data-type="brand" data-answer="3">다채로운 뉴욕</button>
                            </div>
                        </div>
                    </div>
                    <div className="step-question step-container">
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-speechbubble.png" alt="" width={29} height={24} className="image-ratio-speechbubble" />
                                </span>
                                <div className="question">비행기 옆자리에<br />마음에 드는 이상형이 있다.<br />어쩌다 대화를 시작한 나는</div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q1" data-type="3" data-answer="F">풍부한 공감과 리액션을 해준다</button> <button className="answer" data-num="q1" data-type="3" data-answer="T">이것저것 궁금한 것을 질문한다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-map.png" alt="" width={28} height={31} className="image-ratio-map" />
                                </span>
                                <div className="question">
                                    갑작스러운 여행으로<br />
                                    혼자 오게 된 낯선 장소,<br />
                                    이런 곳에서 나는
                                </div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q2" data-type="1" data-answer="I">혼자 조용히 여행을 즐긴다</button> <button className="answer" data-num="q2" data-type="1" data-answer="E">여행 중 만난 사람들과 쉽게 친해진다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-present.png" alt="" width={30} height={28} className="image-ratio-present" />
                                </span>
                                <div className="question">여행지에서 친구가<br />평소 필요로 했던<br />선물이 생각날 때 나는</div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q3" data-type="3" data-answer="F">난 역시 섬세한 사람이야</button> <button className="answer" data-num="q3" data-type="3" data-answer="T">나는 역시 기억력이 좋아</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-beer.png" alt="" width={27} height={32} className="image-ratio-beer" />
                                </span>
                                <div className="question">
                                    돌아온 숙소,<br />
                                    게스트 하우스 사람들과 <br />
                                    맥주를 마시러 온 나는
                                </div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q4" data-type="1" data-answer="I">묵묵히 사람들의 이야기를 듣는다</button> <button className="answer" data-num="q4" data-type="1" data-answer="E">대화를 주도하며 분위기를 이끈다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-band.png" alt="" width={38} height={30} className="image-ratio-band" />
                                </span>
                                <div className="question">
                                    늦은 저녁, 룸메이트가<br />
                                    오늘 크게 넘어졌다고<br />
                                    얘기할 때 나는
                                </div>
                            </div>
                            <div className="answer-container">
                                <button className="answer" data-num="q5" data-type="3" data-answer="F">내가 다친 것처럼 공감하며 걱정을 한다</button>
                                <button className="answer" data-num="q5" data-type="3" data-answer="T">왜 다쳤는지 물어보고 근처 약국을 알려준다</button>
                            </div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-tel.png" alt="" width={28} height={26} className="image-ratio-tel" />
                                </span>
                                <div className="question">잠들기 전,<br />가족과 통화에서 나는</div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q6" data-type="2" data-answer="S">구체적으로 있었던 일을 얘기한다</button> <button className="answer" data-num="q6" data-type="2" data-answer="N">오늘 느꼈던 큰 감정을 얘기한다.</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-compass.png" alt="" width={32} height={26} className="image-ratio-compass" />
                                </span>
                                <div className="question">
                                    룸메이트가<br />
                                    어제 다녀왔던 맛집의<br />
                                    위치를 물어본다
                                </div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q7" data-type="2" data-answer="S">숙소에서부터 가는 법을 알려준다</button> <button className="answer" data-num="q7" data-type="2" data-answer="N">식당 옆에 있는 큰 건물을 알려준다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-think.png" alt="" width={32} height={26} className="image-ratio-think" />
                                </span>
                                <div className="question">
                                    멍~ 때리며<br />
                                    버스를 기다리는 중,<br />
                                    나는 어떤 생각을 할까?
                                </div>
                            </div>
                            <div className="answer-container">
                                <button className="answer" data-num="q8" data-type="2" data-answer="S">“오늘 저녁은…” 남은 일정에 대해 생각한다</button>
                                <button className="answer" data-num="q8" data-type="2" data-answer="N">“내가 여기 산다면…” 의식의 흐름에 따라<br />상상의 나래를 펼친다</button>
                            </div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-todo.png" alt="" width={29} height={29} className="image-ratio-todo"></Image>
                                </span>
                                <div className="question">아직 여행 마지막 날의 <br />일정을 짜지 못한 나는</div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q9" data-type="4" data-answer="P">미루다 전날 잠들기 직전에 짠다</button> <button className="answer" data-num="q9" data-type="4" data-answer="J">틈틈히 미리 루트를 구상해둔다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-fork.png" alt="" width={23} height={27} className="image-ratio-fork"></Image>
                                </span>
                                <div className="question">미리 찾아보았던<br />식당이 문을 닫았다.<br />나의 선택은?</div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q10" data-type="4" data-answer="P">맛있어 보이는 옆 식당에 들어간다</button> <button className="answer" data-num="q10" data-type="4" data-answer="J">맛집을 다시 검색해서 찾아본다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-roommate.png" alt="" width={39} height={26} className="image-ratio-roommate" />
                                </span>
                                <div className="question">
                                    여행 중, 게스트하우스에서<br />
                                    가볍게 인사만 했던 사람과<br />
                                    우연히 마주친 나는?
                                </div>
                            </div>
                            <div className="answer-container"><button className="answer" data-num="q11" data-type="1" data-answer="I">간단히 인사만 하고 지나간다</button> <button className="answer" data-num="q11" data-type="1" data-answer="E">반가워하며 가벼운 대화를 이어간다</button></div>
                        </div>
                        <div className="section-inner">
                            <div className="question-container">
                                <span className="ico">
                                    <Image src="/mbti/ico-flag.png" alt="" width={21} height={26} className="image-ratio-flag" />
                                </span>
                                <div className="question">
                                    마지막 여행지를 향해<br />
                                    걸어가던 중<br />
                                    새로운 장소를 발견한 나는
                                </div>
                            </div>
                            <div className="answer-container">
                                <button className="answer" data-num="q12" data-type="4" data-answer="P">어떤 장소인지 궁금하다. 일단 가서 구경한다</button>
                                <button className="answer" data-num="q12" data-type="4" data-answer="J">우선 남은 일정에 무리가 없는지 고려해본다</button>
                            </div>
                        </div>
                        <div className="section-inner question-end-container">
                            <div>
                                <p>드디어 여행의 종착지를<br />찾아헤매던 나의 꽃이<br />눈 앞에 나타났다</p>
                            </div>
                            <div className="result-calcurate">결과 분석 중</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
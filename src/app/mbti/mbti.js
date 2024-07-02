import { gsap , ScrollTrigger , TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger , TextPlugin);


export function MBTI_RESULT() {
    let imageDataUrl = '/'; //라이브시 test campaign
    let resultWrap;
    let resultNum = 0;

    const resultData = {
        0: {
            mbti: 'esfj',
            flower: 'flower-shasta',
            subTitle: '풍부한 공감과 리액션을 해준다',
            title: '당신은 사랑받는 “샤스타데이지”',
            type: [
                '“샤스타데이지”의 꽃말은 평화! 평화주의자인 당신은 친구들 싸움 사이에서 자주 중재자 역할을 하게 돼요.',
                '친구가 많은 타입이고 배신이나 이간질은 딱 질색이에요.',
                '상담을 잘해줘요. 친구들 고민은 곧 내 고민이에요.',
                '참는 것에 익숙하고 상대방을 신경 쓰는 배려심이 좋은 사람이에요.',
                '그러다 보니 인간관계에 상처를 받기도 해요. 그래도 혼자 꾹 참아요. 하지만 불만을 얘기하면 서로의 관계가 더 불편해질 것만 같아요.',
                '남의 부탁은 잘 들어주는 편인데 내 부탁이 거절당할 땐 속으로 상처 입어요.',
                '새로운 사람을 사귀거나 노는 것이 즐거워요. 어색한 침묵이 불편할 때가 많아 먼저 말을 거는 타입이에요.',
                '공감 능력이 뛰어나고 감수성이 풍부한 타입이에요.',
                '현실적인 면도 발달해 있어서 반복적인 생활에도 나름대로 적응을 잘 하는 편이에요.',
                '다소 보수적이지만 자기주장을 강하게 하지 않아요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-doraji',
                    name: '속이 알찬 “도라지꽃”',
                },
                bad: {
                    img: 'compatibility-phlox',
                    name: '열정맨 “플록스”',
                },
            },
        },
        1: {
            mbti: 'enfj',
            flower: 'flower-phlox',
            subTitle: '온화하고 활기찬 당신은',
            title: '배려 깊은 열정맨! “플록스”',
            type: [
                '플록스의 꽃말은 ‘온화’, 당신은 활짝 피어있는 플록스처럼 마음이 따뜻한 사람이에요.',
                '마음에 들지 않아도 쉽게 겉으로 표현하지 않고, 사람들과 부딪히거나 싸우는걸 싫어해요.',
                '감정적 공감의 고수인 당신, 남이 울며 괜스레 따라 눈물이 날 때가 있어요. 역시 따뜻한 사람!',
                '평소 눈치가 빠르고 센스있는 성격이에요! 사람들이 좋아하는 데는 다 이유가 있다니까요!',
                '비판에 민감하고 상처를 잘 받는 타입이에요. 남이 나에 대해 싫은 소리 하면 괜스레 자꾸 신경 쓰여요. 내가 잘못한 거 아니니 너무 신경 쓰지 말아요!',
                '온화하지만 활기찬 성격으로 주변에 사람이 많아요. 대놓고는 아니지만, 은근~한 인기쟁이?',
                '선비 같은 면이 있고, 남에게는 관대하지만 나에게 엄격한 편이에요. 남에겐 뭐라고 잘 안 하지만 나 스스로에겐 쓴소리를 잘해요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
                bad: {
                    img: 'compatibility-hibiscus',
                    name: '속 깊은 “히비스커스”',
                },
            },
        },
        2: {
            mbti: 'infj',
            flower: 'flower-gerbera',
            subTitle: '착하지만, 가끔은 속을 알 수 없어!',
            title: '당신은 배려심 깊은 “거베라”',
            type: [
                '겉으로는 이상적이나 사실 속은 냉소적이에요. 가끔 인간관계 유지를 위해 가면을 쓴답니다. 남들이 모르는 내면이 있는 당신은 신비주의 거베라.',
                '남 눈치를 잘 보는 타입이고 알게 모르게 내적 고민과 갈등이 많아요. 당신은 속이 깊은 사람!',
                '남의 말에 경청을 잘하고, 남들에게 착하다는 소리를 많이 들어요. 하지만 절친이나 가족에게도 참을 수 없는 선은 있답니다.',
                '얕고 넓은 인간관계보다는 깊고 단단한 우정이 더 좋아요.',
                '조금 피곤하지만 인싸인척도 자유롭게 할 수 있어요. 속마음을 겉으로 쉽게 드러내지 않는 편이에요.',
                '빠르게 지나가는 유행에 꼭 동참하고 싶은 마음은 없어요. 내가 좋아하는 게 아니면 딱히 하고 싶은 마음이 없어요.',
                '내가 관심 있는 분야 외에는 별로 신경 쓰지 않아요. ',
                '남이 나를 휘두르는 것에 대해 피곤함을 느껴요. 내 일은 내가 알아서 하는 게 좋아요.',
                '낯가림이 있는 편이라 어디 가서 대화를 주도하는 편은 아니에요. 처음 만난 사람들보다는 오래 본 사람들을 만나는 게 더 편해요.',
                '활발한 성격은 아니지만 콘서트나 페스티벌에 가면 은근 잘 놀아요. ',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-bakjunghwa',
                    name: '인기 많은 “백정화”',
                },
                bad: {
                    img: 'compatibility-erica',
                    name: '완벽주의자 “에리카”',
                },
            },
        },
        3: {
            mbti: 'enfp',
            flower: 'flower-bakjunghwa',
            subTitle: '창의적인 관종, 당신은',
            title: '인기 많은 “백정화”',
            type: [
                '꽃말도 전설도 없지만, 떠도는 소문으로 들리는 백정화의 꽃말은 ‘관심’! 은근슬쩍 관심을 필요로 하는 당신은 울타리에 피어난 백정화!',
                '아싸보다는 인싸에 가까운 편이에요! 사람을 좋아하고 주변에 친구가 많으며 타인의 감정에 예민하여 눈치가 빠른 편이에요.',
                '불타는 나만의 열정을 가지고 있답니다. 특히 좋아하는 일은 정말 열심히 하는 편이지만 싫증도 잘 느껴요.',
                '입에 발린 거짓말을 잘하지 못하는 타입이에요. 마음에 없는 소리 할 땐 얼굴에서 티가 나요.',
                '햇볕이 좋고 통풍이 잘되는 환경을 좋아하는 백정화는 천진난만한 어린아이 같은 면이 있어요.',
                '평소 호불호가 있는 타입이라 하기 싫은 일은 절대 하기 싫어요.',
                '순간 집중력이 좋아 벼락치기를 자주 해요. 계획적이기보다는 다소 충동적일 때가 많아요.',
                '사실 조별과제보다는 혼자 하는 일이 더 편할 때가 많아요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-gerbera',
                    name: '배려심 깊은 “거베라”',
                },
                bad: {
                    img: 'compatibility-veronica',
                    name: '똑 부러지는 “베로니카”',
                },
            },
        },
        4: {
            mbti: 'infp',
            flower: 'flower-jakyak',
            subTitle: '수줍지만 나만의 색이 뚜렷한',
            title: '당신은 소심한 관종 “작약”',
            type: [
                '생각이 많고 눈치를 많이 보는 타입이에요.',
                '아싸기질이 다분하지만 자신의 색이 뚜렷한 “작약’처럼 소심한 관종이에요.',
                '남의 비판에 상처를 잘 받는 편이에요. 모두가 나를 좋아할 수 없단 건 알지만 그래도 미움받고 싶지는 않아요.',
                '반복적인 일상은 다소 따분하다고 느껴요. 뜻밖의 일탈을 상상하기도 해요.',
                '공감 능력이 뛰어나고 배려심이 좋아 주변 사람들이 나를 좋아해요.',
                '내가 가끔 별로지만 내가 좋아요. 내가 싫긴 한데 스스로를 사랑해요. 무슨 말인지 알겠죠? 대충 차가운 핫초코 같은 거 말이에요.',
                '나의 공간 안으로 들어온 친구나 연인에게 모든 것을 오픈하는 편이에요. 신비주의 컨셉은 애초에 불가능해요.',
                '결혼은 안 해도 가까운 친구가 근처에 살았으면 좋겠어요. 혼자는 조금 외로워요.',
                '남을 위해 하고 싶은 말은 속으로만 꾹 참는 편이에요. 그렇다고 너한테 불만이 없는 건 아니니 주의해주세요.',
                '낭만적이고 분위기에 약한 타입이에요. 쉽게 사랑에 빠지고 헤어 나오기도 어려워요.',
                '다른 사람의 의견을 경청하지만, 결정은 내가 해요. 가끔 한 귀로 듣고 한 귀로 흘리기도해요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-phlox',
                    name: '열정맨 “플록스”',
                },
                bad: {
                    img: 'compatibility-erica',
                    name: '완벽주의자 “에리카”',
                },
            },
        },
        5: {
            mbti: 'intj',
            flower: 'flower-sunflower',
            subTitle: '사실 내가 최고인 것 같아!',
            title: '당신은 확신에 찬 “해바라기”',
            type: [
                '자신의 능력에 확고한 믿음이 있는 자존감 높은 타입! 내가 너무 좋아요! 난 최고! 짱이야! ',
                '연애에서 결혼까지 오래 걸릴 수도 있어요!',
                '빨리빨리, 답답한 것이나 기다리는 것을 잘 못 해요. 바쁜데 누가 앞을 막고 있으면 짜증 나요.',
                '해바라기 같은 당신은 개인주의 성향이 강하고 독립적인 타입으로 혼자 노는 것도 즐거워요!',
                '왠지 남들이 다 하는 건 가끔 하기 싫을 때가 있어요. 괜~히 그럴 때 있지 않나요?',
                '친구 고민 상담을 잘 들어주는 편은 아니에요.',
                '효율성이 떨어지는 시스템은 정말 최악이에요. 아니 일을 대체 왜 그렇게 하죠? 비논리적인 건 싫어요,',
                '뭔가 새로운 것에 대해 알아가는 것이 즐거워요.',
                '솔직히 이런 테스트 결과 잘 모르겠어요. 그냥 재미로 가볍게는 할 만한데 그렇게 신빙성 있지 않은 것 같아요. 라고 생각했죠?',
                '내가 짱이지만, 나를 향한 지나치게 많은 관심은 부담스러워요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-bakjunghwa',
                    name: '인기 많은 “백정화”',
                },
                bad: {
                    img: 'compatibility-erica',
                    name: '완벽주의자 “에리카”',
                },
            },
        },
        6: {
            mbti: 'entj',
            flower: 'flower-mebal',
            subTitle: '패배가 뭐지? 내 사전엔 승리뿐.',
            title: '당신은 “매발톱꽃”',
            type: [
                '한 가지에 집중하면 끝을 보는 스타일이에요.',
                '친구의 고민에 대해 감정적 공감보다는 해답을 찾아주려고 노력하는 타입이에요. 친구가 꼭 고민을 해결했으면 좋겠어요.',
                '새로운 인간관계를 맺는 걸 두려워하지 않아요. 집순이 재질은 아닌 당신!',
                '혼자 있을 때에 멍때리면서 무한 상상을 펼칠 때가 많아요. 쉿, 남들에게는 비밀이에요.',
                '책임지지 못할 일은 과감하게 포기하는 게 좋다고 생각해요. 이도저도 아니게 붙잡고 있어서는 안 돼요.',
                '나서는 걸 즐기진 않지만, 남들이 하는 것보다 내가 하는 게 낫다고 느낄 때가 많아 어느새 리더가 되어있을 때가 있어요.',
                '비효율적인 상황이 너무 답답하고 싫어요. “아니, 일을 왜 저렇게 해? 진짜 차라리 내가 하는 게 낫겠다.”라고 종종 생각해요.',
                '솔직히 여럿이 하는 일보다 혼자 일할 때가 마음은 더 편한 것 같아요.',
                '지나친 관심은 부담스럽지만 관종끼가 있어서 관심 받는 건 좋아요.',
                '야생화여서 특별히 관리하지 않아도 잘 자라요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
            },
        },
        7: {
            mbti: 'intp',
            flower: 'flower-suguk',
            subTitle: '어디로 튈지 모르는 당신은',
            title: '변덕쟁이 “흰 수국”',
            type: [
                '변덕이 심하고 가끔 충동적인 행동을 많이 해요. 어디로 튈지 모르는 변덕쟁이 “흰 수국”처럼요.',
                '친한 친구라도 연락하는 게 귀찮을 때가 많아요. 항상 핸드폰을 붙잡고 있는 사람들이 오히려 신기하다고 생각해요.',
                '관계에 얽매이기 싫어요. 가는 사람 안 붙잡고 오는 사람 안 막는 그런 거.. 알죠?',
                '스트레스받는 게 너무너무 싫어요. 그래서 튀지 않으려 하고 대체로 조용조용해요.',
                '조용하고 진지해 보이지만, 사실 나는 생각이 많고 상상력이 풍부한 거예요. 분석도 잘하고요.',
                '주변에 사람은 별로 없지만, 있는 사람들은 내 모습을 알아요. 대충 아는 거 아니고 ‘진짜’ 나를요.',
                '남들이 무슨 말 할 때 틀린 게 잘 보여서 가끔은 동의할지라도 일부러 남의 반대편이 되곤 해요.',
                '정해져 있는 규칙을 따르는 건 갑갑해요. 자유로운 사회를 꿈꿔요.',
                '창의력에 몰빵해서 사회성이나 성실성은 다소 부족해요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-mebal',
                    name: '패배는 없다 “매발톱꽃”',
                },
                bad: {
                    img: 'compatibility-erica',
                    name: '완벽주의자 “에리카”',
                },
            },
        },
        8: {
            mbti: 'entp',
            flower: 'flower-salvia',
            subTitle: '솔직하고 정열적인 그대, 당신은',
            title: '뜨겁다 못해 타오르는 “사르비아”',
            type: [
                '열정이 가득해서 폭넓은 관심사와 취미를 가진 뜨거운 사르비아!',
                '관심 있는 건 뭐든지 잘 할 수 있어요. 하기 싫은 건 쳐다보지도 않을 거지만요. 은근 고집이 있는 타입이에요.',
                '호불호가 강한 편이에요. 사람도 예외는 아니에요. 한 번 사람에게 빠지면 푹 빠져요. 좋아하는 사람과 싫어하는 사람의 경계가 명확해요.',
                '꼭 공부는 아니더라도 머리가 똑똑한 편이에요. 재미없어서 안 하는 거예요 공부. 마음먹고 했으면 S대는 기본이었을걸요?',
                '남이 하는 대로 똑같이 맞춰가는 것이 싫어요. 창의적인 게 좋고 새로운 걸 찾고 싶어요.',
                '일단 저지르고 보는 스타일, 충동적인 면이 있어요.',
                '복권에 당첨되면 누구보다 즐겁고 행복하게 살 자신이 있어요. ',
                '연애할 때 밀당을 즐기지 않아요. 중간에서 애매한 건 딱 싫어요!',
                '인싸와 아싸의 면을 모두 가지고 있어요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-gerbera',
                    name: '배려심 깊은 “거베라”',
                },
                bad: {
                    img: 'compatibility-hibiscus',
                    name: '속 깊은 “히비스커스”',
                },
            },
        },
        9: {
            mbti: 'estj',
            flower: 'flower-veronica',
            subTitle: '한번 시작한 일은 끝까지!',
            title: '당신은 똑 부러지는 “베로니카”',
            type: [
                '“베로니카” 꽃말처럼 모든 일에 충실한 당신은 기억력이 좋고, 계획을 차근차근 해나가는 성격이에요.',
                '어질러지거나 난장판인 책상을 잘 보지 못해요. 정리 못 하는 건 나쁜 사람!',
                '일 못하는 사람을 지켜보는 건 너무 고통스러운 일이에요. 일 못하는 건 나쁜 사람!',
                '뭐든 잘해야 직성이 풀리고, 해낸 일은 인정받고 싶어요. (특히 남들 앞에서!) 일 잘하는 건 좋은 사람!',
                '한 번 시작한 일은 끝까지, 계획 틀어지는 것을 싫어해요. 하기 싫은 일도 마무리는 지어야 해요.',
                '약속을 어기는 사람이 너무 싫어요! 약속은 기본 아닌가요?',
                '싸우는 걸 즐기지 않지만, 지는 건 더 싫어요.',
                '사업을 한다면 잘할 타입이에요. 리더를 즐기지 않지만 시키면 잘 해내는 스타일!',
                '객관적이고 확실한 사람이에요. 애매모호한 건 질색이에요! 딱딱 떨어지는 게 좋아요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-hibiscus',
                    name: '속 깊은 “히비스커스”',
                },
                bad: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
            },
        },
        10: {
            mbti: 'isfj',
            flower: 'flower-hibiscus',
            subTitle: '섬세하고 따뜻한 당신은',
            title: '속 깊은 “히비스커스”',
            type: [
                '책임감이 있는 타입이고 질서 있는 환경이 좋아요. 파격적인 변화는 부담스러워요.',
                '다 같이 일하는 것보다는 혼자 일하는 것이 편해요. 신세 지는 것도, 피해 주기도 싫거든요.',
                '인싸중엔 아싸, 아싸중엔 인싸. 내향형인데 때론 외향적인척해요. 사실 나도 가끔 날 모르겠어요.',
                '인간관계에 상처를 잘 받는 여린 타입이에요. 남에게 상처 주기도 싫어요. 말은 항상 조심히!',
                '나서는 건 싫지만, 사람들의 관심을 받는 걸 은근 좋아해요.',
                '착하고 친절하다는 얘기를 자주 들어요. 속 깊은 “히비스커스”처럼 섬세하고 따뜻하다는 평가를 받는 편이에요.',
                '남의 말을 잘 들어주고, 내 속 얘기는 잘 하지 않는 타입이에요. 싸우는 거 별로 안 좋아해요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-freesia',
                    name: '슈퍼인싸 “프리지아”',
                },
                bad: {
                    img: 'compatibility-phlox',
                    name: '열정맨 “플록스”',
                },
            },
        },
        11: {
            mbti: 'istj',
            flower: 'flower-erica',
            subTitle: '신중하고 똑똑한 당신은,',
            title: '고독한 완벽주의자 “에리카”',
            type: [
                '내 얘기를 하는 것도 별로 안 좋아하고, 남의 얘기를 듣는 것도 즐거운 일은 아니에요.',
                '다른 사람 일에 관심 갖는 건 조금 귀찮은 일이에요.',
                '평온하고 반복적인 삶이 싫지는 않아요. 회사생활에 나름대로 적응을 잘하는 편이에요.',
                '예의 없는 게 제일 싫어요. 예의는 모든 것에 기본이 아닌가요?',
                '평소에는 참는 편이지만 폭발하면 정말 무서운 사람이에요. 나 알고 보면 진짜 무서운 사람이야.',
                '조별 과제 참여 안 하는 사람들은 제명할거에요. 왜? 난 진짜 무서운 사람이니까.',
                '한 번 맡은 일은 아주 신중하게 처리해요. 가끔 꼰대라는 말을 듣는 보수적인 편이에요.',
                '조금은 강박증이 있는 완벽주의에요. 신중하고 똑똑하지만 조금은 고독한 “에리카” 같은 사람.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-susun',
                    name: '자존감 높은 “수선화”',
                },
                bad: {
                    img: 'compatibility-bakjunghwa',
                    name: '인기 많은 “백정화”',
                },
            },
        },
        12: {
            mbti: 'estp',
            flower: 'flower-susun',
            subTitle: '개방적인 팩트폭력기!',
            title: '당신은 자존감 높은 “수선화”',
            type: [
                '이랬다저랬다 하는 것보단 확실한 게 좋아요. 어중간한 건 영 별로에요.',
                '창의적이고 머리가 잘 돌아가는 편이에요. 이것저것 할 줄 아는 게 많아요.',
                '솔직히 내가 최고인 것 같아요. 자존감 높은 “수선화”처럼 약간 관종기질이 있어요.',
                '월급이 항상 통장을 스쳐나가요. 내 월급 어디 갔죠?',
                '그렇지만 깊게 생각하기 싫어요. 그냥 놀고먹는 게 최고인 것 같아요. 누구보다 신나게 돈 쓸 준비가 되어있어요.',
                '한 번 사는 인생 이것저것 해보다 죽고 싶어요. 매사에 열정 넘치는 스타일이에요.',
                '알게 모르게 리더십 있는 스타일! 모르셨다면 지금부터라도 해보세요!',
                '남의 시선을 신경쓰지 않는 편이고 남이 뭘 하는지도 관심 없어요. 나는 쿨하니까.',
                '벼랑 끝의 아슬아슬한 짜릿함이 싫지는 않아요. 인생은 한 번이니까.',
                '스트레스를 쉽게 받는 편은 아니에요. 대충 살고 있지만 난 성공할 것 같아요. 나는 짱이니까.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-hibiscus',
                    name: '속 깊은 “히비스커스”',
                },
                bad: {
                    img: 'compatibility-phlox',
                    name: '열정맨 “플록스”',
                },
            },
        },
        13: {
            mbti: 'istp',
            flower: 'flower-ranunculus',
            subTitle: '혼자서도 매력적인 당신은,',
            title: '마이웨이 “라넌큘러스”',
            type: [
                '가끔 이상한 데서 혼자 웃는데 남 눈치는 안 봐요. 인생은 마이웨이 아닌가요? 혼자서도 충분히 매력적인 “라넌큘러스” 처럼요.',
                '적게 일하고 많이 버는 게 인생의 목표에요.',
                '한 번 꽂히면 질릴 때까지 물고 늘어져요. 이 영역의 일인자는 나였으면 좋겠어요.',
                '약속 어기는 사람 별로 안 좋아해요. 특히 당일 약속 파토는 정말 최악이에요!',
                '싫어하는 사람이랑은 말도 섞기 싫지만 친해진 사람에게는 허물없이 지내는 타입이에요.',
                '마음에도 없는 소리 하는 걸 싫어해요. 차라리 말을 안 할래요.',
                '필요에 따라 외향적인 척 할 수 있는 내향적인 사람이에요. 인싸도 아싸도 자유롭게 조절 가능한 능력자!',
                '관심 분야가 아니면 쳐다도 안 봐요. 다만 내 구역에 들어왔다 하면 끝장을 보는 편이에요.',
                '우르르 몰려다니는 건 딱 질색. 강한 위계질서, 꼰대 집단은 별로에요,',
                '호불호가 강하고 의심이 많은 타입이에요.',
                '미루고 미루다 발등에 불이 떨어져야 일을 시작할 때가 많아요. 이런 내가 싫지만 어쩔 수 없어요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-shasta',
                    name: '사랑받는 “샤스타데이지”',
                },
                bad: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
            },
        },
        14: {
            mbti: 'esfp',
            flower: 'flower-freesia',
            subTitle: '천진난만하고 행복한 당신은,',
            title: '슈퍼인싸 “프리지아”',
            type: [
                '사람들이 저를 가만두질 않네요. 항상 친구들에게 둘러싸여 있는 나는야 슈퍼 인싸 “프리지아”!',
                '처음 보는 사람에게 다가가는 게 두렵지 않아요. 사람들은 절 좋아하거든요.',
                '계획없이 즉흥적으로 하는 일이 가장 재미있어요. 짜릿해요.',
                '계획적으로 하는 소비는 재미없어요. 충동구매가 가장 행복한 거 아닌가요? 쇼핑을 하면 마음이 안락해져요.',
                '혼자보단 여럿이서 하는 일 좋고, 앉아만 있는 일보다는 활동적인 직업이 좋아요.',
                '계획과 규칙에 얽매여있는 꼰대 집단이 싫어요.',
                '귀가 얇고 변덕이 심해요. 쉽게 질리기도하구요. 그렇지만 뭐 어때요? 세상엔 재밌는 게 많은걸요!',
                '집에 있으면 너무 무기력해서 항상 나가 노는 타입이에요.',
                '적응도 잘 하는 편이고, 대놓고 말은 안 하지만 주목받는 것이 즐거워요. 전생에 연예인이었을지도 몰라요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-erica',
                    name: '완벽주의자 “에리카”',
                },
                bad: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
            },
        },
        15: {
            mbti: 'isfp',
            flower: 'flower-doraji',
            subTitle: '상냥하고 따뜻하지만',
            title: '속은 알찬 “도라지꽃”',
            type: [
                '상냥한 “도라지꽃”처럼 따뜻하고 순한 마음씨를 가진 당신은 부탁을 쉽게 거절하지 못하고 양보도 곧 잘 하는 타입이에요.',
                '그래서 사람들이 많이 다가오기도 해요. 어떤 사람을 만나도 원만하게 잘 지내구요.',
                '불평불만을 다 쌓아만 두고 대놓고 앞에서 표출은 잘 못해요. 누군가 내 의견에 대해 부정적으로 생각해도 자기 주장을 강력하게 하지 않아요.',
                '호기심이 많아 주변 사람 관찰을 잘해서 눈치가 빠른 편이에요.',
                '자기 자랑이 심하지 않고 겸손한 타입이에요.',
                '스스로 별로 안착하다고 생각하지만 사람들은 자꾸만 착하다고 말해요.',
                '매사에 조용한 것처럼 보이지만 알게 모르게 은근 충동적인 타입!',
                '규칙이나 질서에 얽매이는 게 싫어요. 자유로운 게 너무너무 좋아요. 특히 여행가는걸 좋아해요!',
                '이런 저런 생각은 많은데 막상 실천으로 옮기는 건 너무 어려워요.',
                '관심 받는거 진짜 싫은데 좋아요. 조용한 관종 스타일이에요. 사람 만나는 것도 좋은데 싫어요.',
            ],
            compatibility: {
                good: {
                    img: 'compatibility-shasta',
                    name: '사랑받는 “샤스타데이지”',
                },
                bad: {
                    img: 'compatibility-jakyak',
                    name: '소심한 관종 “작약”',
                },
            },
        },
    };

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    //결과 만들기
    function resultMakeDom() {
        let resultObject;
        let len;
        try {
            resultObject = resultData[resultNum];
            len = resultObject.type.length;
        } catch (e) {
            resultObject = resultData[0];
            len = resultObject.type.length;
        }
        let tag = '';
        tag += '<div class="result-flower"><img src="' + imageDataUrl + 'mbti/result/' + resultObject.flower + '.png" alt="" /></div>';
        tag += '<div class="result-container">';
        tag += '    <div class="sub-title mbti">' + resultObject.mbti + '</div>';
        tag += '    <div class="sub-title">' + resultObject.subTitle + '</div>';
        tag += '   <h2>' + resultObject.title + '</h2>';
        tag += '   <ul class="type-list">';
        for (let i = 0; i < len; i++) {
            tag += '  <li>' + resultObject.type[i] + '</li>';
        }
        tag += '    </ul>';
        tag += '</div>';
        tag += '<div class="compatibility-container">';
        if (resultObject.compatibility.good) {
            tag += '    <div class="compatibility">';
            tag += '        <div class="compatibility-img"><img src="' + imageDataUrl + 'mbti/result/' + resultObject.compatibility.good.img + '.png" alt="" /></div>';
            tag += '        <div>';
            tag += '           <div class="compatibility-title">환상의궁합</div>';
            tag += '           <div class="compatibility-subtitle">' + resultObject.compatibility.good.name + '</div>';
            tag += '        </div>';
            tag += '   </div>';
        }
        if (resultObject.compatibility.bad) {
            tag += '   <div class="compatibility">';
            tag += '     <div class="compatibility-img"><img src="' + imageDataUrl + 'mbti/result/' + resultObject.compatibility.bad.img + '.png" alt="" /></div>';
            tag += '     <div>';
            tag += '          <div class="compatibility-title">파국인궁합</div>';
            tag += '         <div class="compatibility-subtitle">' + resultObject.compatibility.bad.name + '</div>';
            tag += '      </div>';
            tag += '  </div>';
        }
        tag += '</div>';

        resultWrap.innerHTML = tag;
    }

    //결과 페이지 모션
    function resultMotion() {
        const mainContainer = document.querySelector('.result-wrap');
        if (!mainContainer) {
            return;
        }
        const tlTranslte = gsap.timeline({});
        tlTranslte.fromTo(mainContainer.children, 0.5, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, ease: 'Power2.easeOut' });
    }

    function resultInit() {
        resultWrap = document.querySelector('.result-wrap');
        resultNum = getParameterByName('r');
        if (!resultNum) {
            resultNum = 'm';
        }
        resultMakeDom();
        resultMotion();

        try {
            ScrollTrigger.refresh();
            window.scrollTo(0, 0);
        } catch (e) {}
    }

    return {
        init: resultInit,
    };
};

///////////////////////////
export function MBTI_MAIN() {
    //외향 (Extroversion)	내향 (Introversion)
    //현실 (Sensing)	직관 (iNtuition)
    //사고 (Thinking)	감정 (Feeling)
    //판단 (Judging)	인식 (Perceiving)

    let mainContainerInner = document.querySelector('.main-container-inner');
    let resultQ = {};
    let questionEI = [];
    let questionSN = [];
    let questionTF = [];
    let questionJP = [];
    let resultType = 'ENFJ';

    const mbtiData = {
        q1: {
            title: '비행기 옆자리에<br />마음에 드는 이상형이 있다.<br />어쩌다 대화를 시작한 나는',
            copy1: '풍부한 공감과 리액션을 해준다',
            copy2: '이것저것 궁금한 것을 질문한다',
            type: '3',
            a1: 'F',
            a2: 'T',
            icon: 'ico-speechbubble',
        },
        q2: {
            title: '갑작스러운 여행으로<br />혼자 오게 된 낯선 장소,<br />이이런 곳에서 나는',
            copy1: '혼자 조용히 여행을 즐긴다',
            copy2: '여행 중 만난 사람들과 쉽게 친해진다',
            type: '1',
            a1: 'I',
            a2: 'E',
            icon: 'ico-map',
        },
        q3: {
            title: '여행지에서 친구가<br />평소 필요로 했던<br />선물이 생각날 때 나는',
            copy1: '난 역시 섬세한 사람이야',
            copy2: '나는 역시 기억력이 좋아',
            type: '3',
            a1: 'F',
            a2: 'T',
            icon: 'ico-present',
        },
        q4: {
            title: '돌아온 숙소,<br />게스트 하우스 사람들과 <br />맥주를 마시러 온 나는',
            copy1: '묵묵히 사람들의 이야기를 듣는다',
            copy2: '대화를 주도하며 분위기를 이끈다',
            type: '1',
            a1: 'I',
            a2: 'E',
            icon: 'ico-beer',
        },
        q5: {
            title: '늦은 저녁, 같은 방을 쓰는<br>게스트가 오늘 크게 넘어졌다고<br>얘기할 때 나는',
            copy1: '내가 다친 것처럼 공감하며 걱정을 한다',
            copy2: '왜 다쳤는지 물어보고 근처 약국을 알려준다',
            type: '3',
            a1: 'F',
            a2: 'T',
            icon: 'ico-band',
        },
        q6: {
            title: '잠들기 전,<br>가족과 통화에서 나는',
            copy1: '구체적으로 있었던 일을 얘기한다',
            copy2: '오늘 느꼈던 큰 감정을 얘기한다.',
            type: '2',
            a1: 'S',
            a2: 'N',
            icon: 'ico-tel',
        },
        q7: {
            title: '룸메이트가<br />어제 다녀왔던 맛집의<br />위치를 물어본다',
            copy1: '숙소에서부터 가는 법을 알려준다',
            copy2: '식당 옆에 있는 큰 건물을 알려준다',
            type: '2',
            a1: 'S',
            a2: 'N',
            icon: 'ico-compass',
        },
        q8: {
            title: '멍~ 때리며<br />버스를 기다리는 중,<br />나는 어떤 생각을 할까?',
            copy1: '“오늘 저녁은…” 남은 일정에 대해 생각한다',
            copy2: '“내가 여기 산다면…” 의식의 흐름에 따라<br />상상의 나래를 펼친다',
            type: '2',
            a1: 'S',
            a2: 'N',
            icon: 'ico-think',
        },
        q9: {
            title: '아직 여행 마지막 날의 <br />일정을 짜지 못한 나는',
            copy1: '미루다 전날 잠들기 직전에 짠다',
            copy2: '틈틈히 미리 루트를 구상해둔다',
            type: '4',
            a1: 'P',
            a2: 'J',
            icon: 'ico-todo',
        },
        q10: {
            title: '미리 찾아보았던<br />식당이 문을 닫았다.<br />나의 선택은?',
            copy1: '맛있어 보이는 옆 식당에 들어간다',
            copy2: '맛집을 다시 검색해서 찾아본다',
            type: '4',
            a1: 'P',
            a2: 'J',
            icon: 'ico-fork',
        },
        q11: {
            title: '여행 중, 게스트하우스에서<br />가볍게 인사만 했던 사람과<br />우연히 마주친 나는?',
            copy1: '간단히 인사만 하고 지나간다',
            copy2: '반가워하며 가벼운 대화를 이어간다',
            type: '1',
            a1: 'I',
            a2: 'E',
            icon: 'ico-roommate',
        },
        q12: {
            title: '마지막 여행지를 향해<br />걸어가던 중<br />새로운 장소를 발견한 나는',
            copy1: '어떤 장소인지 궁금하다. 일단 가서 구경한다',
            copy2: '우선 남은 일정에 무리가 없는지 고려해본다',
            type: '4',
            a1: 'P',
            a2: 'J',
            icon: 'ico-flag',
        },
    };

    function addEvent() {
        const button = document.querySelectorAll('button.answer');
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (e) {
                const parentNode = e.target.parentNode;
                const activeNode = parentNode.querySelector('.answer.on');
                // console.log('activeNode', activeNode);
                if (activeNode !== null) {
                    activeNode.classList.remove('on');
                }
                const selectQNum = e.target.dataset.num;
                const selectType = e.target.dataset.type;
                const selectAnswer = e.target.dataset.answer;
                resultQ[selectQNum] = selectAnswer;
                e.target.classList.add('on');
                const num = selectQNum.replace('q', '') * 1 + 2;
                moveStep(num);
            });
        }

        const startBtn = document.querySelector('.btn-start');
        startBtn?.addEventListener('click', function () {
            gsap.to(startBtn, { backgroundColor: 'rgba(0,0,0,0)' });
            moveStep(1);
        });
    }

    function moveStep(currentStep) {
        // let step = -100 * currentStep;
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const winWidth = iOS ? screen.width : window.innerWidth;
        const questGageContainer = document.querySelector('.question-gage-container');
        const questCurrent = document.querySelector('.question-current');
        const questTotal = document.querySelector('.question-total');

        let twDelay = 0;
        if (currentStep === 1) {
            twDelay = 0.3;
            gsap.fromTo(questGageContainer, { autoAlpha: 0, y: -5 }, { autoAlpha: 1, duration: 0.4, y: 0 });
        }

        let maxWidth = Math.min(winWidth, 360);
        let step = -maxWidth * currentStep;

        const maxStep = 14;
        const gageWidth = (currentStep / maxStep) * 100;
        const questionIco = document.querySelectorAll('.question-container .ico img');
        const currentQuestionIco = questionIco[currentStep - 1];

        questTotal.innerHTML = maxStep;
        questCurrent.innerHTML = currentStep;

        gsap.to('.question-gage-bar', { width: gageWidth + '%' });

        gsap.to(mainContainerInner, {
            delay: twDelay,
            duration: 0.4,
            force3D: true,
            x: step,
            onComplete:  ()=> {
                const icoTranslte = gsap.timeline({});

                if(currentQuestionIco){
                    icoTranslte.to(currentQuestionIco, { duration: 0.3, y: -10, ease: 'Back.easeOut' });
                    icoTranslte.to(currentQuestionIco, { duration: 0.4, y: 0, ease: 'Bounce.easeOut' });
                }
            },
        });

        if (currentStep === maxStep) {
            gsap.to(questGageContainer, { autoAlpha: 0, duration: 0.4, y: -5 });
            getResult();
        }
    }

    function getResult() {
        const resultEI = getArrayResult(questionEI, resultQ);
        const resultSN = getArrayResult(questionSN, resultQ);
        const resultTF = getArrayResult(questionTF, resultQ);
        const resultJP = getArrayResult(questionJP, resultQ);
        resultType = resultEI + resultSN + resultTF + resultJP;

        gsap.to('.result-calcurate', {
            duration: 2,
            text: '결과 분석 중···',
            ease: 'none',
            onComplete: function () {
                redirectResult();
            },
        });
    }

    function redirectResult() {
        const pagename = resultType.toLocaleLowerCase();
        const mbtiArr = ['esfj', 'enfj', 'infj', 'enfp', 'infp', 'intj', 'entj', 'intp', 'entp', 'estj', 'isfj', 'istj', 'estp', 'istp', 'esfp', 'isfp'];
        const pageIndex = mbtiArr.indexOf(pagename);

        window.location.href = '/mbti/result?r=' + pageIndex + '&rf=1';
    }

    function getArrayResult(arr, result) {
        let selectStr = '';
        for (let i = 0; i < arr.length; i++) {
            const val = result[arr[i]];
            if (val !== undefined) {
                selectStr += val;
            }
        }
        const resultStr = stringParse(selectStr);
        return resultStr;
    }

    function questionFilter() {
        for (let property in mbtiData) {
            const type = mbtiData[property].type;
            switch (type) {
                case '1':
                    questionEI.push(property);
                    break;
                case '2':
                    questionSN.push(property);
                    break;
                case '3':
                    questionTF.push(property);
                    break;
                case '4':
                    questionJP.push(property);
                    break;
                default:
                    console.log('a');
            }
        }
    }

    function stringParse(str) {
        let text = str.toString();
        let expCounts = {};
        let maxKey = '';
        for (let i = 0; i < text.length; i++) {
            let key = text[i];
            if (!expCounts[key]) {
                expCounts[key] = 0;
            }
            expCounts[key]++;
            if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
                maxKey = key;
            }
        }
        return maxKey;
    }

    function introMotion() {
        const main = document.querySelector('.step-main .main-motion-container');
        const mainFlower = document.querySelector('.step-main .ico-flower');
        const tlTranslte = gsap.timeline({});

        tlTranslte.fromTo(main?.children, 0.5, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, ease: 'Power2.easeOut' }).fromTo(mainFlower, 0.5, { scale: 0.5, opacity: 0, rotation: 120 }, { scale: 1, rotation: 0, opacity: 1 }, '-=0.6');
    }

    function init() {
        resultQ = {};
        questionEI = [];
        questionSN = [];
        questionTF = [];
        questionJP = [];
        resultType = 'ENFJ';

        questionFilter();
        addEvent();
        introMotion();

        try {
            ScrollTrigger.refresh();
            window.scrollTo(0, 0);
        } catch (e) {
            console.log('e', e);
        }
    }

    return {
        init: init,
    };
};

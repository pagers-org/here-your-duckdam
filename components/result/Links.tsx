import { KakaoSDK } from 'global';

type shareKakaoType = {
    imageURL: string;
};

export const shareWithKakao = ({
    imageURL = 'https://firebasestorage.googleapis.com/v0/b/here-your-duckdam.appspot.com/o/images%2Fopen%20graph%20%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.png?alt=media&token=d6298a74-b548-4a1a-89bb-8362f95a2092',
}: shareKakaoType) => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '비밀 덕담이 도착했습니다!',
            description: '여기를 눌러 덕담을 확인하세요 💌',
            imageWidth: 800,
            imageHeight: 420,
            imageUrl: imageURL,
            link: {
                webUrl: process.env.NEXT_PUBLIC_SITE_URL,
                mobileWebUrl: process.env.NEXT_PUBLIC_SITE_URL,
            },
        },
        buttons: [
            {
                title: '나에게 어떤 덕담이 왔을까?',
                link: {
                    webUrl: process.env.NEXT_PUBLIC_SITE_URL,
                    mobileWebUrl: process.env.NEXT_PUBLIC_SITE_URL,
                },
            },
        ],
    });
};

export const shareWithTwitter = (shareURL: string) => {
    window.open(
        `https://twitter.com/intent/tweet?url=${shareURL}&text=${'비밀 덕담이 도착했어요! 바로 확인해보세요🥁'}`
    );
};

export const shareWithOthers = () => {
    if (navigator.share) {
        navigator
            .share({
                title: '비밀 덕담이 도착했습니다!',
                text: '여기를 눌러 덕담을 확인하세요.',
                url: 'https://here-your-duckdam-mc4mu29lp-duckdam-trio.vercel.app/',
            })
            .catch(console.error);
    } else {
        alert('공유하기가 지원되지 않는 환경 입니다.');
    }
};

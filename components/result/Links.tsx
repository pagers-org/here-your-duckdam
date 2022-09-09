type shareKakaoType = {
    imageURL: string | undefined;
    resultURL: string;
};

export const shareWithKakao = ({
    imageURL = process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE,
    resultURL,
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
                webUrl: resultURL,
                mobileWebUrl: resultURL,
            },
        },
        buttons: [
            {
                title: '나에게 어떤 덕담이 왔을까?',
                link: {
                    webUrl: resultURL,
                    mobileWebUrl: resultURL,
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

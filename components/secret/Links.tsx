import styled from '@emotion/styled';
import { KakaoSDK } from 'global';
import React from 'react';

type shareKakaoType = {
    imageURL: string;
};

export const shareKakaoLink = ({ imageURL }: shareKakaoType) => {
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

export const shareOtherLinks = () => {
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

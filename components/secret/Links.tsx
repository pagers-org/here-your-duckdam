import styled from '@emotion/styled';
import React from 'react';
import { KakaoSDK } from 'global';

export const shareKakaoLink = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '비밀 덕담이 도착했습니다!',
            description: '여기를 눌러 덕담을 확인하세요 💌',
            imageWidth: 800,
            imageHeight: 420,
            imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/here-your-duckdam.appspot.com/o/images%2F220px-HTML5_logo_and_wordmark.svg.png?alt=media&token=6f5863ac-176b-4ef4-b7e1-63fed6b9256b',
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

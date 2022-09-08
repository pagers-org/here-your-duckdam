declare global {
    interface Window {
        Kakao: any;
    }
}

export const KakaoSDK = Window.Kakao;

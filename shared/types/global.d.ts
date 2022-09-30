declare global {
    interface Window {
        Kakao: any;
        gtag: (param1: string, param2: string, param3: object) => void;
    }
}

export const KakaoSDK = Window.Kakao;

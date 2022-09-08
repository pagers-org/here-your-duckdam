declare global {
    interface Window {
        Kakao: any;
    }
}

window.Kakao = window.KaKao || {};

export const kakao = Window.Kakao;

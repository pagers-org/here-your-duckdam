import { getApp, getApps, initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

// 파이어베이스 Config
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGE_ID,
    appId: process.env.FB_APP_ID,
};

// 파이어베이스 앱 초기화/설정 (이미 초기화되어있으면 기존 설정 사용)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const storage = getStorage();
export const db = getFirestore();

export default app;

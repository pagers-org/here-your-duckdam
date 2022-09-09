export const PoliteKeys = [0, 50, 100] as const;
export type PoliteKeyType = typeof PoliteKeys[number];

export const word_0 = [
    '내가 제일 아끼는 사람에게',
    '천사에게',
    '나의 소중한 사람에게',
    '여러분에게',
];
export const word_1: Record<PoliteKeyType, string[]> = {
    0: [
        '치킨을',
        '너를',
        '피자를',
        '인간 쓰레기를',
        '내 목숨과 같은 50,000원을',
        '백종원을',
    ],
    50: ['행복한 추석', '용돈을', '전을'],
    100: [
        '풍성한 한가위',
        '행복한 명절',
        '마음마저 넉넉해지는 한가위',
        '가족들과 즐거운 추석',
        '밝고 보름달처럼 행복한 추석',
        '보름달처럼 마음마저 가득 찬 풍요로운 추석',
        '안전하고 건강한 한가위',
        '기쁨과 행복이 가득한 추석',
    ],
};
export const word_2: Record<PoliteKeyType, string[]> = {
    0: ['줘', '줄게', '소중히 여길게', '돌려줘'],
    50: ['보내세요', '많이 드세요'],
    100: ['되시길 바랍니다'],
};

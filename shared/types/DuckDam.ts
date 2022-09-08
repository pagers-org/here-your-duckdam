export type DuckDamObj = {
    first_word: string;
    second_word: string;
    third_word: string;
};

export type DuckDomWithImg = DuckDamObj & {
    img_url: string;
};

export type PoliteKey = 0 | 50 | 100;

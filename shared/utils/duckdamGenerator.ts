import type { DuckDamWithImg, PoliteKey } from '@shared/types/DuckDam';
import { randomNumber } from '@shared/utils/randomNumber';
import { word_0, word_1, word_2 } from 'shared/constant/CardMessage';

import { getStorageImage } from './getStorageImage';

export const randomNewDuckDam = (politeLevel: PoliteKey): DuckDamWithImg => {
    const firstRandomIndex = randomNumber(word_0.length);
    return {
        img_url: getStorageImage(firstRandomIndex),
        first_word: word_0[firstRandomIndex],
        second_word:
            word_1[politeLevel][randomNumber(word_1[politeLevel].length)],
        third_word:
            word_2[politeLevel][randomNumber(word_2[politeLevel].length)],
    };
};

export const randomNewDuckDamMessage = (politeLevel: PoliteKey) => {
    const { first_word, second_word, third_word } =
        randomNewDuckDam(politeLevel);
    return `${first_word} ${second_word} ${third_word}`;
};

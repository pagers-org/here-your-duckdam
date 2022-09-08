import { word_0, word_1, word_2 } from 'shared/constant/CardMessage';
import type { DuckDamObj, PoliteKey } from 'shared/types/DuckDam';
import { randomNumber } from 'shared/utils/randomNumber';

export const randomNewDuckDam = (politeLevel: PoliteKey): DuckDamObj => {
    return {
        first_word: word_0[randomNumber(word_0.length)],
        second_word:
            word_1[politeLevel][randomNumber(word_1[politeLevel].length)],
        third_word:
            word_2[politeLevel][randomNumber(word_2[politeLevel].length)],
    };
};

export const randomNewDuckDamMessage = (politeLevel: PoliteKey) => {
    return Object.values(randomNewDuckDam(politeLevel)).join(' ');
};

import type { DuckDamObj, PoliteKey } from '@shared/types/DuckDam';
import { randomNumber } from '@shared/utils/randomNumber';
import { word_0, word_1, word_2 } from 'shared/constant/CardMessage';

type NewDuckdamType = {
    randomImageNumber: number;
    politeLevel: PoliteKey;
};

export const randomNewDuckDam = ({
    randomImageNumber,
    politeLevel,
}: NewDuckdamType): DuckDamObj => {
    return {
        first_word: word_0[randomImageNumber],
        second_word:
            word_1[politeLevel][randomNumber(word_1[politeLevel].length)],
        third_word:
            word_2[politeLevel][randomNumber(word_2[politeLevel].length)],
    };
};

export const randomNewDuckDamMessage = (politeLevel: PoliteKey) => {
    const randomImageNumber = randomNumber(word_0.length);
    return Object.values(
        randomNewDuckDam({ politeLevel, randomImageNumber })
    ).join(' ');
};

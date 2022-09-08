import { word_0, word_1, word_2 } from 'constant/CardMessage';
import { useCallback, useEffect, useMemo, useState } from 'react';

const randomNumber = (length: number) => Math.floor(Math.random() * length);

const useAttitudeHooks = () => {
    const [politeRange, setPoliteRange] = useState<number>(50);
    const [[message1, message2], setMessage] = useState<string[]>([
        '..?',
        '..?',
    ]);

    const politeLevel = useMemo(() => {
        if (politeRange > 0 && politeRange < 30) {
            return 0;
        }
        if (politeRange > 33 && politeRange < 60) {
            return 50;
        }
        if (politeRange > 66 && politeRange <= 100) {
            return 50;
        }
        return 100;
    }, [politeRange]);

    const messageGenerator = useCallback(() => {
        return `${word_0[randomNumber(word_0.length)]}
        ${word_1[politeLevel][randomNumber(word_1[politeLevel].length)]} 
        ${word_2[politeLevel][randomNumber(word_2[politeLevel].length)]}`;
    }, [politeLevel]);

    useEffect(() => {
        return setMessage([messageGenerator(), messageGenerator()]);
    }, [politeLevel, messageGenerator]);

    return {
        message1,
        message2,
        setPoliteRange,
    };
};

export default useAttitudeHooks;

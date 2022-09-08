import { useEffect, useMemo, useState } from 'react';
import { randomNewDuckDamMessage } from 'shared/utils/duckdamGenerator';

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

    useEffect(() => {
        return setMessage([
            randomNewDuckDamMessage(politeLevel),
            randomNewDuckDamMessage(politeLevel),
        ]);
    }, [politeLevel]);

    return {
        message1,
        message2,
        politeLevel,
        setPoliteRange,
    };
};

export default useAttitudeHooks;

import { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDamMessage } from '@shared/utils/duckdamGenerator';
import { useEffect, useMemo, useState } from 'react';

const useCustomMessage = () => {
    const [customMessage, setCustomMessage] = useState({
        firstWord: '',
        secondWord: '',
        thirdWord: '',
    });

    return {
        customMessage,
        setCustomMessage,
    };
};

export default useCustomMessage;

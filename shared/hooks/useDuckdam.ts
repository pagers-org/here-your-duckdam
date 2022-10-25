import axios from 'axios';

import type { DuckDamWithImg, PoliteKey } from '@/shared/types/DuckDam';
import { randomNewDuckDam } from '@/shared/utils/duckdamGenerator';

const useDuckdam = (customMessage?: object) => {
    const addNewDuckDam = async (arg: PoliteKey | DuckDamWithImg) => {
        let newDuckDam;

        if (typeof arg == 'number') {
            newDuckDam = {
                ...randomNewDuckDam(arg),
            };
        }

        if (typeof arg == 'object') {
            newDuckDam = {
                ...customMessage,
            };
        }

        const url = '/api/duckdam/add';
        const { data, status } = await axios.post(url, newDuckDam, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (status === 200) {
            return data;
        }
    };

    return { addNewDuckDam };
};

export default useDuckdam;

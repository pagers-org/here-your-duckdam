import axios from 'axios';

import type { PoliteKey } from '@/shared/types/DuckDam';
import { randomNewDuckDam } from '@/shared/utils/duckdamGenerator';

const useDuckdam = () => {
    const addNewDuckDam = async (politeLevel: PoliteKey) => {
        const newDuckDam = {
            ...randomNewDuckDam(politeLevel),
        };

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

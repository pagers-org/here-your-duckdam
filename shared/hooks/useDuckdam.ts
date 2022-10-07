import type { PoliteKey } from '@/shared/types/DuckDam';
import { randomNewDuckDam } from '@/shared/utils/duckdamGenerator';
import axios from 'axios';
import { useRouter } from 'next/router';

const useDuckdam = () => {
    const router = useRouter();

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
            setTimeout(() => router.push(`/result/${data}`), 3000);
        }
    };

    const hasPoliteLevel = (politeLevel: unknown): politeLevel is PoliteKey => {
        return politeLevel !== undefined && typeof politeLevel === 'string';
    };

    const getPoliteLevel = () => {
        return router.query.politeLevel;
    };

    return { addNewDuckDam, hasPoliteLevel, getPoliteLevel };
};

export default useDuckdam;

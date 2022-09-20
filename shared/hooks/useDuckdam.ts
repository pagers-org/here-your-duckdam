import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import { useRouter } from 'next/router';

const useDuckdam = () => {
    const router = useRouter();

    const addNewDuckDam = async (politeLevel: PoliteKey) => {
        const newDuckDam = {
            ...randomNewDuckDam(politeLevel),
        };

        const response = await fetch('/api/duckdam/add', {
            method: 'POST',
            body: JSON.stringify(newDuckDam),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const id = await response.json();
        if (response.ok) {
            setTimeout(() => router.push(`/result/${id}`), 3000);
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

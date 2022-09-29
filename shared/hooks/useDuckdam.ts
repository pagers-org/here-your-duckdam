import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import axios from 'axios';
import { useRouter } from 'next/router';

const useDuckdam = () => {
    const router = useRouter();

    const addNewDuckDam = async (politeLevel: PoliteKey) => {
        const newDuckDam = {
            ...randomNewDuckDam(politeLevel),
        };

        const url = '/api/duckdam/add';
        const dataDuckdam = newDuckDam;
        axios
            .post(url, dataDuckdam, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(({ data }) =>
                setTimeout(() => router.push(`/result/${data}`), 3000)
            );
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

import { LoadingLogo, Title } from '@components/common';
import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const Load = () => {
    const router = useRouter();

    const addNewDuckDamHandler = useCallback(
        async (politeLevel: PoliteKey) => {
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
                setTimeout(() => {
                    router.push(`/result/${id}`);
                }, 3000);
            }
        },
        [router]
    );

    useEffect(() => {
        const politeLevel = router.query.politeLevel;

        const hasPoliteLevel = (
            politeLevel: unknown
        ): politeLevel is PoliteKey => {
            return politeLevel !== undefined && typeof politeLevel === 'string';
        };

        if (hasPoliteLevel(politeLevel)) {
            addNewDuckDamHandler(politeLevel);
            return;
        }
    }, [router.query.politeLevel, router, addNewDuckDamHandler]);

    return (
        <>
            <LoadingLogo />
            <Title>토끼가 덕담 고르는 중</Title>
        </>
    );
};

export default Load;

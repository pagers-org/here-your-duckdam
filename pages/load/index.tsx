import { Logo, Title } from '@components/common';
import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

const Load = () => {
    const router = useRouter();

    const addNewDuckDamHandler = useCallback(
        async (politeLevel: PoliteKey) => {
            const newDuckDam = {
                // TODO: politeLevel 기준으로 FireBase ImageURL 매핑 작업 진행 필요함.
                img_url: '',
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

            setTimeout(() => {
                router.push(`/result/?result=${id}`);
            }, 3000);
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

        if (!hasPoliteLevel(politeLevel)) {
            alert('예의도가 선택되지 않았어요!');
            router.push('/');
            return;
        }
    }, [router.query.politeLevel, router, addNewDuckDamHandler]);

    return (
        <>
            <Logo />
            <Title>토끼가 덕담 고르는 중</Title>
        </>
    );
};

export default Load;

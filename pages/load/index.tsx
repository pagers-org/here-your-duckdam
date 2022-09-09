import { Logo, Title } from '@components/common';
import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import { getStorageImage } from '@shared/utils/getStorageImage';
import { randomNumber } from '@shared/utils/randomNumber';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { word_0 } from 'shared/constant/CardMessage';

const Load = () => {
    const router = useRouter();

    const addNewDuckDamHandler = useCallback(
        async (politeLevel: PoliteKey) => {
            const randomImageNumber = randomNumber(word_0.length);
            const newDuckDam = {
                img_url: getStorageImage(randomImageNumber),
                ...randomNewDuckDam({ randomImageNumber, politeLevel }),
            };

            console.log(newDuckDam);
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
            <Logo keyframe="pulse" />
            <Title>토끼가 덕담 고르는 중</Title>
        </>
    );
};

export default Load;

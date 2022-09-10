import { Title } from '@components/common';
import styled from '@emotion/styled';
import type { PoliteKey } from '@shared/types/DuckDam';
import { randomNewDuckDam } from '@shared/utils/duckdamGenerator';
import { getStorageImage } from '@shared/utils/getStorageImage';
import { randomNumber } from '@shared/utils/randomNumber';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { loading } from 'public/icons/index';
import { useCallback, useEffect } from 'react';
import { word_0 } from 'shared/constant/CardMessage';

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
        <Wrapper>
            <Image src={loading} alt="selecting card rabbit" />
            <div>
                <Title>토끼가 덕담 고르는 중</Title>
            </div>
        </Wrapper>
    );
};

export default Load;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

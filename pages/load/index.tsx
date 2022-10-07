import { useEffect } from 'react';

import { LoadingLogo, Title } from '@/components/common';
import useDuckdam from '@/shared/hooks/useDuckdam';

const Load = () => {
    const {
        addNewDuckDam: addNewDuckDamHandler,
        hasPoliteLevel,
        getPoliteLevel,
    } = useDuckdam();

    useEffect(() => {
        const politeLevel = getPoliteLevel();

        if (hasPoliteLevel(politeLevel)) {
            addNewDuckDamHandler(politeLevel);
        }
    }, [addNewDuckDamHandler, getPoliteLevel, hasPoliteLevel]);

    return (
        <>
            <LoadingLogo />
            <Title>토끼가 덕담 고르는 중</Title>
        </>
    );
};

export default Load;

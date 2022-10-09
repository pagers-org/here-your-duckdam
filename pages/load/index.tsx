import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LoadingLogo, Title } from '@/components/common';

const Load = () => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const timer = setTimeout(() => router.push(`/result/${id}`), 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [id, router]);

    return (
        <>
            <LoadingLogo />
            <Title>토끼가 덕담 고르는 중</Title>
        </>
    );
};

export default Load;

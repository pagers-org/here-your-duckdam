import { BackDrop, Logo, Portal } from '@components/common';
import React, { useEffect, useState } from 'react';

const SplashRabbit = () => {
    const [visible, setIsVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsVisible(false), 1500);
    }, [setIsVisible]);

    return (
        <Portal>
            {visible && (
                <BackDrop>
                    <Logo />
                </BackDrop>
            )}
        </Portal>
    );
};

export default SplashRabbit;

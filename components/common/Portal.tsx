import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = (props: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (typeof window !== 'object') {
        return null;
    }

    const portal = document.querySelector('#portal');

    const isPortalElement = (portal: unknown): portal is HTMLElement => {
        return portal !== null;
    };

    if (mounted && isPortalElement(portal)) {
        return createPortal(props.children, portal);
    }

    return null;
};

export default Portal;

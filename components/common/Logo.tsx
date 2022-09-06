import Image from 'next/image';
import React from 'react';

import moon_rabbit from '../../public/images/moon_rabbit.png';

const Logo = () => {
    return <Image className="pulse" src={moon_rabbit} alt="moonRabit" />;
};

export default Logo;

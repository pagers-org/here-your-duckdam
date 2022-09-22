import Image from 'next/image';
import logo_light from 'public/icons/main-logo-light.png';

const Logo = () => {
    return <Image src={logo_light} layout="fixed" alt="달토끼" />;
};

export default Logo;

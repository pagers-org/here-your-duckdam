import Image from 'next/image';
import logo_light from 'public/icons/main-logo_light.png';

const Logo = () => {
    return (
        <Image
            src={logo_light}
            min-width="300px"
            min-height="300px"
            alt="달토끼"
        />
    );
};

export default Logo;

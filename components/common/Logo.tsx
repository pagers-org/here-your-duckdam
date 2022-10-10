import Image from 'next/image';
import logo from 'public/icons/halloween/main-logo.png';

const Logo = () => {
    return <Image src={logo} layout="fill" alt="달토끼" />;
};

export default Logo;

import { useState } from 'react';

const useCustomMessage = () => {
    const tempImgURL =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png';
    const [customMessage, setCustomMessage] = useState({
        img_url: tempImgURL,
        first_word: '',
        second_word: '',
        third_word: '',
    });

    return {
        customMessage,
        setCustomMessage,
    };
};

export default useCustomMessage;

import { useState } from 'react';

const useCustomMessage = () => {
    const [customMessage, setCustomMessage] = useState({
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

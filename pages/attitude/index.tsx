import { Button } from '@components/common';
import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
} from '@components/main';
import type { PoliteKeys } from '@constant/CardMessage';
import { word_0, word_1, word_2 } from 'constant/CardMessage';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

const randomNumber = (length: number) => Math.floor(Math.random() * length);

const Attitude = () => {
    const [politeRange, setPoliteRange] = useState<PoliteKeys>('50'); // 0, 50, 100
    const [[message1, message2], setMessage] = useState<string[]>([
        '..?',
        '..?',
    ]);

    const politeLevel = useMemo(() => {
        if (politeRange > 0 && politeRange < 30) {
            return 0;
        }
        if (politeRange > 33 && politeRange < 60) {
            return 50;
        }
        if (politeRange > 66 && politeRange <= 100) {
            return 50;
        }
        return 100;
    }, [politeRange]);

    const messageGenerator = useCallback(() => {
        return `${word_0[randomNumber(word_0.length)]}
        ${word_1[politeLevel][randomNumber(word_1[politeLevel].length)]} 
        ${word_2[politeLevel][randomNumber(word_2[politeLevel].length)]}`;
    }, [politeLevel]);

    useEffect(() => {
        return setMessage([messageGenerator(), messageGenerator()]);
    }, [politeLevel, messageGenerator]);

    return (
        <>
            <AttitudeTitle text={'다른 토끼들은 이런 메시지를 뽑았어요.'} />
            <MessageBox>
                <MessageItem>{message1}</MessageItem>
                <MessageItem>{message2}</MessageItem>
                <MessageItem>...?</MessageItem>
            </MessageBox>
            <AttitudeRange
                initialValue={50}
                handleRange={(range) => setPoliteRange(range)}
            />
            <Link href="secret">
                <Button>예절 수치 정했어!</Button>
            </Link>
        </>
    );
};

export default Attitude;

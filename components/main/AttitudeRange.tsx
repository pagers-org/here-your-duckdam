import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';

const politeTypes = {
    0: '🙄',
    1: '😀',
    2: '😇',
};

const AttitudeRange = (props: { initialValue: number }) => {
    const [rangeValue, setRangeValue] = useState(props.initialValue);
    const handleRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.valueAsNumber);
    };

    const politeEmoji = useMemo(() => {
        if (rangeValue > 50) {
            return politeTypes[2];
        }

        if (rangeValue === 0) {
            return politeTypes[0];
        }

        if (rangeValue > 0) {
            return politeTypes[1];
        }
    }, [rangeValue]);

    return (
        <StyledRange>
            <label htmlFor="range">{politeEmoji}</label>
            <input
                type="range"
                id="range"
                value={rangeValue}
                onChange={handleRangeValue}
            />
        </StyledRange>
    );
};

export default AttitudeRange;

const StyledRange = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input[type='range'] {
        width: 300px;
        margin: 16px 0;
        -webkit-appearance: none;
    }

    input[type='range'] + label {
        background-color: #fff;
        position: absolute;
        top: -25px;
        left: 110px;
        width: 80px;
        padding: 5px 0;
        text-align: center;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    }

    input[type='range']::-webkit-slider-runnable-track {
        background: #087f5b;
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #087f5b;
        margin-top: -7px;
    }

    input[type='range']::-moz-range-track {
        background: #087f5b;
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #087f5b;
        margin-top: -7px;
    }

    input[type='range']::-ms-track {
        background: #087f5b;
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-ms-thumb {
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #087f5b;
        margin-top: -7px;
    }

    label {
        font-size: 2rem;
    }
`;

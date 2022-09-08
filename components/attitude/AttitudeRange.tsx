import styled from '@emotion/styled';
import React, { useState } from 'react';

const AttitudeRange = (props: {
    initialValue: number;
    handleRange: (range: number) => void;
}) => {
    const [rangeValue, setRangeValue] = useState(props.initialValue);
    const handleRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.valueAsNumber);
        props.handleRange(rangeValue);
    };

    return (
        <StyledRange>
            <label htmlFor="range">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </label>
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

    label {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

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

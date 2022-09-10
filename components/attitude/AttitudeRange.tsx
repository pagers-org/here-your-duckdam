import styled from '@emotion/styled';
import { PoliteKeys } from '@shared/constant/CardMessage';
import React, { useState } from 'react';

const AttitudeRange = (props: {
    initialValue: number;
    handleRange: (range: number) => void;
}) => {
    const [rangeValue, setRangeValue] = useState(props.initialValue);
    const handleRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.valueAsNumber);
        props.handleRange(event.target.valueAsNumber);
    };

    return (
        <StyledRange>
            <label htmlFor="range">
                {PoliteKeys.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </label>
            <input
                min="0"
                max="100"
                step="50"
                type="range"
                id="range"
                list="rangeList"
                value={rangeValue}
                onChange={handleRangeValue}
            />
            <datalist id="rangeList">
                {PoliteKeys.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </datalist>
        </StyledRange>
    );
};

export default AttitudeRange;

const StyledRange = styled.div`
    padding: 3rem;
    & > label {
        width: 100%;
        display: flex;
        font-weight: 400;
        color: black;
        display: flex;
        font-size: 1.3rem;
        justify-content: space-between;
        padding-bottom: 0.4rem;
        span:nth-of-type(2) {
            position: relative;
            left: 0.8rem;
        }
    }

    input[type='range'] {
        width: 300px;
        margin: 16px 0;
        -webkit-appearance: none;
        background-color: inherit;
        border-width: 16px;
    }

    /* Chrome & Safari  */
    input[type='range']::-webkit-slider-runnable-track {
        background: ${({ theme }) => theme.color.darkGray};
        border-radius: 4px;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        background: #fff;
        margin-top: -1.2rem;
    }

    /* Firefox */
    input[type='range']::-moz-range-track {
        background: ${({ theme }) => theme.color.darkGray};
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        height: 3rem;
        width: 3rem;
        background: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin-top: -1.2rem;
    }

    /* IE */
    input[type='range']::-ms-track {
        background: ${({ theme }) => theme.color.darkGray};
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
    }

    input[type='range']::-ms-thumb {
        -webkit-appearance: none;
        height: 3rem;
        width: 3rem;
        background: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin-top: -1.2rem;
    }
`;

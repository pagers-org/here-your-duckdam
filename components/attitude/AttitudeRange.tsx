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
    margin-top: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    label {
        display: flex;
        width: 100%;
        font-size: 1.3rem;
        justify-content: space-between;
        padding-bottom: 0.4rem;
        & span:nth-of-type(1) {
            position: relative;
            left: -1rem;
        }
        & span:nth-of-type(2) {
            position: relative;
            right: -0.8rem;
        }
        & span:nth-of-type(3) {
            position: relative;
            right: -1rem;
        }
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

    /* Chrome & Safari  */
    input[type='range']::-webkit-slider-runnable-track {
        background: ${({ theme }) => theme.color.darkGray};
        border-radius: 4px;
        width: 100%;
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

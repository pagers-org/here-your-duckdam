import { Bottom } from '@components/layout';
import { Card } from '@components/result';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Custom = () => {
    const router = useRouter();
    const [inputs, setInputs] = useState({
        firstWord: '',
        secondWord: '',
        thirdWord: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const firstWord = event.target.first_word.value;
        const secondWord = event.target.second_word.value;
        const thirdWord = event.target.third_word.value;

        const customMessageData = {
            firstWord,
            secondWord,
            thirdWord,
        };
        setInputs(customMessageData);

        router.push(`load/?isCustom`);
    };

    return (
        <>
            <Wrapper>
                <form
                    // action="/api/duckdam/add"
                    // method="post"
                    onSubmit={handleSubmit}
                >
                    <Card>
                        <h3>누구에게</h3>
                        <p>
                            <input
                                id="first_word"
                                name="first_word"
                                type="text"
                                required
                                placeholder="ex)할로윈을 외롭게 보내고 있을 친구에게"
                            />
                        </p>
                    </Card>
                    <Card>
                        <h3>무엇을</h3>
                        <p>
                            <input
                                id="second_word"
                                name="second_word"
                                type="text"
                                required
                                placeholder="ex)내가 최고로 아끼는 눈깔 사탕을"
                            />
                        </p>
                    </Card>
                    <Card>
                        <h3>어떻게</h3>
                        <p>
                            <input
                                id="third_word"
                                name="third_word"
                                type="text"
                                required
                                placeholder="ex)먹는 퍼포먼스를 보여줄게 냠ㅋ"
                            />
                        </p>
                    </Card>
                    <Bottom>
                        <input type="submit" value="놀릴 준비 됐어 😋"></input>
                    </Bottom>
                </form>
            </Wrapper>
        </>
    );
};
export default Custom;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

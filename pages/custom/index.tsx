// import { Button, Description, EmojiTitle, Title } from '@components/common';
// import { Card } from '@components/result';
import { StyledCard } from '@components/result/Card';
import styled from '@emotion/styled';
import useCustomMessage from '@shared/hooks/useCustomMessage';
import { useRouter } from 'next/router';

const Custom = () => {
    const router = useRouter();
    const { setCustomMessage } = useCustomMessage();
    const customCards = [
        {
            id: 'first_word',
            title: '누구에게',
            placeholder: 'ex) 할로윈을 외롭게 보내고 있을 친구에게',
        },
        {
            id: 'second_word',
            title: '무엇을',
            placeholder: 'ex) 내가 최고로 아끼는 눈깔 사탕을',
        },
        {
            id: 'third_word',
            title: '어떻게',
            placeholder: 'ex) 먹는 퍼포먼스를 보여줄게 냠ㅋ',
        },
    ];
    const customCardsList = customCards.map((card) => {
        return (
            <CustomCard key={customCards.indexOf(card)}>
                <h3>{card.title}</h3>
                <div>
                    <input
                        id={card.id}
                        name={card.id}
                        type="text"
                        required
                        placeholder={card.placeholder}
                    />
                </div>
            </CustomCard>
        );
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
        setCustomMessage(customMessageData);

        router.push(`load/?isCustom`);
    };

    return (
        <>
            <Wrapper>
                <StyledForm
                    // action="/api/duckdam/add"
                    // method="post"
                    onSubmit={handleSubmit}
                >
                    {customCardsList}

                    <CustomButton
                        type="submit"
                        value="놀릴 준비 됐어 😋"
                    ></CustomButton>
                </StyledForm>
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
    justify-content: center;
`;
const StyledForm = styled.form`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const CustomCard = styled(StyledCard)`
    flex-direction: column;
    height: 100%;
    input {
        width: 250px;
        border: none;
        border-bottom: 1px solid gray;
        background: none;
        margin-top: 1em;
    }
`;

const CustomButton = styled.input`
    position: absolute;
    bottom: 10%;
    width: 90%;
    height: 4em;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.dark};
    font-weight: bold;
    font-size: 1em;
`;

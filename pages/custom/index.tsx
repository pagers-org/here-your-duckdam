import styled from '@emotion/styled';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Subtitle, Title } from '@/components/common';
import { StyledSubtitle } from '@/components/common/Subtitle';
import useCustomMessage from '@/shared/hooks/useCustomMessage';

const Custom = () => {
    const router = useRouter();
    const { customMessage, setCustomMessage } = useCustomMessage();
    const customCards = [
        {
            id: 'first_word',
            title: '누구에게?',
            placeholder: 'ex) 할로윈을 외롭게 보내고 있을 친구에게',
        },
        {
            id: 'second_word',
            title: '무엇을?',
            placeholder: 'ex) 내가 최고로 아끼는 눈깔 사탕을',
        },
        {
            id: 'third_word',
            title: '어떻게?',
            placeholder: 'ex) 먹는 퍼포먼스를 보여줄게 냠ㅋ',
        },
    ];
    const customCardsList = customCards.map((card) => {
        return (
            <CustomCard key={customCards.indexOf(card)}>
                <SubtitleVariation>{card.title}</SubtitleVariation>
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

    const postMessage = async () => {
        const newDuckDam = { img_url: 'image', ...customMessage };
        console.log(newDuckDam);
        const url = '/api/duckdam/add';
        const { status } = await axios.post(url, newDuckDam, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (status === 200) {
            router.push(`load`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const first_word = event.target.first_word.value;
        const second_word = event.target.second_word.value;
        const third_word = event.target.third_word.value;

        const customMessageData = {
            first_word,
            second_word,
            third_word,
        };
        setCustomMessage(customMessageData);

        postMessage();
    };

    return (
        <>
            <Wrapper>
                <Subtitle>뭐라고 써서 말장난을 칠까?</Subtitle>
                <StyledForm
                    // action="/api/duckdam/add"
                    // method="post"
                    onSubmit={handleSubmit}
                >
                    {customCardsList}

                    <CustomButton
                        type="submit"
                        value="이제 놀릴 준비 됐어..."
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
const CustomCard = styled.div`
    flex-direction: column;
    width: 90%;
    height: 80px;
    position: relative;
    background: ${({ theme }) => theme.color.background.blur};
    border: 2px solid ${({ theme }) => theme.color.background.white};
    border-radius: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        font-size: 15px;
        width: 250px;
        border: none;
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
    background-color: ${({ theme }) => theme.color.background.button};
    color: ${({ theme }) => theme.color.text.black};
    font-weight: bold;
    font-size: 1em;
`;

const SubtitleVariation = styled(StyledSubtitle)`
    position: absolute;
    top: -30px;
    left: 5px;
`;

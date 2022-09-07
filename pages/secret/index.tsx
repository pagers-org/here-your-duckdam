import styled from "@emotion/styled";
import Image from "next/image";

import loadingGif from "../../public/images/loading-done.gif";
import { Button, Title, Description } from '@components/common';
import {MessageBox, Links} from '@components/secret';

const Secret = () => {
  return (
      <>
          <Image src={loadingGif} width="250" height="250"/>
          <Button text={"링크 생성하기"}></Button>
          <MessageBox>
              <Title text={'덕담이 만들어졌습니다!'} ></Title>
              <Description text={'*남들에게 공유하기 전까지는 비밀로 유지됩니다'}></Description>
          </MessageBox>
          <Links />
      </>
  );
};

export default Secret;

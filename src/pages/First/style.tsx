import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;

  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Content = styled.div`
    margin-top: 45%;
`;
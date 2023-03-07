import styled from "@emotion/styled";

export const Table = styled.section`
  width: 100%;

  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 35px;
`;

export const Contents = styled.div`
    margin-left: 300px;
    padding-left: 20px;
`;

export const InnerDivInTheNameOfTitle = styled.div`
    text-align: center;
`;
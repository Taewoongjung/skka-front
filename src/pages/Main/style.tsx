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

export const SideBar = styled.div`
    height: 100%;
    width: 500px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
`;
import styled from "@emotion/styled";

export const Whole = styled.div` // 이거 나중에 글로벌로 빼기
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`;

export const NavItems = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70px;
  justify-content: end;
`;

export const Bar = styled.i`
  color: white;
`;

export const MenuIcon = styled.div`
  display: none;
`;
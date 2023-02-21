import styled from "styled-components";

export const Container = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
   padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;

export const TitleH2 = styled.h2`
     padding-top: 30px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;
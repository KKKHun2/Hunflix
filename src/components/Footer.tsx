import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column; 
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1.1rem;
  flex-shrink: 0; 
  margin-left:100px;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.2rem; 
    margin-left:0px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 900px) {
    align-items: center; 
    text-align:left;
    margin-left:30px;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 10px;
  color: #fff;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 0.8rem; 
  font-weight: 400;
  background-color: #6f6f6f;
  border: 3px solid #000000;
  border-radius: 8px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  &:hover {
    background-color: ${props => props.theme.color.background};
    color: #8f88d7;
  }
  @media (max-width: 900px) {
    display: none; 
  }
`;

const Logo = styled.div`
  text-decoration: none;
  font-size: 35px; 
  font-weight: bold; 
  color:${props => props.theme.color.point};
  margin-right: 20px; 
  @media (max-width: 900px) {
    margin-right: 0; 
    margin-bottom: 5px; 
  }
  &:hover {
    color:${props => props.theme.color.text};
  }
`;

const GitIcon = styled(BsGithub)`
  margin-right: 2px;
  font-size: 15px;
`;


const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Logo as={Link} to= "/">HUNFLIX</Logo>
        <TextContainer>
          <TextColumn>
            만든이: 김용훈  <br />
            번호: 010-5173-5524
          </TextColumn>
          <TextColumn>
           이메일: 1224kim2son@naver.com,  
                <br />
            Copyright HUNFLIX ©2023 All rights reserved
          </TextColumn>
        </TextContainer>
        <StyledButton as={Link} to="https://github.com/KKKHun2">
          <GitIcon />
          GitHub로 바로가기
        </StyledButton>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

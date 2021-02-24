/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import ReactSafeHtml from 'react-safe-html';
import Footer from './Footer';

export default function Exercise(props) {
  const { exercise } = props;

  return (
    <Container>
      <ContainerLeft>
        <Enunciated>
          <ReactSafeHtml html={exercise.enunciated} />
        </Enunciated>
        <Footer {...props} />
      </ContainerLeft>
      <ContainerRight>
        code
      </ContainerRight>
    </Container>
  );
}

const ContainerLeft = styled.div`
  background-color: transparent;
  padding: 28px;
  height: 100%;
  width: 40%;
  position: relative;
  color: #E0E0E0;
  font-family: 'Roboto';

  footer{
    bottom: 10px;
    left: 0;
    position: absolute;
    padding: 0 28px;
    flex-wrap: wrap;

    button{
      width: 130px;
    }
  }
`;

const Enunciated = styled.div`
  overflow-y: auto;
  height: calc(100% - 80px);
  margin-bottom: 20px;

  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #FFFFFF;
  }

  p{
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  flex-shrink: 0;
  background-color: blue;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 2;
`;

export const Container = styled.div`
  width: 546px;
  background-color: white;
  padding: 24px 24px 16px 24px;
  border-radius: 8px;
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

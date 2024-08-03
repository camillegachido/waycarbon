import styled from 'styled-components';

export const Container = styled.article`
  padding-left: 28px;
  border-left: 1px solid ${({ theme }) => theme.secondary.main};
  margin-bottom: 15px;
`;

export const Author = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.primary.dark};
  line-height: 40px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 28px;
`;

export const Actions = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const ActionsGroup = styled.div`
  gap: 14px;
  display: inline-flex;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  gap: 6px;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  * {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const TextArea = styled.textarea`
  border-color: ${({ theme }) => theme.text.light};
  border-radius: 8px;
  height: 128px;
  width: 100%;
  padding: 12px;
  background-color: white;
  resize: none;
`;

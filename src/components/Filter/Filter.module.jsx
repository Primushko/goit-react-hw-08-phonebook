import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;

  background: rgba(42, 140, 252, 0.5);
  border: 1px solid #f3fa39;
  border-radius: 18px;

  :placeholder {
    color: #757575;
  }
`;

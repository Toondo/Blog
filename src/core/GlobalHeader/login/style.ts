import { styled } from '~/libs/styled';

// display: ${(props) => (props.show ? 'block' : 'none')};
export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 130px;
  min-height: 100px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #333333;
  z-index: 4;
`;

export const LoginMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const LoginButton = styled.button`
  padding: 10px;
  margin: 5px 5px;
  width: 120px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SingUpButton = styled.button`
  margin: 5px 5px;
  padding: 10px;
  width: 120px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
